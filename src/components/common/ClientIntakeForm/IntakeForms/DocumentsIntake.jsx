import React, { useState, useEffect } from 'react';
import { Checkbox, Form } from 'antd';

const DocumentsIntake = () => {
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  const haveOptions = [
    <span>
      Completed the HFCA (Homeless Familes Coordinated Assesment){' '}
      <span style={{ fontWeight: 'bold' }}>within the past 90 days</span>
    </span>,
    'Valid Driver’s License or State Identification Card',
    'A valid social security card for everyone in the household',
    'Signed up for benifits through DSHS (WIC, TANF, SNAP)',
    'Completed the Responsible Renters Course',
    'Birth Certificates for children in the household',
  ];

  return (
    <div className="sectionContainer">
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Documents</h2>
        <div className="documentUploadContainer">
          <Form.Item
            label={<p style={{ fontWeight: 'bold' }}>Adults in family have:</p>}
          >
            {haveOptions.map(option => (
              <Checkbox>{option}</Checkbox>
            ))}
            <Checkbox>Test</Checkbox>
          </Form.Item>
          <Form.Item label={<span>(If Applicable)</span>}>
            <Checkbox>Children Enrolled in School</Checkbox>
            <Checkbox>Childcare</Checkbox>
          </Form.Item>
        </div>
      </div>
    </div>
  );
};

export default DocumentsIntake;
