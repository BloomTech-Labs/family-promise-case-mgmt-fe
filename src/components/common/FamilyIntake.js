import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';

function FamilyIntake() {
  const { TextArea } = Input;

  const familyInput = {
    head_of_household: '',
    family_members: '',
    family_size: null,
    education_level: '',
    homeless_history: '',
    employment: '',
  };

  const [familyInfo, setFamilyInfo] = useState(familyInput);

  const formChanges = event => {
    setFamilyInfo({ ...familyInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(familyInfo);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item
          label="Head of Household"
          name="head_of_household"
          value={familyInput.head_of_household}
          onChange={formChanges}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Names of Family Members"
          name="family_members"
          value={familyInput.family_members}
          onChange={formChanges}
        >
          <TextArea rows={4} placeholder="Names of Family Members" />
        </Form.Item>
        <Form.Item
          label="Number of Family Members"
          name="family_size"
          value={familyInput.family_size}
          onChange={formChanges}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Education Level"
          name="education_level"
          value={familyInput.education_level}
          onChange={formChanges}
        >
          <Select>
            <Select.Option value="High School Graduate" />
            <Select.Option value="Some College" />
            <Select.Option value="College Graduate" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Prior History"
          name="homeless_history"
          value={familyInput.homeless_history}
          onChange={formChanges}
        >
          <TextArea rows={4} placeholder="Prior History" />
        </Form.Item>
        <Form.Item
          label="Employment Status"
          name="employment"
          value={familyInput.employment}
          onChange={formChanges}
        >
          <Select>
            <Select.Option value="Employed" />
            <Select.Option value="Unemployed" />
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FamilyIntake;
