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

  return (
    <Form
      form={form}
      className="ClientDocuments__Form"
      initialValues={initialDocuments}
      layout="vertical"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 100 }}
      labelWrap
    >
      <div className="ClientDocuments__checkboxGroupContainer">
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">
            <b>Adults in family have:</b>
          </h3>
          <Form.Item name="completed_hfca" valuePropName="checked">
            <Checkbox>
              Completed the HFCA (Homeless Families Coordinated Assesment){' '}
              <b>within the past 90 days</b>
            </Checkbox>
          </Form.Item>
          <Form.Item name="valid_driver" valuePropName="checked">
            <Checkbox>
              Valid Driver's License or State Identification Card
            </Checkbox>
          </Form.Item>
          <Form.Item name="valid_social" valuePropName="checked">
            <Checkbox>
              A valid social security card for everyone in the household
            </Checkbox>
          </Form.Item>
          <Form.Item name="dshs_wic_tanf_snap" valuePropName="checked">
            <Checkbox>
              Signed up for benifits through DSHS (WIC, TANF, SNAP)
            </Checkbox>
          </Form.Item>
          <Form.Item name="responsible_renters_course" valuePropName="checked">
            <Checkbox>Completed the Responsible Renters Course</Checkbox>
          </Form.Item>
          <Form.Item name="birth_cert_for_children" valuePropName="checked">
            <Checkbox>
              Birth Certificates for children in the household
            </Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">(If Applicable):</h3>
          <Form.Item name="child_enrolled_school" valuePropName="checked">
            <Checkbox>Children Enrolled in School</Checkbox>
          </Form.Item>
          <Form.Item name="childcare" valuePropName="checked">
            <Checkbox>Childcare</Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">
            <b>Would you like to receive information about:</b>
          </h3>
          <Form.Item name="food_assistance" valuePropName="checked">
            <Checkbox>Food/meal assistance</Checkbox>
          </Form.Item>
          <Form.Item name="clothing_assistance" valuePropName="checked">
            <Checkbox>Clothing assistance</Checkbox>
          </Form.Item>
          <Form.Item name="counseling_services" valuePropName="checked">
            <Checkbox>Counseling services</Checkbox>
          </Form.Item>
          <Form.Item name="addiction_resources" valuePropName="checked">
            <Checkbox>Addiction/recovery resources</Checkbox>
          </Form.Item>
          <Form.Item name="mentor_programs" valuePropName="checked">
            <Checkbox>Mentor programs</Checkbox>
          </Form.Item>
          <Form.Item name="youth_services" valuePropName="checked">
            <Checkbox>Youth services/programming</Checkbox>
          </Form.Item>
          <Form.Item name="budgeting" valuePropName="checked">
            <Checkbox>Budgeting</Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">
            <b>Would you like to receive text updates about:</b>
          </h3>
          <Form.Item
            name="can_text_employment_opportunities"
            valuePropName="checked"
          >
            <Checkbox>Employment opportunities</Checkbox>
          </Form.Item>
          <Form.Item name="can_text_apartment_listings" valuePropName="checked">
            <Checkbox>Apartment listings</Checkbox>
          </Form.Item>
          <Form.Item name="can_text_career_fairs" valuePropName="checked">
            <Checkbox>Career fairs and job trainings/programs</Checkbox>
          </Form.Item>
        </section>
      </div>

      <Divider style={{ marginBottom: '50px' }} />

      <div className="ClientDocuments__referralsContainer">
        <h3 className="ClientDocuments_sectionHeader">
          <b>Referrals:</b>
        </h3>
        {referrals.map((referral, index) => {
          return (
            <section
              className="ClientDocuments__referralContainer"
              layout="vertical"
            >
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Name:
                  </label>
                }
              >
                <Input
                  name="name"
                  value={referral.name}
                  placeholder="John Doe"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Name"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    First Meeting:
                  </label>
                }
              >
                <DatePicker
                  name="firstMeeting"
                  value={referral.firstMeeting}
                  format="MM-DD-YYYY"
                  placeholder="MM-DD-YYYY"
                  onChange={(e, string) =>
                    handleReferralChange(e, index, string)
                  }
                  className="ClientDocuments__DatePicker"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Address (If Available):
                  </label>
                }
              >
                <Input
                  name="address"
                  value={referral.address}
                  placeholder="123 Anywhere Street"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Address"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Apt #:
                  </label>
                }
              >
                <Input
                  name="apt"
                  value={referral.apt}
                  placeholder="Apt #"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Apt"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    City:
                  </label>
                }
              >
                <Input
                  name="city"
                  value={referral.city}
                  placeholder="City Name"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__City"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    State:
                  </label>
                }
              >
                <Input
                  name="state"
                  value={referral.state}
                  placeholder="State Abbrv."
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__State"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Zip:
                  </label>
                }
              >
                <Input
                  name="zip"
                  value={referral.zip}
                  placeholder="Zip Code"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Zip"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Email:
                  </label>
                }
              >
                <Input
                  name="email"
                  value={referral.email}
                  placeholder="user@email.com"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Email"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Cell:
                  </label>
                }
              >
                <Input
                  name="cell"
                  value={referral.cell}
                  placeholder="555-555-5555"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Cell"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Work:
                  </label>
                }
              >
                <Input
                  name="work"
                  value={referral.work}
                  placeholder="555-555-5555"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Work"
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientDocuments__Input__ItemLabel">
                    Home:
                  </label>
                }
              >
                <Input
                  name="home"
                  value={referral.home}
                  placeholder="555-555-5555"
                  onChange={e => handleReferralChange(e, index)}
                  className="ClientDocuments__Input__Home"
                />
              </Form.Item>
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
