import { Form, DatePicker, Button, Space } from 'antd';
import React, { useState } from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';
import Finances from './IntakeForms/Finances';
import ContactPreferences from './IntakeForms/ContactPreferences';
import Referrals from './IntakeForms/Referrals';
import DocumentUpload from './IntakeForms/DocumentsIntake';
import EducationIntake from './IntakeForms/EducationIntake';
import EmploymentIntake from './IntakeForms/EmploymentIntake';
// import { submitForm } from '../../../api';

//NOTE: Inline Styles added temporarily.
const sectionContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  margin: 'auto',
};

const ClientIntakeForm = onChange => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log('Form Values: ', values);
    form.resetFields();
  };

  const [fields, setFields] = useState([
    {
      name: ['name'],
      value: 'Chris',
    },
  ]);

  return (
    <div>
      {/* <ClientSearch /> */}
      <Form
        name="clientIntakeForm"
        form={form}
        onFinish={onFinish}
        onSubmit={e => e.preventDefault()}
        layout="vertical"
        style={sectionContainer}
      >
        <DatePicker format="MM/DD/YYYY" />
        <ClientFamilyInfo />
        <EducationIntake />
        <EmploymentIntake />
        <Finances />

        <ContactPreferences />
        <Referrals />
        <DocumentUpload />
        <div align="middle">
          <Space size="large">
            <Button
              size="large"
              shape="omitted"
              style={{ backgroundColor: 'grey', color: 'white' }}
              background-color="red"
              onClick={onFinish}
            >
              CANCEL
            </Button>
            <Button
              type="primary"
              shape="omitted"
              size="large"
              onClick={
                (onChange = newFields => {
                  setFields(newFields);
                  // submitForm(fields);
                })
              }
            >
              SUBMIT
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
};

export default ClientIntakeForm;
