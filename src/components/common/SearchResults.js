import React from 'react';

function SearchResults(props) {
  const { name, caseManager, dateRange } = props.searchResults;

  return (
    <p>
      this is search results page
      {`${name} ${caseManager} ${dateRange}  `}
    </p>
  );
}

export default SearchResults;
