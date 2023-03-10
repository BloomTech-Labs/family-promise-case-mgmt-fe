import React from 'react';
import { Form } from 'antd';
import EmploymentRadioEmployed from './EmploymentRadioEmployed';
import EmploymentHistory from './EmploymentHistory';
import EmploymentSkillCert from './EmploymentSkillCert';
import EmploymentInterestdWork from './EmploymentInterestdWork';

const EmploymentIntake = () => {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Form Values: ', values);
    Form.resetFields();
  };

  return (
    <>
      <div>
        <div className="subsectionContainer">
          <h2 className="subsectionHeader">Employment</h2>
          <div className="hohContainer formStyles">
            <Form
              name="EmploymentIntake"
              form={form}
              onFinish={onFinish}
              onSubmit={e => e.preventDefault()}
              layout="vertical"
            >
              <EmploymentHistory />
              <EmploymentRadioEmployed />
              <EmploymentSkillCert />
            </Form>
            <Form
              name="EmploymentIntakeTwo"
              form={form}
              onFinish={onFinish}
              onSubmit={e => e.preventDefault()}
              layout="vertical"
            >
              <EmploymentInterestdWork />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmploymentIntake;
