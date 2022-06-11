import React from 'react';
import { Form, Input, Checkbox, Select, Button, Divider } from 'antd';
import './finance.css';

const Finances = () => {

  const [form] = Form.useForm();

  return (
    <div className="subsectionContainer">
      <Form
        form={form}
        className="Finances__Form"
        // initialValues={initialFormValues}
        layout="horizontal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        labelWrap
      >
        <h2 className="subsectionHeader">Finances</h2>

        <div className="form-container">
          <section className="financeContainerStyles">
            <div className="input-container">
              <Form.Item className="formItem">
                <div>
                  <label className="labelContainer">
                    Family have history of:
                  </label>
                </div>
                <div>
                  <Checkbox value="eviction" className="ant-checkbox">
                    <label>Eviction</label>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox value="landlordDebt" className="ant-checkbox">
                    <label>Landlord Debt</label>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox value="criminalHistory" className="ant-checkbox">
                    <label>Criminal History</label>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox value="poorCredit" className="ant-checkbox">
                    <label>No Credit History</label>
                  </Checkbox>
                </div>
                <div>
                  <Checkbox value="noRentalHistory" className="ant-checkbox">
                    <label>No Rental History</label>
                  </Checkbox>
                </div>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="input-container">
              <Form.Item label="Source of Income:" className="labelContainer">
                <Checkbox value="TANF" className="ant-checkbox">
                  <label>TANF</label>
                </Checkbox>
                <Checkbox
                  value="SSI"
                  className="checkValue"
                  className="ant-checkbox"
                >
                  <label>SSI</label>
                </Checkbox>
                <Checkbox value="SSDI" className="ant-checkbox">
                  <label>SSDI</label>
                </Checkbox>
                <Checkbox value="childSupport" className="ant-checkbox">
                  <label>SSDI</label>
                </Checkbox>
                <div className="amount-container">
                  <Form.Item label={<label>Amount</label>}>
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="input-container">
              <Form.Item className="formItem">
                <label className="labelContainer">Types Of Debt:</label>
                <Checkbox value="studentLoan" className="ant-checkbox">
                  <label>Student Loan</label>
                </Checkbox>
                <div className="amount-container">
                  <Form.Item label={<label>Amount</label>}>
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>
                <Checkbox value="medicalBills" className="ant-checkbox">
                  <label>Medical Bills</label>
                </Checkbox>
                <div className="amount-container">
                  <Form.Item label={<label>Amount</label>}>
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section>

          <section>
            <div className="input-container">
              <Form.Item className="formItem">
                <Checkbox value="creditCard" className="ant-checkbox">
                  <label>Credit Card</label>
                </Checkbox>
                <div className="amount-container">
                  <Form.Item label={<label>Amount</label>}>
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>

                <Checkbox value="autoLoan" className="ant-checkbox">
                  <label>Auto Loan</label>
                </Checkbox>
                <div className="amount-container">
                  <Form.Item
                    label={<label className="Amount_Label">Amount</label>}
                  >
                    <Input placeholder="$0" name="Amount" />
                  </Form.Item>
                </div>
              </Form.Item>
            </div>
          </section>
        </div>
      </Form>
    </div>
  );
};

export default Finances;
