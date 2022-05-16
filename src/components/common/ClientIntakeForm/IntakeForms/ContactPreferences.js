import React from 'react';
import { Form, Checkbox } from 'antd';
import { contactPreferences } from '../../../../state/actions';
import { connect } from 'react-redux';

const ContactPreferences = props => {
  const handleCheckboxChange = e => {
    const { checked, id } = e.target;
    props.setContactPreferences({ [id]: checked });
  };

  return (
    <div className="ClientContactPreferences__subsectionContainer">
      <h2 className="ClientContactPreferences__subsectionHeader">
        Contact Preferences
      </h2>

      <div className="ClientContactPreferences__checkboxGroupContainer">
        <section className="ClientContactPreferences__checkboxGroup">
          <h3 className="ClientContactPreferences_sectionHeader">
            <b>Would you like to receive information about:</b>
          </h3>
          <Form.Item
            name="food_assistance"
            valuePropName="checked"
            initialValue={props.contactPreferences.food_assistance}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Food/meal assistance
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="clothing_assistance"
            valuePropName="checked"
            initialValue={props.contactPreferences.clothing_assistance}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Clothing assistance
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="counseling_services"
            valuePropName="checked"
            initialValue={props.contactPreferences.counseling_services}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Counseling services
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="addiction_resources"
            valuePropName="checked"
            initialValue={props.contactPreferences.addiction_resources}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Addiction/recovery resources
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="mentor_programs"
            valuePropName="checked"
            initialValue={props.contactPreferences.mentor_programs}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Mentor programs
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="youth_services"
            valuePropName="checked"
            initialValue={props.contactPreferences.youth_services}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Youth services/programming
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="budgeting"
            valuePropName="checked"
            initialValue={props.contactPreferences.budgeting}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Budgeting
            </Checkbox>
          </Form.Item>
        </section>
        <section className="ClientContactPreferences__checkboxGroup">
          <h3 className="ClientContactPreferences_sectionHeader">
            <b>Would you like to receive text updates about:</b>
          </h3>
          <Form.Item
            name="can_text_employment_opportunities"
            valuePropName="checked"
            initialValue={
              props.contactPreferences.can_text_employment_opportunities
            }
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Employment opportunities
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="can_text_apartment_listings"
            valuePropName="checked"
            initialValue={props.contactPreferences.can_text_apartment_listings}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Apartment listings
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="can_text_career_fairs"
            valuePropName="checked"
            initialValue={props.contactPreferences.can_text_career_fairs}
          >
            <Checkbox onChange={e => handleCheckboxChange(e)}>
              {''}
              Career fairs and job trainings/programs
            </Checkbox>
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contactPreferences: state.contactPreferences,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setContactPreferences: data =>
      dispatch(contactPreferences.setContactPreferences(data)),
    getContactPreferences: () =>
      dispatch(contactPreferences.getContactPreferences()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPreferences);
