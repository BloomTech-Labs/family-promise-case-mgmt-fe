import React, { useState } from 'react';
import { DatePicker, Form, Input, Divider, Checkbox, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Documents = () => {
  //React state hook used to build out
  const initialReferral = {
    name: '',
    firstMeeting: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    cell: '',
    work: '',
    home: '',
  };
  const [referrals, setReferrals] = useState([initialReferral]);

  const handleAddReferral = () => {
    setReferrals([...referrals, initialReferral]);
  };

  //Inline styles added temporarily from client family info

  const subsectionContainer = {
    border: 'solid 1px #6e6e6e',
  };
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: 'whiteSmoke',
    color: '#101010',
    padding: '20px',
  };

  const formStyles = {
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
  };

  const checkboxContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 10px',
  };

  const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    color: 'black',
  };

  const adultsInFamily = [
    {
      label:
        'Completed the HFCA (Homeless Families Coordinated Assesment)  within the past 90 days',
      value: 'completedHFCA',
    },
    {
      label: 'Valid Driver’s License or State Identification Card',
      value: 'validID',
    },
    {
      label: 'A valid social security card for everyone in the household',
      value: 'validSocialSecurityCards',
    },
    {
      label: 'Signed up for benifits through DSHS (WIC, TANF, SNAP)',
      value: 'benefitsDSHS',
    },
    {
      label: 'Completed the Responsible Renters Course',
      value: 'responsibleRentersCourse',
    },
    {
      label: 'Birth Certificates for children in the household',
      value: 'birthCertificates',
    },
  ];

  const ifApplicable = [
    { label: 'Children Enrolled in School', value: 'childrenInSchool' },
    { label: 'Childcare', value: 'childcare' },
  ];

  const additionalInformation = [
    { label: 'Food/meal assistance', value: 'mealAssistance' },
    { label: 'Clothing assistance', value: 'clothingAssistance' },
    { label: 'Counseling services', value: 'counselingServices' },
    { label: 'Addiction/recovery resources', value: 'addictionResources' },
    { label: 'Mentor programs', value: 'mentorPrograms' },
    { label: 'Youth services/programming', value: 'youthServices' },
    { label: 'Budgeting', value: 'budgeting' },
  ];

  return (
    <div style={subsectionContainer}>
      {/* 
            Note:
            The Form's states and props are encapsulated in the form component using antd's Form or Form.Item. Only a name prop needs to be provided. The data is stored in an object with each form item being a key-value pair. 

            The initial value for each input can be stored within the form component with the 'initialValue' prop. 
        
        */}

      <h2 style={subsectionHeader}>Documents</h2>

      <div className="documentsContainer" style={formStyles}>
        <section style={checkboxContainer}>
          <Form.Item
            label="Adults in family have:"
            name="adultDocuments"
            initialValue=""
          >
            <Checkbox.Group options={adultsInFamily} style={checkboxStyles} />
          </Form.Item>
          <Form.Item
            label="(If Applicable)"
            name="ifApplicable"
            initialValue=""
          >
            <Checkbox.Group options={ifApplicable} style={checkboxStyles} />
          </Form.Item>
          <Form.Item
            label="Would you like to receive information about:"
            name="additionalInfo"
            initialValue=""
          >
            <Checkbox.Group
              options={additionalInformation}
              style={checkboxStyles}
            />
          </Form.Item>
        </section>
      </div>

      <Divider style={{ marginBottom: '50px' }} />
      <Form.Item>
        <Button
          style={{ margin: '0 20px' }}
          icon={<PlusOutlined />}
          onClick={handleAddReferral}
        >
          Add Referral
        </Button>
      </Form.Item>
    </div>
  );
};

export default Documents;
