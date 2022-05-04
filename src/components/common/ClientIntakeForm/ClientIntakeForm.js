import { Form, Button, DatePicker } from 'antd';
import React from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';
import Finances from './IntakeForms/Finances';

//NOTE: Inline Styles added temporarily.
const sectionContainer = {
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  margin: 'auto',
};

const buttonSection = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
};

const btn = {
  margin: '10px',
};

const prime = {
  backgroundColor: '#007FD3',
  margin: '10px',
  border: 'none',
};

const ClientIntakeForm = () => {
  const [form] = Form.useForm();

  //onFinish is AntDs version on onSubmit;
  const onFinish = values => {
    console.log('Form Values: ', values);
    form.resetFields();
  };
  return (
    <Form
      name="clientIntakeForm"
      form={form}
      onFinish={onFinish}
      onSubmit={e => e.preventDefault()}
      layout="vertical"
      style={sectionContainer}
    >
      <h1 style={{ textAlign: 'center' }}>Intake Form</h1>
      <Form.Item
        label="Inital Intake Date"
        style={{ marginBottom: '50px' }}
        name="intakeDate"
        initialValue=""
      >
        <DatePicker format="MM/DD/YYYY" />
      </Form.Item>
      <ClientFamilyInfo />
      <Finances />

      <div style={buttonSection}>
        <Form.Item>
          <Button style={prime} htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <Button style={btn} type="default">
            Cancel
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ClientIntakeForm;
