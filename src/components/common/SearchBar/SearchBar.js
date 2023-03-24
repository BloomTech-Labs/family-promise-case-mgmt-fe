import React, { useState } from 'react';
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
    props.onSubmit(searchTerm, searchCriteria);
  };

  const handleModalOk = () => {
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

  // return <Search onSubmit={handleSearchSubmit} searchResults={searchResults} setSearchResults={setSearchResults} />;
  return (
    <Search
      onSubmit={handleSearchSubmit}
      searchResults={searchResults}
      setSearchResults={setSearchResults}
    />
  );
}

export default SearchBar;
