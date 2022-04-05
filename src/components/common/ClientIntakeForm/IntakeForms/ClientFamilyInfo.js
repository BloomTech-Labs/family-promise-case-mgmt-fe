import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Divider,
  Checkbox,
  Button,
  Space,
} from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import AdultFamilyMember from './FamilyMembers/AdultFamilyMember';

const ClientFamilyInfo = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
  };
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

  const shortInputContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px',
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
      <Form.Item
        label="Inital Intake Date"
        style={{ margin: '20px 110px' }}
        name="intakeDate"
      >
        <DatePicker format="MM/DD/YYYY" />
      </Form.Item>

      <h2 style={subsectionHeader}>Client/Family Information</h2>

      <Divider>Head of Household</Divider>
      <div className="hohContainer" style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name" name="hohFirstName" initialValue="">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN" name="hohSSN" initialValue="">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Ethnicity" name="hohEthnicity" initialValue="">
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

          <Form.Item
            label="Sexual Orientation"
            name="hohSexualOrientaion"
            initialValue=""
          >
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

          <Form.Item label="If Other" name="hohOther" initialValue="">
            <TextArea placeholder="Other" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Veteran?" name="hohVeteran" initialValue="">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Does Client have Documented Disabilities?"
            name="hohHasDisabilities"
            initialValue=""
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="If yes what disablities?"
            name="hohDisabilities"
            initialValue=""
          >
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name" name="hohLastName" initialValue="">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB" name="hohDOB" initialValue="">
            <DatePicker format="MM/DD/YYYY" />
          </Form.Item>

          <Form.Item label="Race" name="hohRace" initialValue="">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item label="Gender" name="hohGender" initialValue="">
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
            label="Self-Describe"
            name="hohSelfDescribe"
            initialValue=""
          >
            <TextArea placeholder="Self-Describe" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?" name="hohPregnant" initialValue="">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="If yes, when is due date?"
            name="hohDueDate"
            initialValue=""
          >
            <DatePicker format={'MM-DD-YYYY'} />
          </Form.Item>

          <Form.Item
            label="Does Client have a history of:"
            name="hohHistory"
            initialValue=""
          >
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>

      <Divider>Last Known Address</Divider>
      <div style={formStyles}>
        <container style={sectionLeft}>
          <Form.Item label="Address 1" name="address1" initialValue="">
            <Input placeholder="123 Somewhere Rd." style={inputStyles} />
          </Form.Item>
          <Form.Item label="City" name="city" initialValue="">
            <Input placeholder="City Name" style={inputStyles} />
          </Form.Item>
        </container>

        <container style={sectionRight}>
          <Form.Item label="Address 2" name="address2" initialValue="">
            <Input placeholder="Apt. #" style={inputStyles} />
          </Form.Item>

          <section style={shortInputContainer}>
            <Form.Item label="State" name="state" initialValue="">
              <Input placeholder="State Abbrv." style={inputStylesShort} />
            </Form.Item>

            <Form.Item label="Zip" name="zip" initialValue="">
              <Input placeholder="Zip Code" style={inputStylesShort} />
            </Form.Item>
          </section>
        </container>
      </div>

      <Divider style={{ marginBottom: '50px' }}>Family Members</Divider>
      <Form.List name="familyMembers">
        {(fields, { add, remove }) => (
          <div>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={formStyles}>
                <Form.Item {...restField} name={[name, 'adult']}>
                  <AdultFamilyMember />
                </Form.Item>
                <DeleteOutlined
                  style={{ position: 'relative', bottom: '365px' }}
                  onClick={() => remove(name)}
                />
              </Space>
            ))}
            <Form.Item>
              <Button
                className="btn-long "
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Family Member
              </Button>
            </Form.Item>
          </div>
        )}
      </Form.List>
    </div>
  );
};

export default ClientFamilyInfo;
