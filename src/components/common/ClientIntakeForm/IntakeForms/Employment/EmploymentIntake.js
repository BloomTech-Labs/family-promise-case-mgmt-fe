import React from 'react';
import { Form } from 'antd';
import { useState } from 'react';
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

/* <section className="sectionContainer">
            <Form.Item label="Currently Employed ?" name="currentlyEmployed">
              <Radio.Group value={currentlyEmployedvalue}>
                <Space direction="vertical">
                  <Radio value="fulltime">Yes (Full Time)</Radio>
                  <Radio value="parttime">Yes (Part Time)</Radio>
                  <Radio value="seasonal/temp">
                    Seasonal/Temporary Employment
                  </Radio>
                  <Radio value={'noMentalPhysical'}>
                    No, due to physical / mental condition
                  </Radio>
                  <Radio value={'no'}>No</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Skills / Certifications"
              name="skillsCertifications"
            >
              <Radio.Group value={skillsCertificationsvalue}>
                <Space direction="horizontal">
                  <Radio value="Yes">Yes </Radio>
                  <Radio value="No">No</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Enter your Name"
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
          </section>
          <section className="sectionContainer">
            <Form.Item label="Interested working in:" name="interestedWork">
              <Checkbox value="salesretail">Sale/Retail</Checkbox>
              <Checkbox value="fastfood">Fast Food</Checkbox>
              <Checkbox value="hospitality">Hospitality</Checkbox>
              <Checkbox value="warehouse">Warehouse</Checkbox>
              <Checkbox Value="truckdriving">Truck Driving</Checkbox>
            </Form.Item>
          </section> */
