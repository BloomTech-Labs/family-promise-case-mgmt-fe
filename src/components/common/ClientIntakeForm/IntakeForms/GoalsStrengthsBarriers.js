import React from 'react';
import { DatePicker, Form, Input, Divider, Button } from 'antd';

const GoalsStrengthsBarriers = () => {
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

  const sectionHeading = {
    margin: '20px 0',
  };

  const { TextArea } = Input;

  const buttonStyle = {
    width: '100px',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Goals, Strengths, and Barriers</h2>

      <div>
        <section style={formSectionStyles}>
          <Form.Item label="Area:">
            <Input placeholder="Housing" />
          </Form.Item>
          <Form.Item label="Target Date">
            <DatePicker format="MM/DD/YYYY" />
          </Form.Item>
          <Form.Item label="Steps:">
            <TextArea placeholder="Enter steps here" />
          </Form.Item>
          <Form.Item label="CM Task">
            <Input placeholder="Task Here" />
          </Form.Item>
          <Form.Item label="Date Achieved:">
            <DatePicker format="MM/DD/YYYY" />
          </Form.Item>
          <Form.Item label="Notes">
            <TextArea placeholder="Notes" />
          </Form.Item>
        </section>
        <Button style={buttonStyle}>+ Goal (THIS NEEDS TO BE FIXED)</Button>
        <section style={sectionHeading}>
          <h3>Goals:</h3>
        </section>
        <Divider />
        <section style={formSectionStyles}>
          <Form.Item label="Client Strengths:">
            <TextArea placeholder="Text Here" />
          </Form.Item>
          <Form.Item label="Client Barriers:">
            <TextArea placeholder="Text Here" />
          </Form.Item>
          <Form.Item label="Progress Summary:">
            <TextArea placeholder="Text Here" />
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default GoalsStrengthsBarriers;
