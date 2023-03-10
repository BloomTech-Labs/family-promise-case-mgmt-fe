import React from 'react';
import { Form, Radio, Space } from 'antd';
import { useState } from 'react';

const EmploymentRadioEmployed = () => {
  const [currentlyEmployedvalue, currentlyEmployedsetValue] = useState('');

  return (
    <Form>
      <div className="ant-form-title">
        <h4>Currently Employed ?</h4>
      </div>
      <Form.Item name="currentlyEmployed">
        <Radio.Group value={currentlyEmployedvalue}>
          <Space direction="vertical">
            <Radio value="fulltime">Yes (Full Time)</Radio>
            <Radio value="parttime">Yes (Part Time)</Radio>
            <Radio value="seasonal/temp">Seasonal/Temporary Employment</Radio>
            <Radio value={'noMentalPhysical'}>
              No, due to physical / mental condition
            </Radio>
            <Radio value={'no'}>No</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
};
export default EmploymentRadioEmployed;
