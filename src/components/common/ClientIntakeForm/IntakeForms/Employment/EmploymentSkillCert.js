import React from 'react';
import { Form, Input, Radio, Space } from 'antd';
import { useState } from 'react';

const EmploymentSkillCert = () => {
  const [skillsCertificationsvalue, skillsCertificationssetValue] = useState(
    ''
  );

  return (
    <>
      <Form>
        <div className="ant-form-title">
          <h4>Skills / Certifications</h4>
        </div>
        <Form.Item name="skillsCertifications">
          <Radio.Group value={skillsCertificationsvalue}>
            <Space direction="horizontal">
              <Radio value="Yes">Yes </Radio>
              <Radio value="No">No</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <div className="ant-form-title">
          <h4>If yes, what are they?</h4>
        </div>
        <Form.Item>
          <Input placeholder="List Skills Here" />
        </Form.Item>
      </Form>
    </>
  );
};
export default EmploymentSkillCert;
