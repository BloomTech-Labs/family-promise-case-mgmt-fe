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

const AdultFamilyMember = () => {
  //Inline Styles added temporarily
  const inputStyles = {
    width: '20rem',
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
        Adult
      </Divider>
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name" name="adultFirstname" initialValue="">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item
            label="Relation to HoH"
            name="adultRealtionHoh"
            initialValue=""
          >
            <Input placeholder="Relation" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN" name="adultSSN" initialValue="">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Race" name="adultrace" initialValue="">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item
            label="Sexual Orientation"
            name="adultSexualOrientation"
            initialValue=""
          >
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="Asexual" />
              <Select.Option value="Bisexual" />
              <Select.Option value="Gay" />
              <Select.Option value="Lesbian" />
              <Select.Option value="Heterosexual/Straight" />
              <Select.Option value="Pansexual" />
              <Select.Option value="Queer" />
              <Select.Option value="Preferred Not to Answer" />
              <Select.Option value="Other" />
            </Select>
          </Form.Item>

          <Form.Item label="Other" name="adultOther" initialValue="">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Veteran?" name="isAdultVeteran" initialValue="">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Does Family Member have Documented Disabilities?"
            name="isAdultDisabled"
            initialValue=""
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="If yes what disablities?"
            name="adultDisabilities"
            initialValue=""
          >
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name" name="adultLastName" initialValue="">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB" name="adultDOB" initialValue="">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Ethnicity" name="adultEthnicity" initialValue="">
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

          <Form.Item label="Gender" name="adultGender" initialValue="">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="Male" />
              <Select.Option value="Female" />
              <Select.Option value="Transgender Male" />
              <Select.Option value="Transgender Female" />
              <Select.Option value="Non-Binary" />
              <Select.Option value="Prefer to Self-Describe" />
            </Select>
          </Form.Item>
          <Form.Item
            label="Self-Describe:"
            name="adultSelfDescribe"
            initialValue=""
          >
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?" name="isAdultPregnant" initialValue="">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="If yes, when is the due date?"
            name="adultDueDate"
            initialValue=""
          >
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item
            label="Does Family Member have a history of:"
            name="adultHistory"
            initialValue=""
          >
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default AdultFamilyMember;
