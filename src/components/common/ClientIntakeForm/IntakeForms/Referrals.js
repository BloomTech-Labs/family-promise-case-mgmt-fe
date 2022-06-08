import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Button, Table, Space } from 'antd';
import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { referral } from '../../../../state/actions';
import axios from 'axios';

const Referrals = props => {
  const [form] = Form.useForm();
  const [referralIndex, setReferralIndex] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/referrals/${props.client.id}/`)
      .then(referrals => {
        referral.setReferrals(referrals);
      });
  }, [props.client]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record, i) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditReferral(record, i)}
          ></Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteReferral(i)}
          ></Button>
        </Space>
      ),
    },
  ];

  const expandable = {
    expandedRowRender: record => (
      <div>
        <p>
          {record.address}
          {record.apt !== '' ? ` ${record.apt},` : ','} {record.city},{' '}
          {record.state} {record.zip}{' '}
        </p>
        <p>
          {record.cell !== '' ? `cell: ${record.cell}` : null}{' '}
          {record.home !== '' ? `home: ${record.home}` : null}{' '}
          {record.work !== '' ? `work: ${record.work}` : null}
        </p>
        <p>{record.emial !== '' ? `email: ${record.email}` : null}</p>
      </div>
    ),
  };

  const onFinish = values => {
    if (typeof referralIndex === 'number') {
      // axios
      //   .post(`/${props.client.id}/${}`)
      props.editReferral(values, referralIndex);
      setReferralIndex(null);
    } else {
      props.saveReferral(values);
    }
    form.resetFields();
  };

  const handleDeleteReferral = index => {
    props.deleteReferral(index);
  };

  const handleEditReferral = (values, index) => {
    setReferralIndex(index);
    form.setFieldsValue(values);
  };

  const handleCancel = () => {
    setReferralIndex(null);
    form.resetFields();
  };

  return (
    <Form
      name="referralForm"
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="sectionContainer"
    >
      <div className="subsectionContainer">
        <h2 className="subsectionHeader">Referrals</h2>

        <div className="referralFormContainer">
          <Table
            dataSource={[...props.referrals]}
            columns={columns}
            expandable={expandable}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 240 }}
          />
          <section className="referralContainer" layout="vertical">
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Name:
                </label>
              }
              name="name"
            >
              <Input
                placeholder="John Doe"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  First Meeting:
                </label>
              }
              name="first_meeting_date"
            >
              <DatePicker
                format="MM-DD-YYYY"
                placeholder="MM-DD-YYYY"
                className="inputStylesShort ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Address (If Available):
                </label>
              }
              name="address"
            >
              <Input
                placeholder="123 Anywhere Street"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Apt #:
                </label>
              }
              name="apt"
            >
              <Input
                placeholder="Apt #"
                className="inputStylesShort ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  City:
                </label>
              }
              name="city"
            >
              <Input
                placeholder="City Name"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  State:
                </label>
              }
              name="state"
            >
              <Input
                placeholder="State Abbrv."
                className="inputStylesShort ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Zip:
                </label>
              }
              name="zip"
            >
              <Input
                placeholder="Zip Code"
                className="inputStylesShort ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Email:
                </label>
              }
              name="email"
            >
              <Input
                placeholder="user@email.com"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Cell:
                </label>
              }
              name="cell"
            >
              <Input
                placeholder="555-555-5555"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Work:
                </label>
              }
              name="work"
            >
              <Input
                placeholder="555-555-5555"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientDocuments__Input__ItemLabel">
                  Home:
                </label>
              }
              name="home"
            >
              <Input
                placeholder="555-555-5555"
                className="inputStyles ReferralInput"
              />
            </Form.Item>
          </section>
          <Form.Item style={{ textAlign: 'center' }}>
            <Button
              style={{ margin: '0 20px' }}
              icon={<PlusOutlined />}
              htmlType="submit"
              type="primary"
            >
              Save Referral
            </Button>
          </Form.Item>
          {referralIndex != null ? (
            <Form.Item style={{ textAlign: 'center' }}>
              <Button style={{ margin: '0 20px' }} onClick={handleCancel}>
                Cancel
              </Button>
            </Form.Item>
          ) : null}
        </div>
      </div>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    referrals: state.referral,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveReferral: referralData => dispatch(referral.saveReferral(referralData)),
    deleteReferral: index => dispatch(referral.deleteReferral(index)),
    editReferral: (referralData, index) =>
      dispatch(referral.editReferral(referralData, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
