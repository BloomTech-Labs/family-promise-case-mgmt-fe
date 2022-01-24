import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import axios from 'axios'; 

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
    // The endpoint used is a placeholder. The response will always be the submitted data.
    axios.post('https://jsonplaceholder.typicode.com/posts',
    {title:'Mock POST', body:familyInfo})
    .then((res) => {
      alert('Sucess! Data submitted:\n' + JSON.stringify(res.data.body));
    })
    .catch(() => {
      console.error('Something Went Wrong'); 
    }); 
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
          <Input name="head_of_household" placeholder="Head of Household" />
        </Form.Item>
        <Form.Item
          label="Name of Family Members"
          value={familyInfo.family_members}
          onChange={formChanges}
        >
          <TextArea
            rows={4}
            name="family_members"
            placeholder="Name of Family Members"
          />
        </Form.Item>
        <Form.Item
          label="Family Size"
          value={familyInfo.family_size}
          onChange={formChanges}
        >
          <InputNumber name="family_size" />
        </Form.Item>
        <Form.Item
          label="Education Status"
          value={familyInfo.education_level}
          onChange={formChanges}
        >
          <Select
            value={familyInfo.education_level}
            placeholder="Education Status"
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
          <TextArea
            rows={4}
            name="homeless_history"
            placeholder="Prior History/Prior Episodes of Homelessness"
          />
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
