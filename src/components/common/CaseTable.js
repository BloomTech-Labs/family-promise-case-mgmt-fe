import React from 'react';
import { Table, Tag } from 'antd';

const data = [
  {
    key: '1',
    clientName: 'John Doe',
    caseType: 'Housing',
    status: 'Active',
    dateOpened: '2022-01-01',
    assignedTo: 'Jane Smith',
  },
  {
    key: '2',
    clientName: 'Jane Smith',
    caseType: 'Employment',
    status: 'Inactive',
    dateOpened: '2022-02-01',
    assignedTo: 'John Doe',
  },
  {
    key: '3',
    clientName: 'Bob Johnson',
    caseType: 'Housing',
    status: 'Active',
    dateOpened: '2022-03-01',
    assignedTo: 'Jane Smith',
  },
];

const CaseTable = () => {
  const columns = [
    {
      title: 'Client Name',
      dataIndex: 'clientName',
      key: 'clientName',
    },
    {
      title: 'Case Type',
      dataIndex: 'caseType',
      key: 'caseType',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: text => (
        <Tag color={text === 'Active' ? 'green' : 'red'}>{text}</Tag>
      ),
    },
    {
      title: 'Date Opened',
      dataIndex: 'dateOpened',
      key: 'dateOpened',
    },
    {
      title: 'Assigned To',
      dataIndex: 'assignedTo',
      key: 'assignedTo',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default CaseTable;
