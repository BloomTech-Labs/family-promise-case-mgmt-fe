import React from 'react';
import { Form, Input, Select } from 'antd';
const EmploymentIntake = () => {
  const { TextArea } = Input;
  return (
    <div className="subsectionContainer employmentInformation">
      <h2 className="subsectionHeader">Employment</h2>
      <div className="employmentIntakeContainer formStyles">
        <Form.Item
          label="Most Recent Employment"
          name="CompanyName"
          initialValue=""
        >
          <Input placeholder="Name of Company" className="inputStyles" />
        </Form.Item>
        <Form.Item
          label="Currently Employed"
          name="CurrentlyEmployed"
          initialValue=""
        >
          <Select
            className="inputStyles employmentInformation__Inputs"
            placeholder="-- Select --"
          >
            <Select.Option value="Yes (Full-Time)" />
            <Select.Option value="Yes (Part-Time)" />
            <Select.Option value="Seasonal/Temporary Employment" />
            <Select.Option value="No Due to a Documented Mental/Physical Condition" />
            <Select.Option value="No" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Skills/Certifications"
          name="SkillsCertifications"
          initialValue=""
        >
          <Select
            className="inputStyles employmentInformation__Inputs"
            placeholder="-- Select --"
          >
            <Select.Option value="Yes (Full-Time)" />
            <Select.Option value="Yes (Part-Time)" />
            <Select.Option value="Seasonal/Temporary Employment" />
            <Select.Option value="No Due to a Documented Mental/Physical Condition" />
            <Select.Option value="No" />
          </Select>
        </Form.Item>
        <Form.Item
          label="Skills/Certifications"
          name="SkillsCertifications"
          initialValue=""
        >
          <Select
            className="inputStyles employmentInformation__Inputs"
            placeholder="-- Select --"
          >
            <Select.Option value="Yes" />
            <Select.Option value="No" />
          </Select>
        </Form.Item>
        <Form.Item
          label="If yes, what are the skills and/or certifications:"
          name="Skills"
          initialValue=""
        >
          <TextArea
            placeholder="Name of Company"
            className="inputStyles employmentInformation__Inputs employmentInformation__Inputs--long-text"
          />
        </Form.Item>
        <Form.Item
          label="Interested in working in: "
          name="WantedWork"
          initialValue=""
        >
          <Select
            className="inputStyles employmentInformation__Inputs"
            placeholder="-- Select --"
          >
            <Select.Option value="Retail/Sales" />
            <Select.Option value="Fast Food" />
            <Select.Option value="Hospitality" />
            <Select.Option value="Wharehouse" />
            <Select.Option value="Truck Driving" />
          </Select>
        </Form.Item>
      </div>
    </div>
  );
};

export default EmploymentIntake;
