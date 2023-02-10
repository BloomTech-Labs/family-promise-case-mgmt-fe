import React from 'react';
import { Form, Input, Checkbox } from 'antd';

export const Finances = () => {
  return (
    <>
      <div className="Container">
        <Form>
          <header className="financeHeader">
            <h2>FINANCES</h2>
          </header>

          <section className="finance-group1">
            <label>Family Have History of:</label>
            <label>
              <Checkbox />
              Eviction
            </label>
            <label>
              <Checkbox />
              Landlord Debt
            </label>
            <label>
              <Checkbox />
              Criminal History
            </label>
            <label>
              <Checkbox />
              Poor Credit
            </label>
            <label>
              <Checkbox />
              No Rental History
            </label>

            <label>Source of income:</label>
            <label>
              <Checkbox />
              TANF
            </label>
            <label>
              <Checkbox />
              SSI
            </label>
            <label>
              <Checkbox />
              SSDI
            </label>
            <label>
              <Checkbox />
              Child Support
            </label>
            <label>
              Amount:
              <Input />
            </label>
          </section>

          <section className="finance-group2">
            <label>Types of Debt:</label>
            <label>
              <Checkbox />
              Student Loan
            </label>
            <label>
              Amount:
              <Input />
            </label>
            <label>
              <Checkbox />
              Credit Card
            </label>
            <label>
              Amount:
              <Input />
            </label>
            <label>
              <Checkbox />
              Medical Bills
            </label>
            <label>
              Amount:
              <Input />
            </label>
            <label>
              <Checkbox />
              Auto Loan
            </label>
            <label>
              Amount:
              <Input />
            </label>
          </section>
        </Form>
      </div>
    </>
  );
};
