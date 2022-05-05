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
import Moment from 'moment';
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

  const initialDocuments = {
    client_id: false,
    completed_hfca: false,
    valid_driver: false,
    valid_social: false,
    dshs_wic_tanf_snap: false,
    responsible_renters_course: false,
    birth_cert_for_children: false,
    child_enrolled_school: false,
    childcare: false,
    food_assistance: false,
    clothing_assistance: false,
    counseling_services: false,
    addiction_resources: false,
    mentor_programs: false,
    youth_services: false,
    budgeting: false,
    can_text_employment_opportunities: false,
    can_text_apartment_listings: false,
    can_text_career_fairs: false,
    can_add_referrals: false,
    referrals_name: false,
    referrals_address: false,
    referrals_cell: false,
    referrals_home: false,
    referrals_work: false,
    referrals_email: false,
  };

  const [referrals, setReferrals] = useState([initialReferral]);
  const [documents, setDocuments] = useState(initialDocuments);

  const handleAddReferral = () => {
    setReferrals([...referrals, initialReferral]);
  };

  const handleReferralChange = (e, index, string) => {
    if (e.target) {
      const { name, value } = e.target;
      const previousReferrals = [...referrals];
      previousReferrals[index][name] = value;
      setReferrals(previousReferrals);
    } else {
      const previousReferrals = [...referrals];
      previousReferrals[index].firstMeeting = Moment(string, 'MM-DD-YYYY');
      setReferrals(previousReferrals);
    }
  };

  const handleDeleteReferral = index => {
    const previousReferrals = [...referrals];
    previousReferrals.splice(index, 1);
    setReferrals(previousReferrals);
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
      value: 'completed_hfca',
    },
    {
      label: "Valid Driver's License or State Identification Card",
      value: 'valid_driver',
    },
    {
      label: 'A valid social security card for everyone in the household',
      value: 'valid_social',
    },
    {
      label: 'Signed up for benifits through DSHS (WIC, TANF, SNAP)',
      value: 'dshs_wic_tanf_snap',
    },
    {
      label: 'Completed the Responsible Renters Course',
      value: 'responsible_renters_course',
    },
    {
      label: 'Birth Certificates for children in the household',
      value: 'birth_cert_for_children',
    },
  ];

  const ifApplicable = [
    { label: 'Children Enrolled in School', value: 'child_enrolled_school' },
    { label: 'Childcare', value: 'childcare' },
  ];

  const additionalInformation = [
    { label: 'Food/meal assistance', value: 'food_assistance' },
    { label: 'Clothing assistance', value: 'clothing_assistance' },
    { label: 'Counseling services', value: 'counseling_services' },
    { label: 'Addiction/recovery resources', value: 'addiction_resources' },
    { label: 'Mentor programs', value: 'mentor_programs' },
    { label: 'Youth services/programming', value: 'youth_services' },
    { label: 'Budgeting', value: 'budgeting' },
  ];

  const textUpdates = [
    { label: 'Employment opportunities', value: 'child_enrolled_school' },
    { label: 'Apartment listings', value: 'childcare' },
    {
      label: 'Career fairs and job trainings/programs',
      value: 'child_enrolled_school',
    },
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
                  <Form.Item label="Name:">
                    <Input
                      name="name"
                      value={referral.name}
                      placeholder="John Doe"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={9}>
                  <Form.Item label="First Meeting:">
                    <DatePicker
                      name="firstMeeting"
                      value={referral.firstMeeting}
                      style={{ width: '100%' }}
                      format="MM-DD-YYYY"
                      placeholder="MM-DD-YYYY"
                      onChange={(e, string) =>
                        handleReferralChange(e, index, string)
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={18}>
                  <Form.Item label="Address (If Available):">
                    <Input
                      name="address"
                      value={referral.address}
                      placeholder="123 Anywhere Street"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Apt. #:">
                    <Input
                      name="apt"
                      value={referral.apt}
                      placeholder="Apt #"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={14}>
                  <Form.Item label="City:">
                    <Input
                      name="city"
                      value={referral.city}
                      placeholder="City Name"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item label="State:">
                    <Input
                      name="state"
                      value={referral.state}
                      placeholder="State Abbrv."
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="Zip:">
                    <Input
                      name="zip"
                      value={referral.zip}
                      placeholder="Zip Code"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={15}>
                  <Form.Item label="Email:">
                    <Input
                      name="email"
                      value={referral.email}
                      placeholder="user@email.com"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={50}>
                <Col span={8}>
                  <Form.Item label="Cell:">
                    <Input
                      name="cell"
                      value={referral.cell}
                      placeholder="555-555-5555"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Work:">
                    <Input
                      name="work"
                      value={referral.work}
                      placeholder="555-555-5555"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="Home:">
                    <Input
                      name="home"
                      value={referral.home}
                      placeholder="555-555-5555"
                      onChange={e => handleReferralChange(e, index)}
                    />
                  </Form.Item>
                </Col>
              </Row>
              {index !== 0 ? (
                <Form.Item style={{ textAlign: 'center' }}>
                  <Button
                    style={{ margin: '0 20px' }}
                    icon={<PlusOutlined />}
                    onClick={() => handleDeleteReferral(index)}
                  >
                    Delete Referral
                  </Button>
                </Form.Item>
              ) : null}
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
