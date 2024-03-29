import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Divider, Empty } from 'antd';
// import { FileUnknownFilled } from '@ant-design/icons';

function Results(props) {
  //const { name, caseManager, dateRange } = props.searchResults;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: name => <Link to={`/cases/${name}`}>{name}</Link>,
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
      <Divider dashed className="SearchResultsDivider">
        Results
      </Divider>
      <Table columns={columns} dataSource={props.searchResults} />
    </div>
  );
}

function SearchResults(props) {
  // console.log('search results', props.searchResults);
  const results = props.searchResults.length > 0 ? props.searchResults : false;
  if (results) {
    return <Results searchResults={props.searchResults} />;
  }

  if (props.searchTerm !== '' && !results) {
    return (
      <>
        <Empty
          description={
            'The search term did not match any case. Please refine your search'
          }
        />
      </>
    );
  }

  return <></>;
}

export default SearchResults;
