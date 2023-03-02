import React, { useState } from 'react';
import { List, Card, Modal, Dropdown, Input, Checkbox } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { dataSource } from './resourcesDataTemp';

const ResourcesDisplay = () => {
  const [details, setDetails] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(dataSource);

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
  };

  const toggleOpen = () => {
    setOpen(!open);
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
      </Modal>
      <button className="Resources__Button">ADD RESOURCE</button>
    </>
  );
};

export default ResourcesDisplay;
