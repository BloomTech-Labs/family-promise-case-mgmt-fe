import React from 'react';
import { Form, Input, Select, Radio, Space, Typography, Checkbox } from 'antd';
import { useState } from 'react';

const EmploymentSkillCert = () => {
  const { Text, Title } = Typography;
  const [SkillCertForm] = Form.useForm();
  const [skillsCertificationsvalue, skillsCertificationssetValue] = useState(
    ''
  );
  // const onChange = e => {
  //   console.log('radio checked', e.target.value);
  //   setValue(e.target.value);
  // };
  // const onChange = checkedValues => {
  //   console.log('checked = ', checkedValues);
  // };

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
          <Input
            placeholder="List Skills Here"
            // onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
      </Form>
    </>
  );
};
export default EmploymentSkillCert;
