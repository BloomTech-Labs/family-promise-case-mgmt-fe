import { Form, DatePicker, Button, Space } from 'antd';
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
        <DatePicker format="MM/DsD/YYYY" />
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
            {/* need to add functionality to both the cancel and submit button */}
            <Button
              type="primary"
              shape="omitted"
              size="large"
              onClick={onFinish}
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
