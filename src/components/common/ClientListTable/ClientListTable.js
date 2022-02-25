import React from 'react';
import { Table, Tag } from 'antd';

const ClientListTable = ({ clients }) => {
  const { Column, ColumnGroup } = Table;

  const data = clients.map(client => {
    return {
      key: client.household_id,
      household_id: client.household_id,
      first_name: client.first_name,
      last_name: client.last_name,
      case_manager: client.case_manager,
      status: client.status,
    };
  });
  return (
    /*
      Everything in this table will be hard coded until:
        - Table is updated to current product vision
        - Table's headers and data values are updated to match the DB
    */
    <div>
      <Table dataSource={data}>
        <Column
          title="Household ID"
          dataIndex="household_id"
          key="household_id"
        />
        <ColumnGroup title="Head of Household">
          <Column title="First Name" dataIndex="first_name" key="first_name" />
          <Column title="Last Name" dataIndex="last_name" key="last_name" />
        </ColumnGroup>
        <Column
          title="Case Manager"
          dataIndex="case_manager"
          key="case_manager"
        />
        <Column
          title="Case Status"
          dataIndex="status"
          key="status"
          render={status => {
            let color = 'orange';
            if (status === 'Completed') {
              color = 'green';
            }
            if (status === 'Needs Follow-Up') {
              color = 'red';
            }
            return (
              <Tag color={color} key="status">
                {status}
              </Tag>
            );
          }}
        />
        <Column
          key="view_case"
          render={text => <a href={`/cases/:caseID`}>View Case</a>}
        />
      </Table>
    </div>
  );
};

export default ClientListTable;
