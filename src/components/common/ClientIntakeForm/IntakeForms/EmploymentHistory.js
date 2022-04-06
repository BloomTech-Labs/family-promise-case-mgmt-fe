import React from 'react';
import { Form, Input, Radio, Checkbox } from 'antd';

const EmploymentHistory = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
  };

  const formSectionStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '400px',
    flexWrap: 'wrap',
    marginLeft: '40px',
  };

  const { TextArea } = Input;

  const inputStyles = {
    width: '20rem',
  };

  const sectionRight = {
    margin: '20px',
  };

  const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  const radioStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  const workOptions = [
    { label: 'Sales/Retail', value: 'salesRetail' },
    { label: 'Fast Food', value: 'fastFood' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Warehouse', value: 'warehouse' },
    { label: 'Truck Driving', value: 'truckDriving' },
  ];

  const grid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '0px 40px',
  };

  return (
    <div>
      <h2 style={subsectionHeader}>Employment History</h2>

      <div>
        <section style={grid}>
          <Form.Item label="Employment History">
            <Input
              placeholder="Employment History THIS NEEDS UPDATING"
              style={inputStyles}
            />
          </Form.Item>
          <Form.Item label="Currently Employed?">
            <Radio.Group style={radioStyles}>
              <Radio value={'yesFullTime'}>Yes (Full-Time)</Radio>
              <Radio value={'yesPartTime'}>Yes (Part-Time)</Radio>
              <Radio value={'seasonalTemporary'}>
                Seasonal/Temporary Employment
              </Radio>
              <Radio value={'noDueToCondition'}>
                No, due to a physical/mental condition
              </Radio>
              <Radio value={'no'}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <section>
            <Form.Item label="Skills / Certifications?">
              <Radio.Group>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="If Yes, what are they?">
              <TextArea
                placeholder="List Skills and Certifications"
                style={inputStyles}
              />
            </Form.Item>
          </section>
          <Form.Item label="Interested in working in:">
            <Checkbox.Group options={workOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>
    </div>
  );
};

export default EmploymentHistory;
