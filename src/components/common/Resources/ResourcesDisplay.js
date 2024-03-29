import React, { useState } from 'react';
import {
  List,
  Card,
  Modal,
  Dropdown,
  Input,
  Checkbox,
  Form,
  Select,
} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { dataSource } from './resourcesDataTemp';

const { TextArea } = Input;

const ResourcesDisplay = () => {
  const [details, setDetails] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submitModalIsOpen, setSubmitModalIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(dataSource);
  const [formResourceTitle, setFormResourceTitle] = useState('');
  const [formPhoneNumber, setFormPhoneNumber] = useState('');
  const [formResourceType, setFormResourceType] = useState('');
  const [formQualifications, setFormQualifications] = useState('');
  const [formDetails, setFormDetails] = useState('');
  const [editId, setEditId] = useState('');

  const filterItems = item => {
    console.log(
      item.title.includes(`${filter}`),
      item.content.phoneNumber.includes(`${filter}`),
      item.content.resourceType.includes(`${filter}`),
      item.content.details.includes(`${filter}`)
    );
    if (
      item.title.includes(filter) ||
      item.content.phoneNumber.includes(filter) ||
      item.content.resourceType.includes(filter) ||
      item.content.details.includes(filter)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleFilter = e => {
    setFilter(e.target.value);
    setData(dataSource.filter(filterItems));
    console.log(e.target.checked);
    if (e.target.checked)
      setData(
        dataSource.filter(item => {
          return item.content.qualifications.includes('Yes');
        })
      );
    if (!e.target.value && !e.target.checked) setData(dataSource);
  };

  const handleDetails = details => {
    setDetails(details);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clearForm();
  };

  const toggleSubmitModal = () => {
    setSubmitModalIsOpen(!submitModalIsOpen);
    clearForm();
  };

  const toggleOpen = () => {
    setOpen(!open);
  };

  const onSubmit = event => {
    event.preventDefault();
    const newResource = {
      id: data.length - 1, //temporary 'fake' id will be replaced with an id given by a database
      title: formResourceTitle,
      content: {
        phoneNumber: formPhoneNumber,
        resourceType: formResourceType,
        qualifications: formQualifications,
        details: formDetails,
      },
    };

    //axios call would go here
    //endpoint does not currently exist

    setData([...data, newResource]);

    clearForm();

    toggleSubmitModal();
  };

  const handleDelete = id => {
    //axios call would go here
    //endpoint does not currently exist

    setData(
      data.filter(item => {
        return item.id !== id;
      })
    );
  };

  const clearForm = () => {
    setFormResourceTitle('');
    setFormResourceType('');
    setFormQualifications('');
    setFormPhoneNumber('');
    setFormDetails('');
    setEditId('');
  };

  const handleEdit = id => {
    const [resource] = data.filter(item => {
      return item.id === id;
    });

    toggleModal();
    toggleSubmitModal();

    setEditId(id);
    setFormResourceTitle(resource.title);
    setFormPhoneNumber(resource.content.phoneNumber);
    setFormResourceType(resource.content.resourceType);
    setFormQualifications(resource.content.qualifications);
    setFormDetails(resource.content.details);
  };

  const onApply = event => {
    event.preventDefault();

    //axios call would go here
    //endpoint does not currently exist

    const changedResource = {
      id: editId, //temporary 'fake' id will be replaced with an id given by a database
      title: formResourceTitle,
      content: {
        phoneNumber: formPhoneNumber,
        resourceType: formResourceType,
        qualifications: formQualifications,
        details: formDetails,
      },
    };

    setData([
      ...data.filter(item => {
        return item.id !== editId;
      }),
      changedResource,
    ]);

    toggleSubmitModal();
  };

  const items = [
    {
      label: (
        <Input
          className="Filter__Input"
          value={filter}
          defaultValue={' '}
          onClick={handleFilter}
          onChange={handleFilter}
        />
      ),
      key: '0',
    },
    {
      label: <Checkbox onChange={handleFilter}> Qualified </Checkbox>,
      key: '1',
    },
  ];

  return (
    <>
      <h2 className="Resources__Title">Resources</h2>
      <Dropdown.Button
        icon={''}
        menu={{ items }}
        placement={'bottomRight'}
        className={'Filter__Button'}
        trigger={['click']}
        open={open}
        onClick={toggleOpen}
      >
        Filter <FilterOutlined />
      </Dropdown.Button>
      <List
        className="Resource__List"
        grid={{
          gutter: 16,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={item => {
          return (
            <List.Item>
              <Card
                onClick={() => {
                  toggleModal();
                  handleDetails(item);
                }}
                className="Resource__Card"
                title={item.title}
              >
                {item.content.resourceType}
              </Card>
            </List.Item>
          );
        }}
      />
      <Modal
        className="Resources__Modal"
        title={details.title}
        footer={''}
        onCancel={toggleModal}
        open={modalIsOpen}
      >
        <div className="Resource__SmallDetails">
          <p>
            Phone Number: {` ${details ? details.content.phoneNumber : ''}`}
          </p>
          <p>
            Resource Type: {` ${details ? details.content.resourceType : ''}`}
          </p>
          <p>
            Qualifications:{' '}
            {` ${details ? details.content.qualifications : ''}`}
          </p>
        </div>
        <p className="Resource__Details">
          Details: {` ${details ? details.content.details : ''}`}
        </p>
        {/* {console.log(details.id)} */}
        <button
          className="Resource__DeleteButton"
          onClick={() => handleDelete(details.id)}
        >
          Delete
        </button>
        <button
          className="Resource__EditButton"
          onClick={() => handleEdit(details.id)}
        >
          Edit
        </button>
      </Modal>
      <Modal
        className="Resources__Modal SubmitModal"
        title={editId ? `Edit ${formResourceTitle}` : 'Add a Resource'}
        footer={''}
        onCancel={toggleSubmitModal}
        open={submitModalIsOpen}
      >
        <Form
          className="SubmitModal__Form"
          onSubmit={editId ? onApply : onSubmit}
        >
          <Form.Item label="Resource Title">
            <Input
              className="SubmitModal__Input"
              name="title"
              value={formResourceTitle}
              placeholder="Resource Title"
              onChange={e => setFormResourceTitle(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Phone Number">
            <Input
              className="SubmitModal__Input"
              name="phone"
              value={formPhoneNumber}
              placeholder="Phone number"
              onChange={e => setFormPhoneNumber(e.target.value)}
            />
          </Form.Item>

          <Form.Item label="Resource Type">
            <Input
              className="SubmitModal__Input"
              name="type"
              value={formResourceType}
              placeholder="Resource Type"
              onChange={e => setFormResourceType(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Qualifications">
            <Select
              className="SubmitModal__Dropdown"
              name="qualifications"
              value={formQualifications}
              onChange={e => setFormQualifications(e)}
            >
              <Select.Option value="Yes" />
              <Select.Option value="No" />
            </Select>
          </Form.Item>

          <Form.Item label="Details">
            <TextArea
              className="SubmitModal__TextArea"
              placeholder="Details"
              name="details"
              value={formDetails}
              onChange={e => setFormDetails(e.target.value)}
            />
          </Form.Item>
          <button onClick={editId ? onApply : onSubmit}>
            {editId ? 'Apply' : 'Submit'}
          </button>
        </Form>
      </Modal>
      <button className="Resources__Button" onClick={toggleSubmitModal}>
        ADD RESOURCE
      </button>
    </>
  );
};

export default ResourcesDisplay;
