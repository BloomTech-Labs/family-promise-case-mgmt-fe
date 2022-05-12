import React, { useState } from 'react';
import { DatePicker, Form, Input, Divider, Checkbox, Button } from 'antd';
import Moment from 'moment';
import { PlusOutlined } from '@ant-design/icons';
import { documents } from '../../../state/actions';
import { connect } from 'react-redux';

const Documents = props => {
  const [disabled, setDisabled] = useState(true);
  const [form] = Form.useForm();

  const handleAddReferral = () => props.addReferral();

  const handleReferralChange = (e, index, string) => {
    if (e.target) {
      const { name, value } = e.target;
      props.setReferrals({ data: { [name]: value }, index: index });
    } else {
      const date = Moment(string, 'MM-DD-YYYY');
      props.setReferrals({ data: { first_meeting_date: date }, index: index });
    }
  };

  const handleDeleteReferral = index => {
    props.deleteReferral(index);
  };

  const handleCheckboxChange = e => {
    const { checked, id } = e.target;
    props.setDocuments({ [id]: checked });
    console.log({ [id]: checked }, props.documents);
  };

  const toggleEdit = () => {
    setDisabled(!disabled);
  };

  return (
    <Form
      form={form}
      className="ClientDocuments__Form"
      initialValues={documents}
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

          <Form.Item
            name="completed_hfca"
            valuePropName="checked"
            initialValue={props.documents.completed_hfca}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              Completed the HFCA (Homeless Families Coordinated Assesment){' '}
              <b>within the past 90 days</b>
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="valid_driver"
            valuePropName="checked"
            initialValue={props.documents.valid_driver}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              Valid Driver's License or State Identification Card
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="valid_social"
            valuePropName="checked"
            initialValue={props.documents.valid_social}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              A valid social security card for everyone in the household
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="dshs_wic_tanf_snap"
            valuePropName="checked"
            initialValue={props.documents.dshs_wic_tanf_snap}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              Signed up for benifits through DSHS (WIC, TANF, SNAP)
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="responsible_renters_course"
            valuePropName="checked"
            initialValue={props.documents.responsible_renters_course}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Completed the Responsible Renters Course
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="birth_cert_for_children"
            valuePropName="checked"
            initialValue={props.documents.birth_cert_for_children}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              Birth Certificates for children in the household
            </Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">(If Applicable):</h3>
          <Form.Item
            name="child_enrolled_school"
            valuePropName="checked"
            initialValue={props.documents.child_enrolled_school}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Children Enrolled in School
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="childcare"
            valuePropName="checked"
            initialValue={props.documents.childcare}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Childcare
            </Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">
            <b>Would you like to receive information about:</b>
          </h3>
          <Form.Item
            name="food_assistance"
            valuePropName="checked"
            initialValue={props.documents.food_assistance}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Food/meal assistance
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="clothing_assistance"
            valuePropName="checked"
            initialValue={props.documents.clothing_assistance}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Clothing assistance
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="counseling_services"
            valuePropName="checked"
            initialValue={props.documents.counseling_services}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Counseling services
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="addiction_resources"
            valuePropName="checked"
            initialValue={props.documents.addiction_resources}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Addiction/recovery resources
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="mentor_programs"
            valuePropName="checked"
            initialValue={props.documents.mentor_programs}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Mentor programs
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="youth_services"
            valuePropName="checked"
            initialValue={props.documents.youth_services}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Youth services/programming
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="budgeting"
            valuePropName="checked"
            initialValue={props.documents.budgeting}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Budgeting
            </Checkbox>
          </Form.Item>
        </section>
        <section className="ClientDocuments__checkboxGroup">
          <h3 className="ClientDocuments_sectionHeader">
            <b>Would you like to receive text updates about:</b>
          </h3>
          <Form.Item
            name="can_text_employment_opportunities"
            valuePropName="checked"
            initialValue={props.documents.can_text_employment_opportunities}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Employment opportunities
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="can_text_apartment_listings"
            valuePropName="checked"
            initialValue={props.documents.can_text_apartment_listings}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Apartment listings
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="can_text_career_fairs"
            valuePropName="checked"
            initialValue={props.documents.can_text_career_fairs}
          >
            <Checkbox
              disabled={disabled}
              onChange={e => handleCheckboxChange(e)}
            >
              {' '}
              Career fairs and job trainings/programs
            </Checkbox>
          </Form.Item>
        </section>
      </div>

      <Divider style={{ marginBottom: '50px' }} />

      <div className="ClientDocuments__referralsContainer">
        <h3 className="ClientDocuments_sectionHeader">
          <b>Referrals:</b>
        </h3>
        {props.referrals.map((referral, index) => {
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
                  disabled={disabled}
                  name={`name`}
                  placeholder="John Doe"
                  value={referral.name}
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
                  disabled={disabled}
                  name="first_meeting_date"
                  value={Moment(referral.first_meeting_date)}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                    disabled={disabled}
                    style={{ margin: '0 30vw', flexBasis: '100%' }}
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
            disabled={disabled}
            style={{ margin: '0 20px' }}
            icon={<PlusOutlined />}
            onClick={handleAddReferral}
          >
            Add Referral
          </Button>
        </Form.Item>
      </div>
      <section className="CaseSubmit">
        <Button
          onClick={toggleEdit}
          style={{
            margin: '1rem',
            color: '#CDCDCD',
            background: '#007FD4',
            borderColor: '#007FD4',
          }}
          type="primary"
        >
          {disabled ? 'Edit' : 'Save Changes'}
        </Button>
      </section>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    documents: state.documents,
    referrals: state.documents.referrals,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDocuments: documentData =>
      dispatch(documents.setDocuments(documentData)),
    getDocuments: () => dispatch(documents.getDocuments()),
    setReferrals: referralData =>
      dispatch(documents.setReferrals(referralData)),
    addReferral: () => dispatch(documents.addReferral()),
    deleteReferral: index => dispatch(documents.deleteReferral(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
