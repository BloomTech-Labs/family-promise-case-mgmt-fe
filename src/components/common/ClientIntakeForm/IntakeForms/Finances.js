import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const Finances = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
  };

  const inputStyles = {
    width: '20rem',
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const sectionLeft = {
    margin: '20px',
  };

  const sectionRight = {
    margin: '20px',
  };

  const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  const financeHistoryOptions = [
    { label: 'Eviction', value: 'eviction' },
    { label: 'Landlord Debt', value: 'landlordDebt' },
    { label: 'Criminal History', value: 'criminalHistory' },
    { label: 'Poor Credit', value: 'poorCredit' },
    { label: 'No Rental History', value: 'noRentalHistory' },
  ];

  const incomeSourceOptions = [
    { label: 'TANF', value: 'TANF' },
    { label: 'SSI', value: 'SSI' },
    { label: 'SSDI', value: 'SSDI' },
    { label: 'Child Support', value: 'childSupport' },
  ];

  return (
    <div>
      <h2 style={subsectionHeader}>Finances</h2>

      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="Family have history of:">
            <Checkbox.Group
              options={financeHistoryOptions}
              style={checkboxStyles}
            />
          </Form.Item>

          <Form.Item label="Types of Debt:">
            <Checkbox
              value="studentLoan"
              style={{
                lineHeight: '32px',
              }}
            >
              Student Loan
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="creditCard"
              style={{
                lineHeight: '32px',
              }}
            >
              Credit Card
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="medicalBills"
              style={{
                lineHeight: '32px',
              }}
            >
              Medical Bills
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="autoLoan"
              style={{
                lineHeight: '32px',
              }}
            >
              Auto Loan
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
          </Form.Item>
        </section>
        <section style={sectionRight}>
          <Form.Item label="Source of Income:">
            <Checkbox.Group
              options={incomeSourceOptions}
              style={checkboxStyles}
            />
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default Finances;
