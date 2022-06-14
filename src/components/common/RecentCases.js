import React from 'react';
import DashHeader from './DashHeader';
import { Table } from 'antd';

const sorterString = (a, b) => a.localeCompare(b);
const columns = [
  //adding info for each column
  {
    title: 'CASE ID',
    dataIndex: 'caseId',
    sorter: (a, b) => a.caseId - b.caseId,
    sortDirections: ['descend'],
  },
  {
    title: 'LAST',
    dataIndex: 'last',
    defaultSortOrder: 'descend',
    sorter: (a, b) => sorterString(a.last, b.last),
  },
  {
    title: 'FIRST',
    dataIndex: 'first',
    defaultSortOrder: 'descend',
    sorter: (a, b) => sorterString(a.first, b.first),
  },
  {
    title: 'UPDATED',
    dataIndex: 'updated',
    defaultSortOrder: 'descend',
    sorter: (a, b) => sorterString(a.updated, b.updated),
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    defaultSortOrder: 'descend',
    sorter: (a, b) => sorterString(a.location, b.location),
  },
  {
    title: 'LATEST NOTE',
    dataIndex: 'latestNote',
  },
];

const data = [
  {
    key: '1',
    caseId: 1,
    last: 'Lawson',
    first: 'Micheal',
    updated: '2022-06-08',
    location: 'Cheney',
    latestNote: 'Met with family.',
  },
  {
    key: '2',
    caseId: 2,
    last: 'Ferguson',
    first: 'Lindsay',
    updated: '2022-06-07',
    location: 'Infant House',
    latestNote: 'Met with family.',
  },
  {
    key: '3',
    caseId: 3,
    last: 'Funk',
    first: 'Tobias',
    updated: '2022-06-07',
    location: 'Hartson',
    latestNote: 'Met with family.',
  },
  {
    key: '4',
    caseId: 4,
    last: 'Braun',
    first: 'Oma',
    updated: '2022-06-05',
    location: 'Hartson',
    latestNote: 'Met with family.',
  },
  {
    key: '5',
    caseId: 5,
    last: 'Fields',
    first: 'Byron',
    updated: '2022-05-31',
    location: 'Family Emergency Shelter',
    latestNote: 'Met with family.',
  },
  {
    key: '6',
    caseId: 6,
    last: 'Garcia',
    first: 'Fatima',
    updated: '2022-05-30',
    location: 'Infant House',
    latestNote: 'Met with family.',
  },
  {
    key: '7',
    caseId: 7,
    last: 'Rodriguez',
    first: 'Gabriel',
    updated: '2022-06-03',
    location: 'Cheney',
    latestNote: 'Met with family.',
  },
  {
    key: '8',
    caseId: 8,
    last: 'Hayes',
    first: 'Hanna',
    updated: '2022-06-03',
    location: 'Mission House',
    latestNote: 'Met with family.',
  },
  {
    key: '9',
    caseId: 9,
    last: 'McBride',
    first: 'Diya',
    updated: '2022-05-31',
    location: 'Family Emergency Shelter',
    latestNote: 'Met with family.',
  },
  {
    key: '10',
    caseId: 10,
    last: 'Welch',
    first: 'Ali',
    updated: '2022-05-29',
    location: 'Mission House',
    latestNote: 'Met with family.',
  },
];

const onChange = (filters, sorter, extra) => {
  console.log('params', filters, sorter, extra);
};

const RecentCases = () => {
  return (
    <div className="RecentCases">
      <DashHeader />
      <div className="column">
        <div className="TableData">
          <h1 className="CasesTitle">Recent Cases</h1>
          <Table
            columns={columns}
            dataSource={data}
            onChange={onChange}
            pagination={false}
          />
        </div>

        <div className="RecentActivity">
          <h1 className="ActivityTitle">Recent Activity</h1>
        </div>
      </div>
    </div>
  );
};

export default RecentCases;
