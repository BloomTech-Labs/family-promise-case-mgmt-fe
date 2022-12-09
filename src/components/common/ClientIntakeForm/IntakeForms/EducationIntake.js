import React from 'react';
import { Form, Select } from 'antd';

const EducationIntake = () => {
  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">Education</h2>

      <div className="hohContainer formStyles">
        <section className="sectionLeft">
          <Form.Item
            label="Highest Grade/Degree Completed"
            name="SchoolGrade"
            initialValue=""
          >
            <Select className="inputStyles" placeholder="-- Select --">
              <Select.Option value="Grade School" />
              <Select.Option value="High School/GED" />
              <Select.Option value="Associates Degree" />
              <Select.Option value="Undergrad Degree" />
              <Select.Option value="Grad/Post Grad Degreee" />
            </Select>
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default EducationIntake;
