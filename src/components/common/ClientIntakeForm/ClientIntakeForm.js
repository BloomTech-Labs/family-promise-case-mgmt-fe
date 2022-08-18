import { Form, DatePicker } from 'antd';
import React from 'react';
import ClientFamilyInfo from './IntakeForms/ClientFamilyInfo';
import Finances from './IntakeForms/Finances';
import ContactPreferences from './IntakeForms/ContactPreferences';
import Referrals from './IntakeForms/Referrals';
import DocumentUpload from './IntakeForms/DocumentUpload';
import EducationIntake from './IntakeForms/EducationIntake';
import EmploymentIntake from './IntakeForms/EmploymentIntake';

//NOTE: Inline Styles added temporarily.
const sectionContainer = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  margin: 'auto',
};

const ClientIntakeForm = () => {
  const [form] = Form.useForm();

  //onFinish is AntDs version on onSubmit;
  const onFinish = values => {
    console.log('Form Values: ', values);
    form.resetFields();
  };

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
      </Form>
    </div>
  );
};

export default ClientIntakeForm;
