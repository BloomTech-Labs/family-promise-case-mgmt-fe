import React from 'react';
import { Form, Checkbox, Input } from 'antd';
import { useState } from 'react';

const initialFormValues = {
  eviction: false,
  landlordDebt: false,
  criminalHistory: false,
  poorCredit: false,
  opName: false,
  SSI: false,
  SSDI: false,
  studentLoan: false,
  medicalBills: false,
  creditCard: false,
  autoLoan: false,
};

const familyHistory = [
  {
    name: 'eviction',
    label: 'Eviction',
  },
  {
    name: 'landlordDebt',
    label: 'Landlord Debt',
  },
  {
    name: 'criminalHistory',
    label: 'Criminal History',
  },
  {
    name: 'poorCredit',
    label: 'No Credit History',
  },
  {
    name: 'noRentalHistory',
    label: 'No Rental History',
  },
];

const incomeSource = [
  {
    name: 'TANF',
    label: 'TANF',
  },
  {
    name: 'SSI',
    label: 'SSI',
  },
  {
    name: 'SSDI',
    label: 'SSDI',
  },
  {
    name: 'childSupport',
    label: 'Child Support',
  },
];

const typesOfDebt = [
  {
    name: 'studentLoan',
    label: 'Student Loan',
  },
  {
    name: 'creditCard',
    label: 'Credit Card',
  },
  {
    name: 'medicalBills',
    label: 'Medical Bills',
  },
  {
    name: 'autoLoan',
    label: 'Auto Loan',
  },
];

const Finances = () => {
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = e => {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: !e.target.value });
  };

  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">FINANCES</h2>
      <Form.Item form={form} className="Finances__Form" layout="inline">
        <div
          className="Finances_Form_Sections"
          style={{
            display: 'flex',
            width: 'full',
            justifyContent: 'space-between',
          }}
        >
          <section style={{ width: '45%' }}>
            <div className="Finances_Form_Label">Family have history of: </div>
            <div
              className="Finances_Form_Container_Styles"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {familyHistory.map(info => (
                <div key={info.name} className="Finances_Form_Container_Styles">
                  <Form.Item>
                    <Checkbox
                      name={info.name}
                      checked={formValues[info.name]}
                      value={formValues[info.name]}
                      onChange={onChange}
                    >
                      <label>{info.label}</label>
                    </Checkbox>
                  </Form.Item>
                </div>
              ))}
              ;
            </div>
          </section>

          <section style={{ width: '45%' }}>
            <div className="Finances_Form_Label">Source of Income:</div>
            <div
              className="Finances_Form_Container_Styles"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {incomeSource.map(info => {
                return (
                  <div
                    key={info.name}
                    className="Finances_Form_Container_Styles"
                  >
                    <Form.Item>
                      <Checkbox
                        name={info.name}
                        checked={formValues[info.name]}
                        value={formValues[info.name]}
                        onChange={onChange}
                      >
                        <label>{info.label}</label>
                      </Checkbox>
                    </Form.Item>
                  </div>
                );
              })}
              <Input
                placeholder="$0"
                name="Amount"
                className="Finances_Form_Amount_Input"
                style={{ width: '30%' }}
              />
              ;
            </div>
          </section>

          {/*  TYPES OF DEBT */}
          <section style={{ width: '45%' }}>
            <div className="Finances_Form_Label">Types of Debt:</div>
            <div
              className="Finances_Form_Container_Styles"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {typesOfDebt.map(info => {
                return (
                  <div
                    key={info.name}
                    className="Finances_Form_Container_Styles"
                  >
                    <Form.Item>
                      <Checkbox
                        name={info.name}
                        checked={formValues[info.name]}
                        value={formValues[info.name]}
                        onChange={onChange}
                      >
                        <label>{info.label}</label>
                      </Checkbox>
                      <Input
                        placeholder="$0"
                        name="Amount"
                        className="Finances_Form_Amount_Input"
                        style={{ width: '55%', padding: 1 }}
                      />
                    </Form.Item>
                  </div>
                );
              })}
              ;
            </div>
          </section>
        </div>
      </Form.Item>
    </div>
  );
};

export default Finances;
