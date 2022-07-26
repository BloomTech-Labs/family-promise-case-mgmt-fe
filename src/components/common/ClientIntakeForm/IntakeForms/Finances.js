import React from 'react';
import { Form, Input, Checkbox, Select, Button, Divider } from 'antd';
import '../../../../styles/css/styles.css';

const Finances = () => {
  // const subsectionHeader = {
  //   textAlign: 'center',
  //   marginBottom: '50px',
  //   backgroundColor: '#706f6f',
  //   padding: '20px',
  // };

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
      <h2 className="subsectionHeader">Finances</h2>

      <section className="containerStyles">
        <Form.Item label="Family have history of:">
          <Checkbox.Group options={financeHistoryOptions} />
          <Select className="grid" />
          <Select.Option label="Eviction" />
          <Select.Option label="Landlord Debt" />
          <Select.Option label="Criminal History" />
          <Select.Option label="Poor Credit" />
          <Select.Option label="No Rental History" />
        </Form.Item>
      </section>
      <section className="containerStyles">
        <Form.Item label="Types of Debt:" style={{ fontWeight: 'bold' }}>
          <div className="containerStyles">
            <Checkbox value="studentLoan">Student Loan</Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="borderStyled" />
            </Form.Item>
            <Checkbox value="creditCard">Credit Card</Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="borderStyled" />
            </Form.Item>
            <Checkbox value="medicalBills">Medical Bills</Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="borderStyled" />
            </Form.Item>
            <Checkbox value="autoLoan">Auto Loan</Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" className="borderStyled" />
            </Form.Item>
          </div>
        </Form.Item>
      </section>
      <section className="containerStyles">
        <Form.Item label="Source of Income:">
          <Checkbox.Group options={incomeSourceOptions} className="grid" />
          <Select className="grid" />
          <Select.Option value="TANF" />
          <Select.Option value="SSI" />
          <Select.Option value="SSDI" />
          <Select.Option value="Child Support" />
        </Form.Item>
      </section>
    </>
  );
};

export default Finances;
