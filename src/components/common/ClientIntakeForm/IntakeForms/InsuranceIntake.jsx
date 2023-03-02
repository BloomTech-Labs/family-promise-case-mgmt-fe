import React from 'react';
import {
  Form,
  RadioChangeEvent,
  Checkbox,
  Input,
  Radio,
  DatePicker,
} from 'antd';
import { useState } from 'react';

const Insurance = () => {
  //Initialize Form from AntD
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);
  const { TextArea } = Input;

  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">INSURANCE</h2>

      {/* MEDICARE */}

      <div className="medicareContainer formStyles" style={{ width: '100vw' }}>
        <Form.Item label="Medicare" name="medicareRadio">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Yes</Radio>;<Radio value={2}>No</Radio>;
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Medicare #" name="medicareNumber">
          <Input placeholder="xxxxxxxx" style={{ width: '85%' }} />
        </Form.Item>

        <Form.Item label="Effective Date" name="medicareEffectiveDate">
          <Input.Group>
            <DatePicker style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>
      </div>

      {/* MEDICAID  */}

      <div className="medicaidContainer formStyles">
        <Form.Item label="Medicaid" name="medicaidRadio">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Yes</Radio>;<Radio value={2}>No</Radio>;
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Medicaid #" name="medicaidNumber">
          <Input placeholder="xxxxxxxx" style={{ width: '85%' }} />
        </Form.Item>

        <Form.Item label="Effective Date" name="medicaidEffectiveDate">
          <Input.Group>
            <DatePicker style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>

        <Form.Item label="Exp. Date" name="medicaidExpDate">
          <Input.Group>
            <DatePicker style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>
      </div>

      {/* PRIVATE INSURACE SECTION */}

      <div className="privateInsuranceContainer formStyles">
        <Form.Item label="Private Insurance" name="PIRadio">
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Yes</Radio>;<Radio value={2}>No</Radio>;
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Insurance Company" name="PICompanyName">
          <Input.Group>
            <Input placeholder="Company Name" style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>

        <Form.Item label="Group #" name="PIGroupName">
          <Input placeholder="XXXXXXXXXX" style={{ width: '85%' }} />
        </Form.Item>
      </div>

      <div className="subscriberContainer formStyles">
        <Form.Item label="Subscriber # #" name="PISubscriberNumber">
          <Input placeholder="XXXXXXXXXX" style={{ width: '85%' }} />
        </Form.Item>

        <Form.Item label="Effective Date" name="PIEffDate">
          <Input.Group>
            <DatePicker style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>

        <Form.Item label="Exp. Date" name="PIExpDate">
          <Input.Group>
            <DatePicker style={{ width: '85%' }} />
          </Input.Group>
        </Form.Item>
      </div>

      <div className="employerOccupationContainer formStyles">
        <Form.Item label="Employer Occupation" name="PIEmployerOccupation">
          <Input placeholder="Occupation" style={{ width: '110%' }} />
        </Form.Item>
      </div>

      <div className="otherCoverageContainer formStyles">
        <Form.Item label="Other Coverage(Explain)" name="otherCoverage">
          <TextArea rows={1} />
        </Form.Item>
      </div>

      <div className="clientAgenciesContainer formStyles">
        <Form.Item
          label="Client or Family working with other agencies?"
          name="clientAgencies"
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Yes</Radio>;<Radio value={2}>No</Radio>;
          </Radio.Group>
        </Form.Item>
      </div>

      <div className="agencyExplainContainer formStyles">
        <Form.Item label="If yes, what other agencies?" name="agency">
          <TextArea rows={1} />
        </Form.Item>
      </div>
    </div>
  );
};

export default Insurance;
