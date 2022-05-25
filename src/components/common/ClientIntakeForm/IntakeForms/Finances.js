import React from 'react';
import { Form, Input, Checkbox, Select, Button, Divider } from 'antd';
import './finance.css';
// import './styles/css/styles.css';

const Finances = () => {
  // const subsectionHeader = {
  //   textAlign: 'center',
  //   marginBottom: '50px',
  //   backgroundColor: '#706f6f',
  //   padding: '20px',
  // };

  // const financeHistoryOptions = [
  //   { label: 'Eviction', value: 'eviction' },
  //   { label: 'Landlord Debt', value: 'landlordDebt' },
  //   { label: 'Criminal History', value: 'criminalHistory' },
  //   { label: 'Poor Credit', value: 'poorCredit' },
  //   { label: 'No Rental History', value: 'noRentalHistory' },
  // ];

  // const incomeOptions = [
  //   { label: 'TANF', value: 'TANF' },
  //   { label: 'SSI', value: 'SSI' },
  //   { label: 'SSDI', value: 'SSDI' },
  //   { label: 'Child Support', value: 'childSupport' },
  // ];

  // const borderStyled = {
  //   width: '5rem',
  //   border: '1px solid black',
  // };

  // const grid = {
  //   display: 'grid',
  //   gridTemplateColumns: '1fr 1fr 1fr 1fr',
  //   margin: '0px 40px',
  // };

  // const containerStyles = {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'start',
  //   marginLeft: '40px',
  // };

  //   return (
  //     <>
  //       <h2>Finances</h2>

  //       <section style={containerStyles}>
  //         <Form.Item label="Family have history of:">
  //           <Checkbox.Group options={financeHistoryOptions} />
  //         </Form.Item>
  //       </section>
  //       <section style={containerStyles}>
  //         <Form.Item label="Types of Debt:" style={{ fontWeight: 'bold' }}>
  //           <div style={containerStyles}>
  //             <Checkbox value="studentLoan">Student Loan</Checkbox>
  //             <Form.Item label="Amount">
  //               <Input placeholder="$0" style={borderStyled} />
  //             </Form.Item>
  //             <Checkbox value="creditCard">Credit Card</Checkbox>
  //             <Form.Item label="Amount">
  //               <Input placeholder="$0" style={borderStyled} />
  //             </Form.Item>
  //             <Checkbox value="medicalBills">Medical Bills</Checkbox>
  //             <Form.Item label="Amount">
  //               <Input placeholder="$0" style={borderStyled} />
  //             </Form.Item>
  //             <Checkbox value="autoLoan">Auto Loan</Checkbox>
  //             <Form.Item label="Amount">
  //               <Input placeholder="$0" style={borderStyled} />
  //             </Form.Item>
  //           </div>
  //         </Form.Item>
  //       </section>
  //       <section style={containerStyles}>
  //         <Form.Item label="Source of Income:">
  //           <Checkbox.Group options={incomeSourceOptions} style={grid} />
  //         </Form.Item>
  //       </section>
  //     </>
  //   );
  // };
  return (
    <>
      <h2 className="financeHeader">Finances</h2>

      <section className="financeContainer">
        <Form.Item
          // label="Family have history of:"
        >
          <label>Family have history of:</label>
          <Checkbox value="eviction" className="ant-checkbox">
            <label>Eviction</label>
          </Checkbox>
          <Checkbox value="landlordDebt">
            <label>Landlord Debt</label>
          </Checkbox>
          <Checkbox value="criminalHistory">
            <label>Criminal History</label>
          </Checkbox>
          <Checkbox value="poorCredit">
            <label>No Credit History</label>
          </Checkbox>
          <Checkbox value="noRentalHistory">
            <label>No Rental History</label>
          </Checkbox>
        </Form.Item>
      </section>

      <section className="financeContainer">
        <Form.Item label="Source of Income:">
          <Checkbox value="TANF">
            <label>TANF</label>
          </Checkbox>
          <Checkbox value="SSI" className="checkValue">
            <label>SSI</label>
          </Checkbox>
          <Checkbox value="SSDI">
            <label>SSDI</label>
          </Checkbox>
          <Checkbox value="childSupport">
            <label>SSDI</label>
          </Checkbox>
          <Form.Item label="Amount" >
            <Input placeholder="$0" className="border" />
          </Form.Item>
        </Form.Item>
      </section>
      <section className="financeContainer">
        <Form.Item label="Types of Debt:" >
          <div className="financeContainer">
            <Checkbox value="studentLoan" className="check-value">
              <label>Student Loan</label>
            </Checkbox>
            <Form.Item label="Amount" className="amount">
              <Input placeholder="$0" className="border" />
            </Form.Item>
            <Checkbox value="creditCard"><label>Credit Card</label></Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="border" />
            </Form.Item>
            <Checkbox value="medicalBills"><label>Medical Bills</label></Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="border" />
            </Form.Item>
            <Checkbox value="autoLoan"><label>Auto Loan</label></Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="border" />
            </Form.Item>
          </div>
        </Form.Item>
      </section>
    </>
  );
};

export default Finances;
