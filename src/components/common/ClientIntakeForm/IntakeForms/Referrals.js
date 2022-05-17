import React from 'react';
import { DatePicker, Form, Input, Button, Table, Space } from 'antd';
import Moment from 'moment';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { referral } from '../../../../state/actions';

const Documents = props => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Button>{EditOutlined}</Button>
          <Button>{DeleteOutlined}</Button>
        </Space>
      ),
    },
  ];

  const handleSaveReferral = (e, index, string) => {
    document.querySelectorAll('.ReferralInput');
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

  return (
    <div className="ClientContactPreferences__subsectionContainer">
      <h2 className="ClientContactPreferences__subsectionHeader">Referrals</h2>

      <div className="ClientDocuments__referralFormContainer">
        <Table columns={columns} />
        <section
          className="ClientDocuments__referralContainer"
          layout="vertical"
        >
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">Name:</label>
            }
          >
            <Input
              name={`name`}
              placeholder="John Doe"
              className="ClientDocuments__Input__Name ReferralInput"
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
              name="first_meeting_date"
              format="MM-DD-YYYY"
              placeholder="MM-DD-YYYY"
              className="ClientDocuments__DatePicker ReferralInput"
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
              placeholder="123 Anywhere Street"
              className="ClientDocuments__Input__Address ReferralInput"
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
              placeholder="Apt #"
              className="ClientDocuments__Input__Apt ReferralInput"
            />
          </Form.Item>
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">City:</label>
            }
          >
            <Input
              name="city"
              placeholder="City Name"
              className="ClientDocuments__Input__City ReferralInput"
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
              placeholder="State Abbrv."
              className="ClientDocuments__Input__State ReferralInput"
            />
          </Form.Item>
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">Zip:</label>
            }
          >
            <Input
              name="zip"
              placeholder="Zip Code"
              className="ClientDocuments__Input__Zip ReferralInput"
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
              placeholder="user@email.com"
              className="ClientDocuments__Input__Email ReferralInput"
            />
          </Form.Item>
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">Cell:</label>
            }
          >
            <Input
              name="cell"
              placeholder="555-555-5555"
              className="ClientDocuments__Input__Cell ReferralInput"
            />
          </Form.Item>
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">Work:</label>
            }
          >
            <Input
              name="work"
              placeholder="555-555-5555"
              className="ClientDocuments__Input__Work ReferralInput"
            />
          </Form.Item>
          <Form.Item
            label={
              <label className="ClientDocuments__Input__ItemLabel">Home:</label>
            }
          >
            <Input
              name="home"
              placeholder="555-555-5555"
              className="ClientDocuments__Input__Home ReferralInput"
            />
          </Form.Item>
        </section>
        <Form.Item style={{ textAlign: 'center' }}>
          <Button
            style={{ margin: '0 20px' }}
            icon={<PlusOutlined />}
            onClick={handleSaveReferral}
          >
            Save Referral
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    referrals: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReferrals: referralData => dispatch(referral.setReferrals(referralData)),
    addReferral: () => dispatch(referral.addReferral()),
    deleteReferral: index => dispatch(referral.deleteReferral(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
