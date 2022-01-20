import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';

function FamilyIntake() {
  const { TextArea } = Input;

  // Initial Empty Values for form
  const familyInput = {
    head_of_household: '',
    family_members: '',
    family_size: null,
    education_level: '',
    homeless_history: '',
    employment: '',
  };

  const [familyInfo, setFamilyInfo] = useState(familyInput);

  // Change Handler used for all fields except Select.
  const formChanges = event => {
    const { name, value } = event.target;
    setFamilyInfo({ ...familyInfo, [name]: value });
  };
  // antd's answer to onSubmit
  const onFinish = () => {
    console.log(familyInfo);
  };

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        style={{ paddingTop: '2rem' }}
      >
        <Form.Item
          label="Head of Household"
          value={familyInfo.head_of_household}
          onChange={formChanges}
        >
          <Input name="head_of_household" />
        </Form.Item>
        <Form.Item
          label="Names of Family Members"
          value={familyInfo.family_members}
          onChange={formChanges}
        >
          <TextArea rows={4} name="family_members" />
        </Form.Item>
        <Form.Item
          label="Number of Family Members"
          value={familyInfo.family_size}
          onChange={formChanges}
        >
          <InputNumber name="family_size" />
        </Form.Item>
        <Form.Item
          label="Education Level"
          value={familyInfo.education_level}
          onChange={formChanges}
        >
          <Select
            value={familyInfo.education_level}
            name="education_level"
            onChange={value => {
              setFamilyInfo({ ...familyInfo, education_level: value });
            }}
          >
            <Select.Option value="High School Graduate" />
            <Select.Option value="Some College" />
            <Select.Option value="College Graduate" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Prior History"
          value={familyInfo.homeless_history}
          onChange={formChanges}
        >
          <TextArea rows={4} name="homeless_history" />
        </Form.Item>
        <Form.Item
          label="Employment Status"
          value={familyInfo.employment}
          onChange={formChanges}
        >
          <Select
            name="employment"
            onChange={value => {
              setFamilyInfo({ ...familyInfo, employment: value });
            }}
          >
            <Select.Option value="Employed" />
            <Select.Option value="Unemployed" />
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              marginLeft: '30%',
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FamilyIntake;
