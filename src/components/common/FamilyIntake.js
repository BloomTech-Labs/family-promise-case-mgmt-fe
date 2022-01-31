import React from 'react';
import { Form, Input, Button, Select, InputNumber, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

export const FamilyIntake = () => {
  const { TextArea } = Input;

  // antd's answer to onSubmit
  const onFinish = e => {
    // The endpoint used is a placeholder. The response will always be the submitted data.
    console.log(e);
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Mock POST',
        body: e,
      })
      .then(res => {
        alert('Sucess! Data submitted:\n' + JSON.stringify(res.data.body));
      })
      .catch(() => {
        console.error('Something Went Wrong');
      });
  };

  return (
    <div>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={onFinish}
        style={{ paddingTop: '2rem' }}
      >
        <Form.Item label="Head of Household" name="head_of_household">
          <Input placeholder="Head of Household" />
        </Form.Item>
        <Form.Item label="Name of Family Members">
          <Form.List name="Name of Family Members">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    style={{ display: 'flex', marginBottom: 8 }}
                    align="baseline"
                  >
                    <Form.Item
                      {...restField}
                      name={[name, 'first_name']}
                      rules={[
                        { required: true, message: 'Missing first name' },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'last_name']}
                      rules={[{ required: true, message: 'Missing last name' }]}
                    >
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form.Item>
        <Form.Item label="Family Size" name="family_size">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Education Status" name="education_level">
          <Select placeholder="Education Status">
            <Select.Option value="High School Graduate" />
            <Select.Option value="Some College" />
            <Select.Option value="College Graduate" />
          </Select>
        </Form.Item>
        <Form.Item label="Prior History" name="homeless_history">
          <TextArea
            rows={4}
            placeholder="Prior History/Prior Episodes of Homelessness"
          />
        </Form.Item>
        <Form.Item label="Employment Status" name="employment">
          <Select>
            <Select.Option value="Employed" />
            <Select.Option value="Unemployed" />
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            style={{
              marginLeft: '30%',
            }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
