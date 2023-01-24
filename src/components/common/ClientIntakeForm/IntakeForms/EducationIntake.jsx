import React, { useState } from 'react';
import { Input, Radio, Space, Form } from 'antd';

const EducationIntake = () => {
  const [value, setValue] = useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">Education</h2>

      <div className="education">
        <section className="sectionLeft">
          <Form.Item
            label={
              <p style={{ fontWeight: 'bold' }}>
                Highest Grade / Degree Completed
              </p>
            }
          >
            <div className="radioButtons">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>Grade School</Radio>
                  <Radio value={2}>High School / GED</Radio>
                  <Radio value={3}>Associates Degree</Radio>
                  <Radio value={4}>Undergrad Degree</Radio>
                  <Radio value={5}>Grad / Post Grad Degree</Radio>
                </Space>
              </Radio.Group>
            </div>
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default EducationIntake;
