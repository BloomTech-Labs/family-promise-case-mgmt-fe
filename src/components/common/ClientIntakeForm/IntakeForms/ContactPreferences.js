import React, { useEffect } from 'react';
import { Form, Checkbox, Button } from 'antd';
import { contactPreferences } from '../../../../state/actions';
import { connect } from 'react-redux';
import axios from 'axios';

const ContactPreferences = props => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('running');
    axios
      .get(`http://localhost:8000/api/contactPreferences/${props.client.id}`)
      .then(preferences => {
        props.setContactPreferences(preferences.data);
        form.setFieldsValue(preferences.data);
      })
      .catch(error => {
        alert('ERROR ' + error);
      });
  }, [props.client]);

  const onFinish = checkboxData => {
    const alteredData = {};
    Object.entries(checkboxData).forEach(checkbox => {
      if (checkbox[1] === undefined) {
        alteredData[checkbox[0]] = false;
      } else {
        alteredData[checkbox[0]] = checkbox[1];
      }
    });
    console.log(alteredData);
    axios
      .post(
        `http://localhost:8000/api/contactPreferences/${props.client.id}`,
        alteredData
      )
      .then(preferences => {
        props.setContactPreferences(preferences);
      })
      .catch(error => {
        alert('ERROR ' + error);
      });
  };

  return (
    <Form
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
              <Checkbox defaultChecked={false}>
                {''}
                Food/meal assistance
              </Checkbox>
            </Form.Item>
            <Form.Item name="clothing_assistance" valuePropName="checked">
              <Checkbox defaultChecked={false}>
                {''}
                Clothing assistance
              </Checkbox>
            </Form.Item>
            <Form.Item name="counseling_services" valuePropName="checked">
              <Checkbox defaultChecked={false}>
                {''}
                Counseling services
              </Checkbox>
            </Form.Item>
            <Form.Item name="addiction_resources" valuePropName="checked">
              <Checkbox defaultChecked={false}>
                {''}
                Addiction/recovery resources
              </Checkbox>
            </Form.Item>
            <Form.Item name="mentor_programs" valuePropName="checked">
              <Checkbox defaultChecked={false}>
                {''}
                Mentor programs
              </Checkbox>
            </Form.Item>
            <Form.Item name="youth_services" valuePropName="checked">
              <Checkbox defaultChecked={false}>
                {''}
                Youth services/programming
              </Checkbox>
            </Form.Item>
            <Form.Item name="budgeting" valuePropName="checked">
              <Checkbox defaultChecked={false}>
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
              <Checkbox defaultChecked={false}>
                {''}
                Employment opportunities
              </Checkbox>
            </Form.Item>
            <Form.Item
              name="can_text_apartment_listings"
              valuePropName="checked"
            >
              <Checkbox defaultChecked={false}>
                {''}
                Apartment listings
              </Checkbox>
            </Form.Item>
            <Form.Item name="can_text_career_fairs" valuePropName="checked">
              <Checkbox defaultChecked={false}>
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
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    contactPreferences: state.contactPreferences,
    client: state.client,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setContactPreferences: data =>
      dispatch(contactPreferences.setContactPreferences(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPreferences);
