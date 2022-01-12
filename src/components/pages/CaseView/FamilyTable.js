import React from 'react';
import { Table } from 'antd';

const FamilyMembersTable = () => {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Submenu',
              value: 'Submenu',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          // specify the condition of filtering result
          // here is that finding the name started with `value`
          onFilter: (value, record) => record.name.indexOf(value) === 0,
          sorter: (a, b) => a.name.length - b.name.length,
          sortDirections: ['descend'],
        },
        {
          title: 'Birth Date',
          dataIndex: 'birthDate'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          filters: [
            {
              text: 'Male',
              value: 'Male',
            },
            {
              text: 'Female',
              value: 'Female',
            }
          ],
          onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Relation to Guardian',
            dataIndex: 'relationshipToGuardian'
          },
          {
            title: 'SSN',
            dataIndex: 'ssn'
          },
          {
            title: 'Veteran',
            dataIndex: 'veteran'
          },
          {
            title: 'Education',
            dataIndex: 'education'
          },
          {
            title: 'Employment',
            dataIndex: 'employment'
          },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          gender: 'Male',
          birthDate: 12-5-1498,
          ssn: '123-45-678',
          veteran: "No",
          education: "Some High School",
          employment: "Employed",
        },
        {
          key: '2',
          name: 'Jim Green',
          gender: 'Male',
          birthDate: 5-3-8965,
          relationshipToGuardian: "Father",
          ssn: '123-45-678',
          veteran: "No",
          education: "Middle School",
          employment: "Retired",
        },
        {
          key: '3',
          gender: 'Female',
          name: 'Jen Black',
          birthDate: 11-5-7894,
          relationshipToGuardian: "Spouse",
          ssn: '123-45-678',
          veteran: "No",
          education: "High School",
          employment: "Student",
        },
        {
          key: '4',
          name: 'Jim Red',
          gender: 'Female',
          birthDate: 63-75-4826,
          relationshipToGuardian: "Child",
          ssn: '123-45-678',
          veteran: "No",
          education: "High School",
          employment: "Student",
        },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return (
        <div>
            <h2>Family Members Table</h2>
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
    )
}

export default FamilyMembersTable;

