import React from 'react';
import { Table } from 'antd';

const FamilyMembersTable = ({ familyData }) => {
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

  return (
    <div>
      <h2>Family Members Table</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default FamilyMembersTable;
