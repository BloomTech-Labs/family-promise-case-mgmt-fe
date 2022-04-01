import { Form, Button } from 'antd';
import React from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';

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
  return (
    <Form.Provider>
      <h2 style={{ textAlign: 'center' }}>Intake Form</h2>
      <ClientFamilyInfo />

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
    </Form.Provider>
  );
};

export default ClientIntakeForm;
