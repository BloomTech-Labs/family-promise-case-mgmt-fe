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

  const marginRight = {
    marginRight: '30px',
  };

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '0px 40px',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Insurance</h2>

      <section style={grid}>
        <Form.Item label="Medicare">
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Medicare #:">
          <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Effective Date:">
          <DatePicker format="MM/DD/YYYY" style={borderStyled} />
        </Form.Item>
      </section>
      <Divider />
      <section style={grid}>
        <Form.Item label="Medicaid">
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Medicaid #:">
          <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Effective Date:">
          <DatePicker format="MM/DD/YYYY" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Expiration Date:">
          <DatePicker format="MM/DD/YYYY" style={borderStyled} />
        </Form.Item>
      </section>
      <Divider />
      <section style={grid}>
        <Form.Item label="Private Insurance">
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Insurance Company">
          <Input placeholder="Company Name" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Group #:">
          <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Subscriber #:" style={marginRight}>
          <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Effective Date:">
          <DatePicker format="MM/DD/YYYY" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Expiration Date:">
          <DatePicker format="MM/DD/YYYY" style={borderStyled} />
        </Form.Item>
        <Form.Item label="Employer Occupation:" style={marginRight}>
          <Input
            placeholder="Employer Occupation Description Here"
            style={borderStyled}
          />
        </Form.Item>
      </section>
      <Divider />
      <section style={grid}>
        <Form.Item label="Other Coverage (Explain)">
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </section>
      <Divider />
      <section style={grid}>
        <Form.Item label="Client or Family working with other agencies?">
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="If Yes, what other agencies?">
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </section>
    </div>
  );
};

export default Insurance;
