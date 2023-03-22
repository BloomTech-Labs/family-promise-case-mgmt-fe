import React from 'react';

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
    </div>
  );
}

function SearchResults(props) {
  console.log('search results', props.searchResults);
  const results = props.searchResults.length > 0 ? props.searchResults : false;
  if (results) {
    return <Results searchResults={props.searchResults} />;
  }
  return (
    <div>
      <p>{`results ? : ${results.toString()} `}</p>
    </div>
  );
}

export default SearchResults;
