import React from 'react';
import { Form, Input, Select, Radio, Space, Typography, Checkbox } from 'antd';
import { useState } from 'react';

const CheckboxGroup = Checkbox.Group;

const options = [
  'Sale/Retail',
  'Fast Food',
  'Hospitality',
  'Warehouse',
  'Truck Driving',
];

const EmploymentInterestdWork = () => {
  const [checkedList, setCheckedList] = useState([]);

  const handleChange = checkedList => {
    setCheckedList(checkedList);
  };
  return (
    <>
      <Form>
        <Form.Item label="Checkbox Group">
          <CheckboxGroup
            options={options}
            value={checkedList}
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default EmploymentInterestdWork;
