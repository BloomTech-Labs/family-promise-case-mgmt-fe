import React from 'react';
import { Input, DatePicker, Form, Select } from 'antd';
import moment from 'moment';

function InputSearch(props) {
  const {
    setSearchTerm,
    searchTerm,
    searchCriteria,
    setSearchCriteria,
    handleSearch,
  } = props;
  const inputTypes = { SEARCH: 'search', DATE: 'date' };
  const inputType =
    searchCriteria === 'dateRange' ? inputTypes.DATE : inputTypes.SEARCH;
  const { RangePicker } = DatePicker;
  const dateFormat = 'MM/DD/YYYY';
  const { Search } = Input;
  const { Option } = Select;
  const optionValues = {
    DEFAULT: 'Choose Criteria',
    NAME: 'name',
    CASE_MANAGER: 'caseManager',
    DATE_RANGE: 'dateRange',
  };

  const handleOnSearch = (e, o) => {
    const evt = o === undefined ? e : o;
    evt.preventDefault();
    handleSearch(evt);
  };

  //handle search term change
  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value);
  };

  // handle search criteria change
  const handleSelectChange = e => {
    setSearchCriteria(e);
  };

  // handle date range change
  const handleRangePickerChange = value => {
    const dateRange = value.map(date => date.format(dateFormat));
    const formattedDateRange = dateRange.join(' - ');
    setSearchTerm(formattedDateRange);
  };

  const selectBefore = (
    <Select
      className={`searchCriteria`}
      id="searchCriteria"
      value={searchCriteria}
      onSelect={handleSelectChange}
    >
      <Option value={optionValues.NAME}>Name</Option>
      <Option value={optionValues.CASE_MANAGER}>Case Manager</Option>
      <Option value={optionValues.DATE_RANGE}>Date Range</Option>
    </Select>
  );

  return (
    <>
      <Search
        addonBefore={selectBefore}
        id="searchTerm"
        onChange={handleSearchTermChange}
        value={searchTerm}
        allowEmpty={false}
        allowClear={true}
        enterButton={true}
        onSearch={handleOnSearch}
        onPressEnter={handleOnSearch}
      />

      {inputType === inputTypes.DATE && (
        <Form.Item label="" name="Date" initialValue="">
          <RangePicker
            defaultValue={[moment(), moment()]}
            format={dateFormat}
            placement="bottomLeft"
            allowEmpty={false}
            onChange={handleRangePickerChange}
          />
        </Form.Item>
      )}
    </>
  );
}

export default InputSearch;
