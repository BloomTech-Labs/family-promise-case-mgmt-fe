import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';

function FamilyIntake() {
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
    alert({ familyInfo });
  };
  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onSubmit={handleSubmit}
      >
        <Form.Item label="Head of Household">
          <Input
            name="head_of_household"
            value={familyInput.head_of_household}
            onChange={formChanges}
          />
        </Form.Item>
        <Form.Item label="Names of Family Members">
          <Input
            name="family_members"
            value={familyInput.family_members}
            onChange={formChanges}
          />
        </Form.Item>
        <Form.Item label="Number of Family Members">
          <InputNumber
            name="family_size"
            value={familyInput.family_size}
            onChange={formChanges}
          />
        </Form.Item>
        <Form.Item label="Education Level">
          <Select
            name="education_level"
            value={familyInput.education_level}
            onChange={formChanges}
          >
            <Select.Option value="High School Graduate" />
            <Select.Option value="Some College" />
            <Select.Option value="College Graduate" />
          </Select>
        </Form.Item>
        <Form.Item label="Prior History">
          <Input
            name="homeless_history"
            value={familyInput.homeless_history}
            onChange={formChanges}
          />
        </Form.Item>
        <Form.Item label="Employment Status">
          <Select
            name="employment"
            value={familyInput.employment}
            onChange={formChanges}
          >
            <Select.Option value="Employed" />
            <Select.Option value="Unemployed" />
          </Select>
        </Form.Item>
        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
