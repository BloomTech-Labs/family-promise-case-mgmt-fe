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

  const marginRight = {
    marginRight: '30px',
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  };

  const prime = {
    backgroundColor: '#007FD3',
    margin: '0px',
    border: 'none',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Referrals</h2>

      <div>
        <section style={grid}>
          <Form.Item label="Name:" style={marginRight}>
            <Input placeholder="John Doe" style={borderStyled} />
          </Form.Item>
          <Form.Item label="First Meeting" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
          <Form.Item label="Address(If Available):" style={marginRight}>
            <Input placeholder="123 Anywhere Street" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Apt. #:" style={marginRight}>
            <Input placeholder="Apt #" style={borderStyled} />
          </Form.Item>
          <Form.Item label="City:" style={marginRight}>
            <Input placeholder="City Name" style={borderStyled} />
          </Form.Item>
          <Form.Item label="State:" style={marginRight}>
            <Input placeholder="State Abbrv." style={borderStyled} />
          </Form.Item>
          <Form.Item label="Zip:" style={marginRight}>
            <Input placeholder="Zip Code" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Email:" style={marginRight}>
            <Input placeholder="user@email.com" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Cell:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Work:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Home:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
        </section>

        <Button style={prime} type="primary">
          Add Referral Button (THIS NEEDS TO BE FIXED)
        </Button>
        <h3>Referrals: (referrals added will show up here...)</h3>
      </div>
      <Divider />
    </div>
  );
};

export default Referrals;
