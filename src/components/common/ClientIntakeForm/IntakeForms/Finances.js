import React from 'react';
import { Form, Checkbox } from 'antd';
import { useState } from 'react';

const initialFormValues = {
  eviction: false,
  landlordDebt: false,
  criminalHistory: false,
  poorCredit: false,
  opName: false,
  eviction: false,
  SSI: false,
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
              {incomeSource.map(info => (
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

          {/* 
          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item className="Finances_Form_Container_Styles_Subsection1">
                <label className="Finances_Form_Label">
                  Sources of income:
                </label>
                <Form.Item>
                  <Checkbox value={formValues.eviction}>
                    <label>TANF</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value={formValues.SSI}>
                    <label>SSI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value={formValues.SSI}>
                    <label>SSI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value={formValues.SSDI}>
                    <label>SSDI</label>
                  </Checkbox>
                </Form.Item>

                <div className="Finances_Form_Amount_Container">
                  <Form.Item
                    label="Amount::"
                    className="Finances_Form_Amount_Label"
                  >
                    <Input
                      placeholder="$0"
                      name="Amount"
                      className="Finances_Form_Amount_Input"
                    />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section> */}

          {/* 

          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item>
                <Form.Item>
                  <label className="Finances_Form_Label">Types Of Debt:</label>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="studentLoan">
                    <label>Student Loan</label>
                  </Checkbox>
                </Form.Item>
                <div className="Finances_Form_Amount_Container">
                  <Form.Item
                    label="Amount::"
                    className="Finances_Form_Amount_Label"
                  >
                    <Input
                      placeholder="$0"
                      name="Amount"
                      className="Finances_Form_Amount_Input"
                    />
                  </Form.Item>
                </div>
                <Form.Item>
                  <Checkbox value="medicalBills">
                    <label>Medical Bills</label>
                  </Checkbox>
                </Form.Item>
                <div className="Finances_Form_Amount_Container">
                  <Form.Item
                    label="Amount::"
                    className="Finances_Form_Amount_Label"
                  >
                    <Input
                      placeholder="$0"
                      name="Amount"
                      className="Finances_Form_Amount_Input"
                    />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item className="Finances_Form_Container_Styles_Subsection2">
                <Form.Item>
                  <Checkbox value="creditCard">
                    <label>Credit Card</label>
                  </Checkbox>
                </Form.Item>
                <div className="Finances_Form_Amount_Container">
                  <Form.Item
                    label="Amount::"
                    className="Finances_Form_Amount_Label"
                  >
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>

                <Form.Item>
                  <Checkbox value="autoLoan">
                    <label>Auto Loan</label>
                  </Checkbox>
                </Form.Item>
                <div className="Finances_Form_Amount_Container">
                  <Form.Item
                    label="Amount::"
                    className="Finances_Form_Amount_Label"
                  >
                    <Input
                      placeholder="$0"
                      name="Amount"
                      className="Finances_Form_Amount_Input"
                    />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section> */}
        </div>
      </Form.Item>
    </div>
  );
};

export default Finances;
