import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import axios from 'axios';
import ClientFamilyIntake from './IntakeFormSections/ClientFamilyIntake';

// the structure of this component is supposed to mirror that of ClientListTable, in which we have a folder with a file index.js as the default export containing all other components within. When you import a folder and it has index.js, you don't need to specify a file as index.js is the default. This allows us to group a main component and its subcomponents in a single folder that can be seamlessly imported.

// In a future pull request we will update this entire component and break in into sub components. As of writing this, I, @shariqali-dev is doing pull request #18, which only focuses on renaming components
export const ClientIntake = () => {
  const { TextArea } = Input;

  // Initial Empty Values for form
  const clientInput = {
    head_of_household: '',
    family_members: '',
    family_size: null,
    education_level: '',
    homeless_history: '',
    employment: '',
  };

  const [clientInfo, setClientInfo] = useState(clientInput);

  // Change Handler used for all fields except Select.
  const formChanges = event => {
    const { name, value } = event.target;
    setClientInfo({ ...clientInfo, [name]: value });
  };
  // antd's answer to onSubmit
  const onFinish = () => {
    // The endpoint used is a placeholder. The response will always be the submitted data.
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Mock POST',
        body: clientInfo,
      })
      .then(res => {
        alert('Sucess! Data submitted:\n' + JSON.stringify(res.data.body));
      })
      .catch(() => {
        console.error('Something Went Wrong');
      });
  };

  return (
    // <div>
    //   <Form
    //     labelCol={{ span: 4 }}
    //     wrapperCol={{ span: 14 }}
    //     layout="horizontal"
    //     onFinish={onFinish}
    //     style={{ paddingTop: '2rem' }}
    //   >
    //     <Form.Item
    //       label="Head of Household"
    //       value={clientInfo.head_of_household}
    //       onChange={formChanges}
    //     >
    //       <Input name="head_of_household" placeholder="Head of Household" />
    //     </Form.Item>
    //     <Form.Item
    //       label="Name of Family Members"
    //       value={clientInfo.family_members}
    //       onChange={formChanges}
    //     >
    //       <TextArea
    //         rows={4}
    //         name="family_members"
    //         placeholder="Name of Family Members"
    //       />
    //     </Form.Item>
    //     <Form.Item
    //       label="Family Size"
    //       value={clientInfo.family_size}
    //       onChange={formChanges}
    //     >
    //       <InputNumber name="family_size" />
    //     </Form.Item>
    //     <Form.Item
    //       label="Education Status"
    //       value={clientInfo.education_level}
    //       onChange={formChanges}
    //     >
    //       <Select
    //         value={clientInfo.education_level}
    //         placeholder="Education Status"
    //         name="education_level"
    //         onChange={value => {
    //           setClientInfo({ ...clientInfo, education_level: value });
    //         }}
    //       >
    //         <Select.Option value="High School Graduate" />
    //         <Select.Option value="Some College" />
    //         <Select.Option value="College Graduate" />
    //       </Select>
    //     </Form.Item>
    //     <Form.Item
    //       label="Prior History"
    //       value={clientInfo.homeless_history}
    //       onChange={formChanges}
    //     >
    //       <TextArea
    //         rows={4}
    //         name="homeless_history"
    //         placeholder="Prior History/Prior Episodes of Homelessness"
    //       />
    //     </Form.Item>
    //     <Form.Item
    //       label="Employment Status"
    //       value={clientInfo.employment}
    //       onChange={formChanges}
    //     >
    //       <Select
    //         name="employment"
    //         onChange={value => {
    //           setClientInfo({ ...clientInfo, employment: value });
    //         }}
    //       >
    //         <Select.Option value="Employed" />
    //         <Select.Option value="Unemployed" />
    //       </Select>
    //     </Form.Item>
    //     <Form.Item>
    //       <Button
    //         htmlType="submit"
    //         style={{
    //           marginLeft: '30%',
    //         }}
    //       >
    //         Submit
    //       </Button>
    //     </Form.Item>
    //   </Form>
    <ClientFamilyIntake />
  );
};
