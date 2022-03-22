import React, { useState } from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  DatePicker,
  Checkbox,
  InputNumber,
  PageHeader,
} from 'antd';

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

const ClientFamilyInfoForm = () => {
  const [form] = Form.useForm();

  const style = {
    // display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px',
    gridAutoFlow: 'row dense',
    paddingTop: '2rem',
    width: '55%',
    padding: '3rem',
    margin: '0 20rem',
    // background: '#3f3f3f',
    // color: '#ffffff',
  };

  const grid = {
    gridRow: '2',
    gridColumn: '2',
  };

  const socWork = {
    //   gridRow: '2',
    gridColumn: '2',
    display: 'flex',
  };

  const sec1 = {
    gridRow: '1 / span 2',
  };

  const formSecs = {
    width: '40%',
    margin: 'auto',
  };

  const inputs = {
    width: '20rem',
  };

  const dateFormat = 'MM/DD/YYYY';

  const flex = {
    display: 'flex',
    margin: '0 22rem',
  };

  const formStyle = {
    background: '#3f3f3f',
    color: '#ffffff',
    width: 'auto',

    // padding: '2rem',
    // margin: '0 20rem ',
  };

  return (
    <div className="ClientFamilyForm">
      <Form
        form={form}
        style={style}
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        labelWrap
      >
        <Form.Item style={{ margin: '0 0 2rem 35rem' }} label="Initial Intake:">
          <DatePicker placeholder="MM-DD-YYYY" format={dateFormat} />
        </Form.Item>
        <h1>Head of Household</h1>
        <div style={{ display: 'grid' }}>
          <section style={sec1}>
            <Form.Item label="First Name:">
              <Input placeholder="First Name" style={inputs} />
            </Form.Item>
            <Form.Item label="SSN:">
              <InputNumber
                placeholder="XXX - XXX - XXXX"
                style={inputs}
                name="SSN"
              />
            </Form.Item>
            <Form.Item label="Ethinicity:">
              <Select style={inputs} placeholder="-- Select --">
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
            <Form.Item label="Gender:">
              <Select style={inputs} placeholder="-- Select --">
                <Select.Option value="Male" />
                <Select.Option value="Female" />
                <Select.Option value="Transgender Male" />
                <Select.Option value="Transgender Female" />
                <Select.Option value="Non-Binary" />
                <Select.Option value="Prefer to Self-Describe" />
              </Select>
            </Form.Item>
            <Form.Item label="If Gender Self Describe:">
              <Input placeholder="Self Describe" style={inputs} />
            </Form.Item>
          </section>
          <section style={sec1}>
            <Form.Item label="Last Name:">
              <Input placeholder="Last Name" style={inputs} />
            </Form.Item>
            <Form.Item label="DOB:">
              <DatePicker placeholder="MM-DD-YYYY" format={dateFormat} />
            </Form.Item>
            <Form.Item label="Race:">
              <Select style={inputs} placeholder="-- Select --">
                <Select.Option value="American Indian or Alaska Native" />
                <Select.Option value="Asian" />
                <Select.Option value="Black or African American" />
                <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                <Select.Option value="White" />
              </Select>
            </Form.Item>
            <Form.Item label="Sexual Orientation:">
              <Select style={inputs} placeholder="-- Select --">
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
            <Form.Item label="If Sexual Orientation Other:">
              <Input placeholder="Other" style={inputs} />
            </Form.Item>
          </section>
        </div>
        <section>
          <Form.Item label="Address:">
            <Input placeholder="Address" style={inputs} />
          </Form.Item>
          <Form.Item label="City:">
            <Input placeholder="City Name" style={inputs} />
          </Form.Item>
        </section>
      </Form>
    </div>
  );
};

export default ClientFamilyInfoForm;
