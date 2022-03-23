import { DatePicker, Form, Input, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';

const ClientFamilyIntake = () => {
  const [form] = Form.useForm();

  const inputStyles = {
    width: '20rem',
  };

  const inputStylesShort = {
    width: '7rem',
  };
  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Inital Intake Date">
        <DatePicker format="MM/DD/YYYY" />
      </Form.Item>

      <h2>Head of Household</h2>
      <div className="hohContainer">
        <Form.Item label="First Name">
          <Input placeholder="First Name" style={inputStyles} />
        </Form.Item>

        <Form.Item label="Last Name">
          <Input placeholder="Last Name" style={inputStyles} />
        </Form.Item>

        <Form.Item label="SSN">
          <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
        </Form.Item>

        <Form.Item label="DOB">
          <DatePicker format="MM/DD/YYYY" />
        </Form.Item>

        <Form.Item label="Ethnicity">
          <Select style={inputStyles} placeholder="-- Select --">
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

        <Form.Item label="Race">
          <Select style={inputStyles} placeholder="-- Select --">
            <Select.Option value="American Indian or Alaska Native" />
            <Select.Option value="Asian" />
            <Select.Option value="Black or African American" />
            <Select.Option value="Native Hawaiian or Other Pacific Islander" />
            <Select.Option value="White" />
          </Select>
        </Form.Item>

        <Form.Item label="Gender">
          <Select style={inputStyles} placeholder="-- Select --">
            <Select.Option value="Male" />
            <Select.Option value="Female" />
            <Select.Option value="Transgender Male" />
            <Select.Option value="Transgender Female" />
            <Select.Option value="Non-Binary" />
            <Select.Option value="Prefer to Self-Describe" />
          </Select>
        </Form.Item>

        <Form.Item label="Self-Describe">
          <TextArea placeholder="Self-Describe" style={inputStyles} />
        </Form.Item>

        <Form.Item label="Sexual Orientation">
          <Select style={inputStyles} placeholder="-- Select --">
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

        <Form.Item label="If Other">
          <TextArea placeholder="Other" style={inputStyles} />
        </Form.Item>
      </div>
      <h2>Last Known Address</h2>
      <div className="addressContainer">
        <Form.Item label="Address 1">
          <Input placeholder="123 Somewhere Rd." style={inputStyles} />
        </Form.Item>

        <Form.Item label="Address 2">
          <Input placeholder="Apt. #" style={inputStyles} />
        </Form.Item>

        <Form.Item label="City">
          <Input placeholder="City Name" style={inputStyles} />
        </Form.Item>

        <Form.Item label="State">
          <Input placeholder="State Abbrv." style={inputStylesShort} />
        </Form.Item>

        <Form.Item label="Zip">
          <Input placeholder="Zip Code" style={inputStylesShort} />
        </Form.Item>
      </div>
    </Form>
  );
};

export default ClientFamilyIntake;
