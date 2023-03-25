import React from 'react';
import { Input, DatePicker, Form } from 'antd';
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

export default InputSearch;
