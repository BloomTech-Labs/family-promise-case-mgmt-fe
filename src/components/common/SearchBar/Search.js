import React, { useState } from 'react';
import { Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchResults from './SearchResults';
import InputSearch from './InputSearch';

function Search(props) {
  // Set up state to keep track of search term , search criteria and modal visibility
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const [isModalVisible, setIsModalVisible] = useState(false);

  // handle search form submission
  const handleSearch = e => {
    props.onSubmit(searchTerm, searchCriteria);
  };

  const handleModalOk = () => {
    // expected for ant modal API but not used here
  };

  // handle modal cancel and clear search term,  search criteria and search results from state
  const handleModalCancel = () => {
    closeSearch();
  };

  const closeSearch = () => {
    setSearchTerm('');
    setSearchCriteria('name');
    setIsModalVisible(false);
    props.setSearchResults([]);
  };

  return (
    <div className="SearchBoxContainer">
      <Input
        type="text"
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
        // centered
        footer={null}
        width={700}
        style={{ top: 1 }}
      >
        <InputSearch
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          searchCriteria={searchCriteria}
          setSearchCriteria={setSearchCriteria}
          handleSearch={handleSearch}
        />

        <SearchResults
          searchResults={props.searchResults}
          searchTerm={searchTerm}
        />
      </Modal>
    </div>
  );
}

export default Search;
