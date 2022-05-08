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
    referrals: [
      {
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
      },
    ],
  };

  const [referrals, setReferrals] = useState([initialReferral]);
  const [documents, setDocuments] = useState(initialDocuments);

  const [form] = Form.useForm();

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
    <Form
      form={form}
      className="ClientFamilyInformation__Form"
      initialValues={initialDocuments}
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 100 }}
      labelWrap
    >
      <div className="Documents_formContainer">
        <section className="Documents_checkboxGroupContainer">
          <Form.Item
            label="Adults in family have:"
            className="Documents_checkboxGroup"
          >
            <Checkbox.Group options={adultsInFamily} />
          </Form.Item>
          <Form.Item
            label="(If Applicable):"
            className="Documents_checkboxGroup"
          >
            <Checkbox.Group options={ifApplicable} />
          </Form.Item>
          <Form.Item
            label="Would you like to receive information about:"
            className="Documents_checkboxGroup"
          >
            <Checkbox.Group options={additionalInformation} />
          </Form.Item>
          <Form.Item
            label="Would you like to receive text updates about:"
            className="Documents_checkboxGroup"
          >
            <Checkbox.Group options={textUpdates} />
          </Form.Item>
        </section>
      </div>

      <Divider style={{ marginBottom: '50px' }} />

      <div className="Documents_referralsContainer">
        <h3>Referrals:</h3>
        {referrals.map((referral, index) => {
          return (
            <section className="Documents_referralContainer" layout="vertical">
              <Row gutter={50}>
                <Col span={15}>
                  <Form.Item label="Name:" layout="vertical">
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
    </Form>
  );
};

export default Documents;
