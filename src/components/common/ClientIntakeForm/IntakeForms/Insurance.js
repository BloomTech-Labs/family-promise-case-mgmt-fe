import React from 'react';
import { DatePicker, Form, Input, Divider, Radio } from 'antd';

const Insurance = () => {
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

  const { TextArea } = Input;

  const spreadOut = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

  const marginRight = {
    marginRight: '30px',
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Insurance</h2>

      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Medicare" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Medicare #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Medicaid" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Medicaid #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
          <Form.Item label="Expiration Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Private Insurance" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Insurance Company" style={marginRight}>
            <Input placeholder="Company Name" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Group #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Subscriber #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Expiration Date:" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Employer Occupation:" style={marginRight}>
            <Input
              placeholder="Employer Occupation Description Here"
              style={borderStyled}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <Form.Item label="Other Coverage (Explain)" style={marginRight}>
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </div>
      <Divider />
      <div style={formStyles}>
        <Form.Item
          label="Client or Family working with other agencies?"
          style={marginRight}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="If Yes, what other agencies?" style={marginRight}>
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </div>
    </div>
  );
};

export default Insurance;
