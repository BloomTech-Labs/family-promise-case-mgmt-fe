import React, { useState } from 'react';
import Search from './Search';

function SearchBar(props) {
  // Set up state to keep track of search results
  const [searchResults, setSearchResults] = useState([]);

  // handle search form submission
  const handleSearchSubmit = (searchTerm, searchCriteria) => {
    // Perform static search based on search criteria
    // TODO :: update using API call
    const results = performStaticSearch(searchTerm, searchCriteria);
    setSearchResults(results);
  };

  // Function to perform static search based on search criteria
  const performStaticSearch = (searchTerm, searchCriteria) => {
    // Perform search based on search criteria
    const results = [
      {
        key: '1',
        name: 'John Doe',
        caseManager: 'Jane Smith',
        dateRange: '01/01/2023 - 02/01/2023',
      },
      {
        key: '2',
        name: 'Jane Smith',
        caseManager: 'John Doe',
        dateRange: '02/01/2023 - 03/01/2023',
      },
      {
        key: '3',
        name: 'Bob Johnson',
        caseManager: 'Jane Smith',
        dateRange: '03/01/2023 - 04/01/2023',
      },
    ];

    const filteredResults = results.filter(result => {
      const isNameMatch = result.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isCaseManagerMatch = result.caseManager
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isDateRangeMatch = result.dateRange
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      // Search by name
      if (searchCriteria === 'name') {
        return isNameMatch;
      }
      // Search by case manager
      else if (searchCriteria === 'caseManager') {
        return isCaseManagerMatch;
      }
      // Search by date range
      else if (searchCriteria === 'dateRange') {
        return isDateRangeMatch;
      }
      // Search by all
      // else if (searchCriteria === 'all') {
      //   if (isNameMatch || isCaseManagerMatch || isDateRangeMatch) {
      //     return true;
      //   }
      // }
      return [];
    });
    // console.log('filteredResults', filteredResults);
    return filteredResults;
  };

  return (
    <Search
      onSubmit={handleSearchSubmit}
      searchResults={searchResults}
      setSearchResults={setSearchResults}
    />
  );
}

export default SearchBar;
