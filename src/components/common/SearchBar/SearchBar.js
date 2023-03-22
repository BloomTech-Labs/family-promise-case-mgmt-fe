import React, { useState } from 'react';
<<<<<<< HEAD
import { Input, Modal, DatePicker, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchResults from './SearchResults';
import 'antd/dist/antd.dark.css';
import moment from 'moment';

function InputSearch(props) {
  const { setSearchTerm, searchTerm, searchCriteria } = props;
  const inputTypes = { SEARCH: 'search', DATE: 'date' };
  const inputType =
    searchCriteria === 'dateRange' ? inputTypes.DATE : inputTypes.SEARCH;
  const { RangePicker } = DatePicker;

  const dateFormat = 'MM/DD/YYYY';

  //handle search term change
  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
    console.log('handleSearchTermChange', searchTerm);
  };

  // handle date range change
  const handleRangePickerChange = value => {
    console.log('value', value);
    const dateRange = value.map(date => date.format(dateFormat));
    console.log('dateRange', dateRange);
    const formattedDateRange = dateRange.join(' - ');
    setSearchTerm(formattedDateRange);
  };

  if (inputType === inputTypes.SEARCH) {
    return (
      <div>
        <label htmlFor="searchTerm"></label>
        <Input
          className={`ant-input`}
          type={inputType}
          id="searchTerm"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
      </div>
    );
  }

  if (inputType === inputTypes.DATE) {
    return (
      <div>
        <Form.Item label="" name="Date" initialValue="">
          <RangePicker
            defaultValue={[moment(), moment()]}
            format={dateFormat}
            placement="bottomLeft"
            allowEmpty={false}
            allowClear={false}
            onChange={handleRangePickerChange}
          />
        </Form.Item>
      </div>
    );
  }
}

function Search(props) {
  // Set up state to keep track of search term , search criteria and modal visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  // handle search criteria change
  const handleSearchCriteriaChange = e => {
    setSearchCriteria(e.target.value);
    console.log('handleSearchCriteriaChange', searchCriteria);
  };

  // handle search form submission
  const handleSearch = e => {
    e.preventDefault();
=======
import { Input, Space, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchIcon from '../../pages/Calendar/SearchIcon';
import SearchResults from './SearchResults';
import 'antd/dist/antd.dark.css';

function Search(props) {
  // Set up state to keep track of search term and search criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // Initialize the modal visibility state

  // Function to handle search form submission
  const handleSearch = e => {
    e.preventDefault();
    console.log('onSubmit', props.onSubmit);
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
    props.onSubmit(searchTerm, searchCriteria);
  };

  const handleModalOk = () => {
<<<<<<< HEAD
    setIsModalVisible(false);
  };

  // handle modal cancel and clear search term,  search criteria and search results from state
  const handleModalCancel = () => {
    setSearchTerm('');
    setSearchCriteria('');
    setIsModalVisible(false);
    props.setSearchResults([]);
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

      <Modal
        title="Search"
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        keyboard={true}
        centered
        footer={null}
        width={700}
        destroyOnClose={true}
        mask={true}
      >
        <form onSubmit={handleSearch}>
          <InputSearch
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            searchCriteria={searchCriteria}
          />
          <label htmlFor="search-criteria"></label>
          <select
            className={` ant-dropdown-menu`}
            id="search-criteria"
            value={searchCriteria}
            onChange={handleSearchCriteriaChange}
=======
    console.log('handle modal ok'); // Log the new event data to the console
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    // TO DO : clear search results
  };

  return (
    <div>
      <div className="">
        <div className="Rightside__SearchBar">
          <div>
            <Space direction="vertical">
              <Input
                prefix={<SearchIcon className="searchIcon" />}
                placeholder="Search "
                className="SearchEventBar"
                //onChange={e => setSearchTerm(e.target.value)}
                onSelect={e => setIsModalVisible(true)} // Show the modal when the search input is clicked}
                readOnly={true}
              />
            </Space>
          </div>
        </div>
      </div>

      {/* Modal for search view-results */}
      <Modal
        title="Search"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        keyboard={true} // allows user to close modal with esc key
        // okButtonProps={{ disabled: false , type:'text' }}
        // cancelButtonProps={{ disabled: true, type:'text' }}
        // cancelText=" "
        // okText="Close"
        centered
        footer={null}
        // destroyOnClose='true'
        //focusTriggerAfterClose='false'
      >
        <form onSubmit={handleSearch}>
          <label htmlFor="searchTerm">Search Term:</label>
          <input
            autoFocus
            className={` ant-input`}
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
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
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
<<<<<<< HEAD

        <SearchResults
          searchResults={props.searchResults}
          searchTerm={searchTerm}
        />
=======
        <SearchResults searchResults={props.searchResults} />
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
      </Modal>
    </div>
  );
}

<<<<<<< HEAD
=======
//formerly FamilyPromiseCMS
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
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
<<<<<<< HEAD
        key: '1',
=======
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
        name: 'John Doe',
        caseManager: 'Jane Smith',
        dateRange: '01/01/2023 - 02/01/2023',
      },
      {
<<<<<<< HEAD
        key: '2',
=======
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
        name: 'Jane Smith',
        caseManager: 'John Doe',
        dateRange: '02/01/2023 - 03/01/2023',
      },
      {
<<<<<<< HEAD
        key: '3',
=======
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
        name: 'Bob Johnson',
        caseManager: 'Jane Smith',
        dateRange: '03/01/2023 - 04/01/2023',
      },
    ];

<<<<<<< HEAD
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

  // return <Search onSubmit={handleSearchSubmit} searchResults={searchResults} setSearchResults={setSearchResults} />;
  return (
    <Search
      onSubmit={handleSearchSubmit}
      searchResults={searchResults}
      setSearchResults={setSearchResults}
    />
=======
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

  return (
    <div>
      <Search onSubmit={handleSearchSubmit} searchResults={searchResults} />
    </div>
>>>>>>> 23c08b3 (entered search icon and main search functionality added)
  );
}

export default SearchBar;
