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
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import AdultFamilyMember from './FamilyMembers/AdultFamilyMember';

const ClientFamilyInfo = () => {
  //Inline styles added temporarily

  // const subsectionContainer = {
  //   border: 'solid 1px #6e6e6e',
  // };
  // const subsectionHeader = {
  //   textAlign: 'center',
  //   marginBottom: '50px',
  //   backgroundColor: 'whiteSmoke',
  //   color: '#101010',
  //   padding: '20px',
  // };
  // const inputStyles = {
  //   width: '20rem',
  // };

  // const inputStylesShort = {
  //   width: '7rem',
  // };

  // const formStyles = {
  //   display: 'flex',
  //   justifyContent: 'center',
  // };

  // const sectionLeft = {
  //   margin: '20px',
  // };

  // const sectionRight = {
  //   margin: '20px',
  // };

  // const shortInputContainer = {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   margin: '0 10px',
  // };

  // const checkboxStyles = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   flexWrap: 'wrap',
  // };
  const { TextArea } = Input;

  const historyOptions = [
    { label: 'Physical Illness', value: 'physicalIllness' },
    { label: 'Mental Illness', value: 'mentalIllenss' },
    { label: 'Personal Violence', value: 'personalViolence' },
    { label: 'Substance Dependence', value: 'substanceDependence' },
  ];
  return (
    <div className="subsectionContainer">
      {/* 
        Note:
        The Form's states and props are encapsulated in the form component using antd's Form or Form.Item. Only a name prop needs to be provided. The data is stored in an object with each form item being a key-value pair. 

        The initial value for each input can be stored within the form component with the 'initialValue' prop. 
      
      */}
      <h2 className="subsectionHeader">Client/Family Information</h2>
      <Divider>Head of Household</Divider>
      <div className="hohContainer formStyles">
        <section className="sectionLeft">
          <Form.Item
            label="First Name"
            name="hohFirstName"
            style={{ color: 'red' }}
            initialValue=""
          >
            <Input placeholder="First Name" className="inputStyles" />
          </Form.Item>

          <Form.Item label="SSN" name="hohSSN" initialValue="">
            <Input placeholder="XXX-XX-XXXX" className="inputStyles" />
          </Form.Item>

          <Form.Item label="Ethnicity" name="hohEthnicity" initialValue="">
            <Select className="inputStyles" placeholder="-- Select --">
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
            <Select className="inputStyles" placeholder="-- Select --">
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

          <Form.Item label="If Other" name="hohOther" initialValue="">
            <TextArea placeholder="Other" className="inputStyles" />
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
            <TextArea
              placeholder="Describe Disabilities"
              className="inputStyles"
            />
          </Form.Item>
        </section>

        <section className="sectionRight">
          <Form.Item label="Last Name" name="hohLastName" initialValue="">
            <Input placeholder="Last Name" className="inputStyles" />
          </Form.Item>

          <Form.Item label="DOB" name="hohDOB" initialValue="">
            <DatePicker format="MM/DD/YYYY" />
          </Form.Item>

          <Form.Item label="Race" name="hohRace" initialValue="">
            <Select className="inputStyles" placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item label="Gender" name="hohGender" initialValue="">
            <Select className="inputStyles" placeholder="-- Select --">
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
            <TextArea placeholder="Self-Describe" className="inputStyles" />
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
            <Checkbox.Group
              options={historyOptions}
              className="checkboxStyles"
            />
          </Form.Item>
        </section>
      </div>
      <Divider>Last Known Address</Divider>
      <div className="hohContainer formStyles">
        <section className="sectionLeft">
          <Form.Item label="Address 1" name="address1" initialValue="">
            <Input placeholder="123 Somewhere Rd." className="inputStyles" />
          </Form.Item>
          <Form.Item label="City" name="city" initialValue="">
            <Input placeholder="City Name" className="inputStyles" />
          </Form.Item>
        </section>

        <section className="sectionRight">
          <Form.Item label="Address 2" name="address2" initialValue="">
            <Input placeholder="Apt. #" className="inputStyles" />
          </Form.Item>

          <section className="shortInputContainer">
            <Form.Item label="State" name="state" initialValue="">
              <Input placeholder="State Abbrv." className="inputStylesShort" />
            </Form.Item>

            <Form.Item label="Zip" name="zip" initialValue="">
              <Input placeholder="Zip Code" className="inputStylesShort" />
            </Form.Item>
          </section>
        </section>
      </div>
      <Divider style={{ marginBottom: '50px' }}>Family Members</Divider>
      {/* The button below should be used to add a new family member subform to the ClinentFamilyInfo component. This  subform will be an adult or child family member, see the family members folder for each subform component. See the client intake wireframe for an example of how adding a family member should work.  */}
      <Form.Item>
        <Button style={{ margin: '0 20px' }} icon={<PlusOutlined />}>
          Add Family Member
        </Button>
      </Form.Item>
      <AdultFamilyMember />;
    </div>
  );
};

export default ClientFamilyInfo;
