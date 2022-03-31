import { Form } from 'antd';
import React from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';
const ClientIntakeForm = () => {
  return (
    <Form.Provider>
      <h2 style={{ textAlign: 'center' }}>Intake Form</h2>
      <ClientFamilyInfo />
    </Form.Provider>
  );
};

export default ClientIntakeForm;
