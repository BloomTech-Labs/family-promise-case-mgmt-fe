import React from 'react';
import { Table, Tag } from 'antd';

const CaseTable = () => {
  const dataSource = [
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
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: "Client's Email Address",
      dataIndex: 'clientEmail',
      key: 'clientEmail',
    },
    {
      title: 'Additional Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};

export default CaseTable;
