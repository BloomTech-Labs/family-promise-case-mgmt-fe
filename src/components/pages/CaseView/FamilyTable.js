import React, { useState } from 'react';
import { FamilyIntake } from '../../common/FamilyIntake';
import { Table, Button, Modal, Form, Input } from 'antd';

const FamilyMembersTable = ({ familyData }) => {
  console.log('familyData', familyData);
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

  const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        visible={visible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCreate(values);
            })
            .catch(info => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <FamilyIntake />
      </Modal>
    );
  };
  // const CollectionsPage = () => {
  //   const [visible, setVisible] = useState(false);
  //   const onCreate = values => {
  //     console.log('Received values of form: ', values);
  //     setVisible(false);
  //   };
  // };
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <h2>Family Members Table</h2>
        <Button type="primary" style={{ marginLeft: '12px' }}>
          Edit
        </Button>
      </div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default FamilyMembersTable;
