import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import './finance.css';
// import '.../styles/css/styles.css';

const Finances = () => {
  const [form] = Form.useForm();

  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">FINANCES</h2>
      <Form
        form={form}
        className="Finances__Form"
        // initialValues={initialFormValues}
        layout="inline"
      >
        <div className="Finances_Form_Sections">
          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item>
                <Form.Item>
                  <label className="Finances_Form_Label">
                    Family have history of:
                  </label>
                  <Checkbox value="eviction">
                    <label>Eviction</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="landlordDebt">
                    <label>Landlord Debt</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="criminalHistory">
                    <label>Criminal History</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="poorCredit">
                    <label>No Credit History</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="noRentalHistory">
                    <label>No Rental History</label>
                  </Checkbox>
                </Form.Item>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item>
                <label className="Finances_Form_Label">
                  Sources of income:
                </label>
                <Form.Item>
                  <Checkbox value="eviction">
                    <label>TANF</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="SSI">
                    <label>SSI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="SSI">
                    <label>SSI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="SSDI">
                    <label>SSDI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item>
                  <Checkbox value="childSupport">
                    <label>SSDI</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item label={<label>Amount</label>}>
                  <Input placeholder="$0" name="Amount" />
                </Form.Item>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item>
                <span className="Finance_Form_Debt_Label">
                  <Form.Item>
                    <label className="Finances_Form_Label">
                      Types Of Debt:
                    </label>
                  </Form.Item>
                </span>
                <Form.Item>
                  <Checkbox value="studentLoan">
                    <label>Student Loan</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item label={<label>Amount</label>}>
                  <Input placeholder="$0" name="Amount" />
                </Form.Item>
                <Form.Item>
                  <Checkbox value="medicalBills">
                    <label>Medical Bills</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item label={<label>Amount</label>}>
                  <Input placeholder="$0" name="Amount" />
                </Form.Item>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="Finances_Form_Container_Styles">
              <Form.Item className="Finances_Form_Container_Styles_Subsection">
                <Form.Item>
                  <Checkbox value="creditCard">
                    <label>Credit Card</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item label={<label>Amount</label>}>
                  <Input placeholder="$0" name="Amount" />
                </Form.Item>

                <Form.Item>
                  <Checkbox value="autoLoan">
                    <label>Auto Loan</label>
                  </Checkbox>
                </Form.Item>
                <Form.Item label={<label>Amount</label>}>
                  <Input placeholder="$0" name="Amount" />
                </Form.Item>
              </Form.Item>
            </div>
          </section>
        </div>
      </Form>
    </div>
  );
};

export default Finances;
