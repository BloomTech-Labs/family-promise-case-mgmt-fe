import React, { useState } from 'react';
import { Form, Radio, Space } from 'antd';

const EducationIntake = () => {
  const [value, setValue] = useState(1);

  return (
    <div className="subsectionContainer educationInformation">
      <h2 className="subsectionHeader">Education</h2>

      <section className="educationContainer">
        <Form.Item
          label="Highest Grade/Degree Completed"
          name="SchoolGrade"
          initialValue={value}
          style={{ fontWeight: 'bold' }}
        >
          <Radio.Group
            value={value}
            onChange={e => setValue(e.target.value)}
            style={{ fontWeight: 'normal' }}
          >
            <Space direction="vertical">
              <Radio value={1}>Grade School</Radio>
              <Radio value={2}>High School/GED</Radio>
              <Radio value={3}>Associates Degree</Radio>
              <Radio value={4}>Undergrad Degree</Radio>
              <Radio value={5}>Grad/Post Grad Degree</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </section>
    </div>
  );
};

export default EducationIntake;
