import React from 'react';
import { Form, Typography } from 'antd';
import { useState } from 'react';

const EmploymentHistory = () => {
  const { Text } = Typography;

  return (
    <>
      <Form>
        <div className="ant-form-title">
          <h4>Employement History</h4>
        </div>
        <div className="ant-form-title">
          <Text>Note: Need some clarification.</Text>
        </div>
        <br></br>
      </Form>
    </>
  );
};
export default EmploymentHistory;
