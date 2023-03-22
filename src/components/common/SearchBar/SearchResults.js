import React from 'react';
<<<<<<< HEAD
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
      <h2>Results</h2>
      <Table columns={columns} dataSource={props.searchResults} />
=======

function Results(props) {
  //const { name, caseManager, dateRange } = props.searchResults;

  return (
    <div>
      <h2>Results</h2>
      {props.searchResults.map(({ name, caseManager, dateRange }) => (
        <div key={name}>
          <p>name : {name} </p>
          <p>Case Manager : {caseManager}</p>
          <p>Date Range : {dateRange}</p>
        </div>
      ))}
      {/* {`${name} ${caseManager} ${dateRange}  `} */};
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
    </div>
  );
}

function SearchResults(props) {
  console.log('search results', props.searchResults);
  const results = props.searchResults.length > 0 ? props.searchResults : false;
  if (results) {
    return <Results searchResults={props.searchResults} />;
  }
<<<<<<< HEAD

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
=======
  return (
    <div>
      <p>{`results ? : ${results.toString()} `}</p>
    </div>
  );
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
}

export default SearchResults;
