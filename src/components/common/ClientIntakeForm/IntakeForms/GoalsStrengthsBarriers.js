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
    marginLeft: '40px',
    backgroundColor: '#007FD3',
    border: 'none',
    color: '#fff',
  };

  const borderStyled = {
    width: '20rem',
    border: '1px solid black',
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '0px 40px',
  };

  const goalsAdded = {
    marginLeft: '40px',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Goals, Strengths, and Barriers</h2>

      <div>
        <section style={grid}>
          <Form.Item label="Area:">
            <Input placeholder="Housing" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Target Date">
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Steps:">
            <TextArea placeholder="Enter steps here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="CM Task">
            <Input placeholder="Task Here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Date Achieved:">
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Notes">
            <TextArea placeholder="Notes" style={borderStyled} />
          </Form.Item>
        </section>
        <Button style={buttonStyle}>+ Goal</Button>
        <section style={sectionHeading}>
          <h3 style={goalsAdded}>Goals:</h3>
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
