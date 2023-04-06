import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'antd';
import '../../styles/css/finance-styles.css';

export const Finances = () => {
  const [financialForm, setFinancialForm] = useState({
    eviction: false,
    landlordDebt: false,
    criminalHistory: false,
    poorCredit: false,
    noRentalHistory: false,
    tanf: false,
    ssi: false,
    ssdi: false,
    childSupport: false,
    studentLoan: false,
    medicalBills: false,
    creditCard: false,
    autoLoan: false,

    sourceOfIncomeAmount: '',
    studentLoanAmount: '',
    medicalBillsAmount: '',
    creditCardAmount: '',
    autoLoanAmount: '',
  });

  const changeHandler = e => {
    console.log(e);
    let { checked, name, type, value } = e.target;
    if (type === 'checkbox') {
      value = checked;
    }

    setFinancialForm({
      ...financialForm,
      [name]: value,
    });
  };

  return (
    <>
      <div
      // className="Container"
      >
        <Form>
          <header className="financeHeader">
            <h2>FINANCES</h2>
          </header>

          <section className="finance-flexbox-container">
            <div className="finance-form-item-box">
              <label className="bold-text">Family Have History of:</label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="eviction"
                  checked={financialForm.eviction}
                  onChange={changeHandler}
                />
                Eviction
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="landlordDebt"
                  checked={financialForm.landlordDebt}
                  onChange={changeHandler}
                />
                Landlord Debt
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="criminalHistory"
                  checked={financialForm.criminalHistory}
                  onChange={changeHandler}
                />
                Criminal History
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="poorCredit"
                  checked={financialForm.poorCredit}
                  onChange={changeHandler}
                />
                Poor Credit
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="noRentalHistory"
                  checked={financialForm.noRentalHistory}
                  onChange={changeHandler}
                />
                No Rental History
              </label>
            </div>

            <div className="finance-form-item-box">
              <label className="bold-text">Source of income:</label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="tanf"
                  checked={financialForm.tanf}
                  onChange={changeHandler}
                />
                TANF
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="ssi"
                  checked={financialForm.ssi}
                  onChange={changeHandler}
                />
                SSI
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="ssdi"
                  checked={financialForm.ssdi}
                  onChange={changeHandler}
                />
                SSDI
              </label>
              <label>
                <Checkbox
                  className="checkbox"
                  name="childSupport"
                  checked={financialForm.childSupport}
                  onChange={changeHandler}
                />
                Child Support
              </label>
              <label className="Finances_Form_Amount_Label">
                Amount:
                <Input
                  style={{ width: '15vw' }}
                  className="Finances_Form_Inputs"
                  type="text"
                  defaultValue="$0"
                  name="sourceOfIncomeAmount"
                  value={financialForm.sourceOfIncomeAmount}
                  onChange={changeHandler}
                />
              </label>
            </div>
          </section>

          <div className="types-of-debt">
            <label className="bold-text">Types of Debt:</label>
          </div>

          <section className="finance-flexbox-container">
            <div className="finance-form-item-box">
              <label className="bold-text">
                <Checkbox
                  className="checkbox"
                  name="studentLoan"
                  checked={financialForm.studentLoan}
                  onChange={changeHandler}
                />
                Student Loan
              </label>
              <label>
                Amount:
                <Input
                  style={{ width: '15vw' }}
                  className="Finances_Form_Inputs"
                  type="text"
                  defaultValue="$0"
                  name="studentLoanAmount"
                  value={financialForm.studentLoanAmount}
                  onChange={changeHandler}
                />
              </label>
              <label className="bold-text">
                <Checkbox
                  className="checkbox"
                  name="creditCard"
                  checked={financialForm.creditCard}
                  onChange={changeHandler}
                />
                Credit Card
              </label>
              <label>
                Amount:
                <Input
                  style={{ width: '15vw' }}
                  className="Finances_Form_Inputs"
                  type="text"
                  defaultValue="$0"
                  name="creditCardAmount"
                  value={financialForm.creditCardAmount}
                  onChange={changeHandler}
                />
              </label>
            </div>

            <div className="finance-form-item-box">
              <label className="bold-text">
                <Checkbox
                  className="checkbox"
                  name="medicalBills"
                  checked={financialForm.medicalBills}
                  onChange={changeHandler}
                />
                Medical Bills
              </label>
              <label>
                Amount:
                <Input
                  style={{ width: '15vw' }}
                  className="Finances_Form_Inputs"
                  type="text"
                  defaultValue="$0"
                  name="medicalBillsAmount"
                  value={financialForm.medicalBillsAmount}
                  onChange={changeHandler}
                  placeHolder="$0"
                />
              </label>
              <label className="bold-text">
                <Checkbox
                  className="checkbox"
                  name="autoLoan"
                  checked={financialForm.autoLoan}
                  onChange={changeHandler}
                />
                Auto Loan
              </label>
              <label>
                Amount:
                <Input
                  style={{ width: '15vw' }}
                  className="Finances_Form_Inputs"
                  type="text"
                  defaultValue="$0"
                  name="autoLoanAmount"
                  value={financialForm.autoLoanAmount}
                  onChange={changeHandler}
                />
              </label>
            </div>
          </section>
        </Form>
      </div>
    </>
  );
};
