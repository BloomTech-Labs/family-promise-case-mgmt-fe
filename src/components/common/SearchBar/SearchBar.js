import React, { useState, useCallback } from 'react';
import { Input, Modal, Space } from 'antd';
import { SearchOutlined, FileSearchOutlined } from '@ant-design/icons';
// import { SearchOutlined } from '@ant-design/icons';
import SearchIcon from '../../pages/Calendar/SearchIcon';
import SearchResults from './SearchResults';
import 'antd/dist/antd.dark.css';

function Search(props) {
  // Set up state to keep track of search term and search criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // Initialize the modal visibility state

  const inputSearchRef = useCallback(inputElement => {
    console.log('input called', inputElement);
    if (inputElement) {
      inputElement.focus();
    }
  }, []);

  // Function to handle search form submission
  const handleSearch = e => {
    e.preventDefault();
    console.log('onSubmit', props.onSubmit);
    props.onSubmit(searchTerm, searchCriteria);
  };

  const handleModalOk = () => {
    console.log('handle modal ok'); // Log the new event data to the console
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    // TO DO : clear search results  Rightside__SearchBar   SearchOutlined
  };

  return (
    <div className="SearchBoxContainer">
      <Input
        prefix={<SearchOutlined className="inputSearchBar-prefix" />}
        placeholder="Search "
        className="inputSearchBar"
        onClick={e => setIsModalVisible(true)}
        readOnly={true}
      />

      {/* Modal for search view-results */}
      <Modal
        title="Search"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        keyboard={true}
        centered
        footer={null}
      >
        <form onSubmit={handleSearch}>
          <label htmlFor="searchTerm">Search Term:</label>
          <input
            ref={inputSearchRef}
            className={`ant-input`}
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <label htmlFor="searchCriteria">Search Criteria:</label>
          <select
            className={` ant-dropdown-menu`}
            id="searchCriteria"
            value={searchCriteria}
            onChange={e => setSearchCriteria(e.target.value)}
          >
            <option value="">Select Search Criteria</option>
            <option value="name">Name</option>
            <option value="caseManager">Case Manager</option>
            <option value="dateRange">Date Range</option>
          </select>

          <button
            type="submit"
            className={` ant-btn ant-btn-Default saveNoteButton `}
          >
            Search
          </button>
        </form>
        <SearchResults
          searchResults={props.searchResults}
          searchTerm={searchTerm}
        />
      </Modal>
    </div>
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
    return filteredResults;
    // return 'pio';
  };

  return <Search onSubmit={handleSearchSubmit} searchResults={searchResults} />;
}

export default SearchBar;
