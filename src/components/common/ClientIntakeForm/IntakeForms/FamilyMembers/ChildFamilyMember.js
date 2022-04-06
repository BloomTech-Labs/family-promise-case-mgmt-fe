import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Divider,
} from 'antd';

const ChildFamilyMember = () => {
  const inputStyles = {
    width: '20rem',
  };

  const inputStylesShort = {
    width: '7rem',
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const sectionLeft = {
    margin: '20px',
  };

  const sectionRight = {
    margin: '20px',
  };

  const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };
  const { TextArea } = Input;

  const historyOptions = [
    { label: 'Physical Illness', value: 'physicalIllness' },
    { label: 'Mental Illness', value: 'mentalIllenss' },
    { label: 'Personal Violence', value: 'personalViolence' },
    { label: 'Substance Dependence', value: 'substanceDependence' },
  ];
  return (
    <div>
      <Divider orientation="left" orientationMargin={'20px'}>
        Child
      </Divider>
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Relation to HoH">
            <Input placeholder="Relation" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
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
          <Form.Item label="Other">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Last School Attended">
            <Input placeholder="School Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Last Grade Completed">
            <Input placeholder="Grade #" style={inputStylesShort} />
          </Form.Item>

          <Form.Item label="Does Family Member have Documented Disabilities?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes what disablities?">
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB">
            <DatePicker format="MM-DD-YYYY" />
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
          <Form.Item label="Self-Describe:">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="If yes, when is due date?">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Does Family Member have a history of:">
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default ChildFamilyMember;
