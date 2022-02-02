import React, { useState } from 'react';
import { FamilyIntake } from '../../common/FamilyIntake';
import { Table, Button, Modal, Form, Input } from 'antd';

const FamilyMembersTable = ({ familyData }) => {
  const [visible, setVisible] = useState(false);
  const [viewNotes, setViewNotes] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastname',
    },
    {
      title: 'Birth Date',
      dataIndex: 'birthDate',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'rel. to guardian',
      dataIndex: 'relationshipToGuardian',
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
    },
    {
      title: 'Veteran',
      dataIndex: 'veteran',
    },
    {
      title: 'Education',
      dataIndex: 'education',
    },
    {
      title: 'Employment',
      dataIndex: 'employment',
    },
  ];

  const data = familyData.familyMembers.map(e => {
    return {
      key: e.id,
      name: e.firstname,
      lastname: e.lastname,
      birthDate: e.birthDate,
      gender: e.gender,
      relationshipToGuardian: e.relationshipToGuardian,
      ssn: e.ssn,
      veteran: e.veteran,
      education: e.education,
      employment: e.employment,
    };
  });

  const notesData = [
    {
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: new Date().toDateString(),
    },
    {
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: new Date().toDateString(),
    },
    {
      body:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      timestamp: new Date().toDateString(),
    },
  ];

  const CollectionCreateForm = ({ visible, onCancel }) => {
    return (
      <Modal
        visible={visible}
        width={'91%'}
        title="Manage Family Information"
        cancelText="Cancel"
        onCancel={onCancel}
        footer={null}
      >
        <FamilyIntake />
      </Modal>
    );
  };

  const NotesModal = ({ viewNotes, onCancel }) => {
    return (
      <Modal
        visible={viewNotes}
        width={'91%'}
        title="Notes"
        cancelText="Cancel"
        onCancel={onCancel}
        footer={null}
      >
        <Form onFinish={e => addNote(e)}>
          <Form.Item name="body">
            <Input.TextArea />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: '12px' }}
          >
            Add Note
          </Button>
        </Form>
        <br />
        <br />

        {notesData.map(note => {
          return (
            <div>
              <h4>{note.timestamp}</h4>
              <p>{note.body}</p>
            </div>
          );
        })}
      </Modal>
    );
  };

  const addNote = note => {
    const newNote = {
      body: note.body,
      timestamp: new Date().toDateString(),
    };
    notesData.push(newNote);
    console.log(notesData);
  };

  const onCreate = values => {
    console.log('Received values of form: ', values);
    setVisible(false);
  };

  return (
    <div>
      <div>
        <div style={{ display: 'flex' }}>
          <h2>Family Members Table</h2>
          <Button
            type="primary"
            style={{ marginLeft: '12px' }}
            onClick={() => {
              setVisible(true);
            }}
          >
            Edit
          </Button>
          <Button
            type="primary"
            style={{ marginLeft: '12px' }}
            onClick={() => {
              setViewNotes(true);
            }}
          >
            Notes
          </Button>
          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
          <NotesModal
            viewNotes={viewNotes}
            // onCreate={onCreate}
            onCancel={() => {
              setViewNotes(false);
            }}
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default FamilyMembersTable;
