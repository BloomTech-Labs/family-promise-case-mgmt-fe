import React from 'react';
import DashHeader from './DashHeader';
import { Table } from 'antd';

const columns = [
  //adding info for each column
  {
    title: 'CASE ID',
    dataIndex: 'caseId',
    sorter: (a, b) => a.caseId.length - b.caseId.length,
    sortDirections: ['descend'],
  },
  {
    title: 'LAST',
    dataIndex: 'last',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.last - b.last,
  },
  {
    title: 'FIRST',
    dataIndex: 'first',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.first - b.first,
  },
  {
    title: 'UPDATED',
    dataIndex: 'updated',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.updated - b.updated,
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.location - b.location,
  },
  {
    title: 'LATEST NOTE',
    dataIndex: 'latestNote',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.latestNote - b.latestNote,
  },
];

const data = [
  {
    key: '1',
    caseId: 'XXXXX',
    last: 'Lawson',
    first: 'Micheal',
    updated: 'XX-XX-XXXX',
    location: 'Cheney',
    latestNote: 'Met with family.',
  },
  {
    key: '2',
    caseId: 'XXXXX',
    last: 'Ferguson',
    first: 'Lindsay',
    updated: 'XX-XX-XXXX',
    location: 'Infant House',
    latestNote: 'Met with family.',
  },
  {
    key: '3',
    caseId: 'XXXXX',
    last: 'Funk',
    first: 'Tobias',
    updated: 'XX-XX-XXXX',
    location: 'Hartson',
    latestNote: 'Met with family.',
  },
  {
    key: '4',
    caseId: 'XXXXX',
    last: 'Braun',
    first: 'Oma',
    updated: 'XX-XX-XXXX',
    location: 'Hartson',
    latestNote: 'Met with family.',
  },
  {
    key: '5',
    caseId: 'XXXXX',
    last: 'Fields',
    first: 'Byron',
    updated: 'XX-XX-XXXX',
    location: 'Family Emergency Shelter',
    latestNote: 'Met with family.',
  },
  {
    key: '6',
    caseId: 'XXXXX',
    last: 'Garcia',
    first: 'Fatima',
    updated: 'XX-XX-XXXX',
    location: 'Infant House',
    latestNote: 'Met with family.',
  },
  {
    key: '7',
    caseId: 'XXXXX',
    last: 'Rodriguez',
    first: 'Gabriel',
    updated: 'XX-XX-XXXX',
    location: 'Cheney',
    latestNote: 'Met with family.',
  },
  {
    key: '8',
    caseId: 'XXXXX',
    last: 'Hayes',
    first: 'Hanna',
    updated: 'XX-XX-XXXX',
    location: 'Mission House',
    latestNote: 'Met with family.',
  },
  {
    key: '9',
    caseId: 'XXXXX',
    last: 'McBride',
    first: 'Diya',
    updated: 'XX-XX-XXXX',
    location: 'Family Emergency Shelter',
    latestNote: 'Met with family.',
  },
  {
    key: '10',
    caseId: 'XXXXX',
    last: 'Welch',
    first: 'Ali',
    updated: 'XX-XX-XXXX',
    location: 'Mission House',
    latestNote: 'Met with family.',
  },
];

const onChange = (filters, sorter, extra) => {
  console.log('params', filters, sorter, extra);
};

const RecentCases = () => {
  return (
    <div>
      <DashHeader />
      <div className="TableData">
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  );
};

export default RecentCases;
