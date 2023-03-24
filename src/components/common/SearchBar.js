import React, { useState } from 'react';
import SearchResults from './SearchResults';

function Search(props) {
  // Set up state to keep track of search term and search criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');

  // Function to handle search form submission
  const handleSearch = e => {
    e.preventDefault();
    props.onSubmit(searchTerm, searchCriteria);
  };

  return (
    <form onSubmit={handleSearch}>
      <label htmlFor="searchTerm">Search Term:</label>
      <input
        type="text"
        id="searchTerm"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <label htmlFor="searchCriteria">Search Criteria:</label>
      <select
        id="searchCriteria"
        value={searchCriteria}
        onChange={e => setSearchCriteria(e.target.value)}
      >
        <option value="">Select Search Criteria</option>
        <option value="name">Name</option>
        <option value="caseManager">Case Manager</option>
        <option value="dateRange">Date Range</option>
      </select>

      <button type="submit">Search</button>
    </form>
  );
}

//formerly FamilyPromiseCMS
function SearchBar(props) {
  // Set up state to keep track of search results
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search form submission
  const handleSearchSubmit = (searchTerm, searchCriteria) => {
    console.log('HANDLE SEARCH SUBMIT', ` ${searchTerm}  ${searchCriteria}`);
    // Perform static search based on search criteria
    const results = performStaticSearch(searchTerm, searchCriteria);
    setSearchResults(results);
  };

  // Function to perform static search based on search criteria
  const performStaticSearch = (searchTerm, searchCriteria) => {
    // Perform search based on search criteria
    const results = [
      {
        name: 'John Doe',
        caseManager: 'Jane Smith',
        dateRange: '01/01/2023 - 02/01/2023',
      },
      {
        name: 'Jane Smith',
        caseManager: 'John Doe',
        dateRange: '02/01/2023 - 03/01/2023',
      },
      {
        name: 'Bob Johnson',
        caseManager: 'Jane Smith',
        dateRange: '03/01/2023 - 04/01/2023',
      },
    ];

    console.log(
      'pio',
      results[0].name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Filter search results based on search criteria
    const filteredResults = results.filter(result => {
      if (searchCriteria === 'name') {
        return result.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (searchCriteria === 'caseManager') {
        return result.caseManager
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      } else if (searchCriteria === 'dateRange') {
        return result.dateRange
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
      return 'void';
    });
    console.log('filteredResults', filteredResults);
    return filteredResults[0];
    // return 'pio';
  };

  return (
    <div>
      <Search onSubmit={handleSearchSubmit} />
      <SearchResults searchResults={searchResults} />
    </div>
  );
}

export default SearchBar;
