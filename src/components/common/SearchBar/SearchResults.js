import React from 'react';
import { Table, Divider, Empty } from 'antd';
import { FileUnknownFilled } from '@ant-design/icons';

function Results(props) {
  //const { name, caseManager, dateRange } = props.searchResults;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => <a>{name}</a>,
    },
    {
      title: 'Case Manager',
      dataIndex: 'caseManager',
      key: 'caseManager',
    },
    {
      title: 'Date Range',
      dataIndex: 'dateRange',
      key: 'dateRange',
    },
  ];
  return (
    <div>
      <h2>Results</h2>
      <Table columns={columns} dataSource={props.searchResults} />
    </div>
  );
}

function SearchResults(props) {
  console.log('search results', props.searchResults);
  const results = props.searchResults.length > 0 ? props.searchResults : false;
  if (results) {
    return <Results searchResults={props.searchResults} />;
  }

  if (props.searchTerm !== '' && !results) {
    return (
      <div>
        <Divider dashed />
        <Empty
          description={
            'The search tearm did not match any case. Please refine your search'
          }
        />
      </div>
    );
  }

  return <p></p>;
}

export default SearchResults;
