import React from 'react';
import { Form, Checkbox, Button } from 'antd';
import { contactPreferences } from '../../../../state/actions';
import { connect } from 'react-redux';

const ContactPreferences = props => {
  const [form] = Form.useForm();

  const onFinish = checkboxData => {
    props.setContactPreferences(checkboxData);
  };

  return (
    <Form.Item
      name="clientIntakeForm"
      form={form}
      onFinish={onFinish}
      onSubmit={e => e.preventDefault()}
      layout="vertical"
      className="sectionContainer"
      initialValues={props.contactPreferences}
    >
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Contact Preferences</h2>

        <div className="checkboxGroupContainer">
          <section className="ClientContactPreferences__checkboxGroup">
            <h3 className="ClientContactPreferences_sectionHeader">
              <b>Would you like to receive information about:</b>
            </h3>
            <Form.Item name="food_assistance" valuePropName="checked">
              <Checkbox>
                {''}
                Food/meal assistance
              </Checkbox>
            </Form.Item>
            <Form.Item name="clothing_assistance" valuePropName="checked">
              <Checkbox>
                {''}
                Clothing assistance
              </Checkbox>
            </Form.Item>
            <Form.Item name="counseling_services" valuePropName="checked">
              <Checkbox>
                {''}
                Counseling services
              </Checkbox>
            </Form.Item>
            <Form.Item name="addiction_resources" valuePropName="checked">
              <Checkbox>
                {''}
                Addiction/recovery resources
              </Checkbox>
            </Form.Item>
            <Form.Item name="mentor_programs" valuePropName="checked">
              <Checkbox>
                {''}
                Mentor programs
              </Checkbox>
            </Form.Item>
            <Form.Item name="youth_services" valuePropName="checked">
              <Checkbox>
                {''}
                Youth services/programming
              </Checkbox>
            </Form.Item>
            <Form.Item name="budgeting" valuePropName="checked">
              <Checkbox>
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
            >
              <Checkbox>
                {''}
                Employment opportunities
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="can_text_apartment_listings"
              valuePropName="checked"
            >
              <Checkbox>
                {''}
                Apartment listings
              </Checkbox>
            </Form.Item>
            <Form.Item name="can_text_career_fairs" valuePropName="checked">
              <Checkbox>
                {''}
                Career fairs and job trainings/programs
              </Checkbox>
            </Form.Item>
          </section>
        </div>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form.Item>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPreferences);
