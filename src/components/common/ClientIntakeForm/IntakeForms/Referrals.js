import React from 'react';
import { DatePicker, Form, Input, Button, Divider } from 'antd';

const Referrals = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
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

  const prime = {
    backgroundColor: '#007FD3',
    marginLeft: '40px',
    border: 'none',
    width: '110px',
    textAlign: 'center',
  };

  const referralsAdded = {
    marginTop: '10px',
    marginLeft: '40px',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Referrals</h2>

      <div>
        <section style={grid}>
          <Form.Item label="Name:">
            <Input placeholder="John Doe" style={borderStyled} />
          </Form.Item>
          <Form.Item label="First Meeting">
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
          <Form.Item label="Address(If Available):">
            <Input placeholder="123 Anywhere Street" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Apt. #:">
            <Input placeholder="Apt #" style={borderStyled} />
          </Form.Item>
          <Form.Item label="City:">
            <Input placeholder="City Name" style={borderStyled} />
          </Form.Item>
          <Form.Item label="State:">
            <Input placeholder="State Abbrv." style={borderStyled} />
          </Form.Item>
          <Form.Item label="Zip:">
            <Input placeholder="Zip Code" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Email:">
            <Input placeholder="user@email.com" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Cell:">
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Work:">
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Home:">
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
        </section>

        <Button style={prime} type="primary">
          + Referral
        </Button>
        <h3 style={referralsAdded}>
          Referrals: (referrals added will show up here...)
        </h3>
      </div>
      <Divider />
    </div>
  );
};

export default Referrals;
