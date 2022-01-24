import React from 'react';
import { Table, Tag } from 'antd';

const FamilyListTable = ({ family }) => {
  const { Column, ColumnGroup } = Table;

  const data = family.map(oneFamily => {
    return {
      key: oneFamily.household_id,
      household_id: oneFamily.household_id,
      first_name: oneFamily.first_name,
      last_name: oneFamily.last_name,
      case_manager: oneFamily.case_manager,
      status: oneFamily.status,
    };
  });

  return (
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
          render={text => <a href="/case-view">View Case</a>}
        />
      </Table>
    </div>
  );
};

export default FamilyListTable;
