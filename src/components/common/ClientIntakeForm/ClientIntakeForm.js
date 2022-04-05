import { Form, Button, Divider } from 'antd';
import React from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';
//NOTE: Inline Styles added temporarily.
const buttonSection = {
  display: 'flex',
  justifyContent: 'center',
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
    >
      <h1 style={{ textAlign: 'center' }}>Intake Form</h1>
      <ClientFamilyInfo />
      <Divider />
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
