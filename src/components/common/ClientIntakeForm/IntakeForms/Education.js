import React from 'react';
import { Form, Radio } from 'antd';

const Education = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
  };

  const formSectionStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '400px',
    flexWrap: 'wrap',
  };

  const radioStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Education</h2>
      <section style={formSectionStyles}>
        <Form.Item label="Highest Grade / Degree Completed">
          <Radio.Group style={radioStyles}>
            <Radio value={'gradeSchool'}>Grade School</Radio>
            <Radio value={'highSchool'}>High School/GED</Radio>
            <Radio value={'associateDegree'}>Associate Degree</Radio>
            <Radio value={'undergradDegree'}>Undergrad Degree</Radio>
            <Radio value={'gradPostgraduateDegree'}>
              Grad/Postgraduate Degree
            </Radio>
          </Radio.Group>
        </Form.Item>
      </section>
    </div>
  );
};

export default Education;
