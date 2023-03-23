import React, { useState } from 'react';
import { Table, Tag, Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledTable = styled(Table)`
  .ant-table {
    font-size: 14px;
  }
  margin-top: 24px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 36px;
`;

const ClientListTable = ({ clients }) => {
  const { Column, ColumnGroup } = Table;
  const [searchText, setSearchText] = useState('');

  const data = clients.map(client => ({
    key: client.household_id,
    household_id: client.household_id,
    first_name: client.first_name,
    last_name: client.last_name,
    case_manager: client.case_manager,
    status: client.status,
  }));

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
  };

  return (
    <div>
      <TableHeader>
        <h2>Cases</h2>
        <Space>
          <Input
            placeholder="Search cases"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
        </Space>
      </TableHeader>
      <StyledTable
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        pagination={{ pageSize: 10 }}
      >
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
      </StyledTable>
    </div>
  );
};

export default ClientListTable;
