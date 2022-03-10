import React, { useState } from 'react';
import {
  Menu,
  Form,
  Input,
  Button,
  Select,
  InputNumber,
  DatePicker,
  Radio,
  Checkbox,
  Dropdown,
} from 'antd';
import axios from 'axios';

const ClientFamilyInfoForm = () => {
  const { TextArea } = Input;

  const dateFormat = 'MM/DD/YYYY';

  // Initial Empty Values for form
  const clientInput = {
    first_name: '',
    last_name: '',
    head_of_household: '',
    family_members: '',
    ssn: null,
    ethnicity: '',
    race: '',
    gender: '',
    self_describe: '',
    sexual_orientation: '',
    other: '',
    veteran: '',
    pregnant: '',
    family_member: '',
    homeless_history: '',
    employment: '',
  };

  const [clientInfo, setClientInfo] = useState(clientInput);

  // Change Handler used for all fields except Select.
  const formChanges = event => {
    const { name, value } = event.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };
  // antd's answer to onSubmit
  const onFinish = () => {
    // The endpoint used is a placeholder. The response will always be the submitted data.
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Mock POST',
        body: clientInfo,
      })
      .then(res => {
        alert('Sucess! Data submitted:\n' + JSON.stringify(res.data.body));
      })
      .catch(() => {
        console.error('Something Went Wrong');
      });
  };

  return (
    <div>
      <h1>Client and Family Information</h1>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        style={{ paddingTop: '2rem' }}
      >
        <Form.Item label="Initial Date" onChange={formChanges}>
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="First Name"
          value={clientInfo.first_name}
          onChange={formChanges}
        >
          <Input name="First Name" placeholder="First Name" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          value={clientInfo.last_name}
          onChange={formChanges}
        >
          <Input name="Last Name" placeholder="Last Name" />
        </Form.Item>
        <Form.Item label="SSN" value={clientInfo.ssn} onChange={formChanges}>
          <InputNumber name="SSN" />
        </Form.Item>
        <Form.Item label="DOB" onChange={formChanges}>
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item
          label="Ethnicity"
          value={clientInfo.ethnicity}
          onChange={formChanges}
        >
          <Select
            value={clientInfo.ethnicity}
            placeholder="ethnicity"
            name="ethnicity"
            onChange={value => {
              setClientInfo({ ...clientInfo, ethnicity: value });
            }}
          >
            <Select.Option value="American Indian or Alaska Native" />
            <Select.Option value="Asian" />
            <Select.Option value="Black or African American" />
            <Select.Option value="Native Hawaiian or Other Pacific Islander" />
            <Select.Option value="White or Caucasian" />
            <Select.Option value="Hispanic or Latino or Spanish Origin" />
            <Select.Option value="Non-Resident Alien (of any race or ethnicity)" />
            <Select.Option value="Multiracial or Biracial" />
          </Select>
        </Form.Item>
        <Form.Item label="Race" value={clientInfo.race} onChange={formChanges}>
          <Select
            value={clientInfo.race}
            placeholder="race"
            name="race"
            onChange={value => {
              setClientInfo({ ...clientInfo, race: value });
            }}
          >
            <Select.Option value="American Indian or Alaska Native" />
            <Select.Option value="Asian" />
            <Select.Option value="Black or African American" />
            <Select.Option value="Native Hawaiian or Other Pacific Islander" />
            <Select.Option value="White" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Gender"
          value={clientInfo.gender}
          onChange={formChanges}
        >
          <Select
            value={clientInfo.gender}
            placeholder="gender"
            name="gender"
            onChange={value => {
              setClientInfo({ ...clientInfo, gender: value });
            }}
          >
            <Select.Option value="Male" />
            <Select.Option value="Female" />
            <Select.Option value="Transgender Male" />
            <Select.Option value="Transgender Female" />
            <Select.Option value="Non-Binary" />
            <Select.Option value="Prefer to Self-Describe" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Self-Describe"
          value={clientInfo.self_describe}
          onChange={formChanges}
        >
          <Input name="self-describe" placeholder="Self-Describe" />
        </Form.Item>
        <Form.Item
          label="Sexual Orientation"
          value={clientInfo.sexual_orientation}
          onChange={formChanges}
        >
          <Select
            value={clientInfo.sexual_orientation}
            placeholder="Sexual Orientation"
            name="sexual Orientation"
            onChange={value => {
              setClientInfo({ ...clientInfo, sexual_orientation: value });
            }}
          >
            <Select.Option value="Asexual" />
            <Select.Option value="Bisexual" />
            <Select.Option value="Gay" />
            <Select.Option value="Lesbian" />
            <Select.Option value="Heterosexual/Straight" />
            <Select.Option value="Pansexual" />
            <Select.Option value="Pansexual" />
            <Select.Option value="Queer" />
            <Select.Option value="Preferred Not to Answer" />
            <Select.Option value="Other" />
          </Select>
        </Form.Item>
        <Form.Item
          label="If, Other"
          value={clientInfo.other}
          onChange={formChanges}
        >
          <Input name="other" placeholder="Other" />
        </Form.Item>

        <Form.Item label="Last Known Address" style={{ marginBottom: 0 }}>
          <Form.Item
            name="address"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input placeholder="Address Line" />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input placeholder="City, State, Zip" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Veteran?"
          value={clientInfo.veteran}
          onChange={formChanges}
        >
          <Radio.Group onChange={formChanges}>
            <Radio value={1}>Yes</Radio>
            <Radio value={2}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="Client or Family Member Pregnant"
          value={clientInfo.pregnant}
          onChange={formChanges}
        >
          <Select
            value={clientInfo.pregnant}
            name="pregnant"
            onChange={value => {
              setClientInfo({ ...clientInfo, pregnant: value });
            }}
          >
            <Select.Option value="Yes" />
            <Select.Option value="No" />
          </Select>
        </Form.Item>

        <Form.Item label="If Yes, Due Date" onChange={formChanges}>
          <DatePicker format={dateFormat} />
        </Form.Item>

        <Form.Item
          label="Which Family Member?"
          value={clientInfo.family_members}
          onChange={formChanges}
        >
          <TextArea
            rows={4}
            name="family_members"
            placeholder="Spouse, Domestic Partner, Child, Etc..."
          />
          <Button type="primary">+ Add Member</Button>
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
};

export default ClientFamilyInfoForm;
