import React from 'react';
import { Table } from 'antd';

const FamilyListTable = ({ family }) => {
  const data = family.map(oneFamily => {
    return {
      key: oneFamily.id,
      family_id: oneFamily.id,
      name: oneFamily.name,
      email: oneFamily.email,
      case_manager: oneFamily.username,
    };
  });

  //console.log('familyList', data);

  const columns = [
    {
      title: 'Family ID',
      key: 'key',
      dataIndex: 'family_id',
    },
    {
      title: 'Name',
      key: 'key',
      dataIndex: 'name',
    },
    {
      title: 'Case Manager',
      key: 'key',
      dataIndex: 'case_manager',
    },
    {
      title: 'Email',
      key: 'key',
      dataIndex: 'email',
    },
  ];

  return (
    <div>
      <Table dataSource={data} columns={columns}></Table>
    </div>
  );
};

export default FamilyListTable;
