import React, { useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Divider,
  Checkbox,
  Button,
  Row,
  Col,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Documents = () => {
  //React state hook used to build out add referral function
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

  const handleReferralChange = (e, index) => {
    console.log(e.target, index);
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

  const referralsContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto 5rem',
  };

  const referralContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 10px',
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
      <div className="referralsContainer" style={referralsContainer}>
        <h3>Referrals:</h3>
        {referrals.map((referral, index) => {
          return (
            <section style={referralContainer} layout="vertical">
              <Row gutter={50}>
                <Col span={15}>
                  <Form.Item
                    label="Name:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input
                      name="name"
                      value={referral.name}
                      placeholder="John Doe"
                    />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item
                    label="First Meeting:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <DatePicker
                      name="firstMeeting"
                      value={referral.firstMeeting}
                      style={{ width: '100%' }}
                      placeholder="MM-DD-YYYY"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={18}>
                  <Form.Item
                    label="Address (If Available):"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input
                      name="address"
                      value={referral.address}
                      placeholder=""
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Apt. #:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="apt" value={referral.apt} placeholder="" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={14}>
                  <Form.Item
                    label="City:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="city" value={referral.city} placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item
                    label="State:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="state" value={referral.state} placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item
                    label="Zip:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="zip" value={referral.zip} placeholder="" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={15}>
                  <Form.Item
                    label="Email:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="email" value={referral.email} placeholder="" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={8}>
                  <Form.Item
                    label="Cell:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="cell" value={referral.cell} placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Work:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="work" value={referral.work} placeholder="" />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Home:"
                    onChange={e => handleReferralChange(e, index)}
                  >
                    <Input name="home" value={referral.home} />
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </section>
          );
        })}
        <Form.Item style={{ textAlign: 'center' }}>
          <Button
            style={{ margin: '0 20px' }}
            icon={<PlusOutlined />}
            onClick={handleAddReferral}
          >
            Add Referral
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Documents;
