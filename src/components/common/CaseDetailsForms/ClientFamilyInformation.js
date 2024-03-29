import React, { useState } from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  DatePicker,
  InputNumber,
} from 'antd';

// Initial Empty Values for form
const initialFormValues = {
  first_name: '',
  last_name: '',
  head_of_household: '',
  family_members: '',
  ssn: null,
  ethnicity: '',
  race: '',
  gender: '',
  self_describe: '',
  sexual_orientation: '',
  other: '',
  veteran: '',
  pregnant: '',
  family_member: '',
  homeless_history: '',
  employment: '',
};

const ClientFamilyInfoForm = () => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);

  const onFinish = values => {
    const updatedHousehold = values;
    console.log(updatedHousehold);
    setDisabled(!disabled);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  const disableFormItem = () => {
    setDisabled(!disabled);
  };

  const dateFormat = 'MM/DD/YYYY';

  return (
    <div className="ClientFamilyForm">
      <Form
        style={{ maxWidth: 600 }}
        form={form}
        className="ClientFamilyInformation__Form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialFormValues}
        layout="inline"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        style={{ maxWidth: 600 }}
        labelWrap
      >
        <h1 className="ClientFamilyInformation__Form__h1">Head of Household</h1>
        <Form.Item
          className="ClientFamilyInformation__Form__InitialDate"
          label={
            <label className="ClientFamilyInformation__Inputs__ItemLabel">
              Initial Date:
            </label>
          }
        >
          <DatePicker
            placeholder="MM-DD-YYYY"
            format={dateFormat}
            disabled={disabled}
          />
        </Form.Item>
        <div className="ClientFamilyInformation__Form__SectionGrid2">
          <section className="ClientFamilyInformation__Form__SectionGrid1">
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  First Name:
                </label>
              }
            >
              <Input
                placeholder="First Name"
                className="ClientFamilyInformation__Form__Inputs"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  SSN:
                </label>
              }
            >
              <InputNumber
                placeholder="XXX - XXX - XXXX"
                className="ClientFamilyInformation__Form__Inputs"
                name="SSN"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Ethnicity:
                </label>
              }
            >
              <Select
                className="ClientFamilyInformation__Form__Inputs"
                placeholder="-- Select --"
                disabled={disabled}
              >
                <Select.Option value="American Indian or Alaska Native" />
                <Select.Option value="Asian" />
                <Select.Option value="Black or African American" />
                <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                <Select.Option value="White or Caucasian" />
                <Select.Option value="Hispanic or Latino or Spanish Origin" />
                <Select.Option value="Non-Resident Alien (of any race or ethnicity)" />
                <Select.Option value="Multiracial or Biracial" />
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Gender:
                </label>
              }
            >
              <Select
                className="ClientFamilyInformation__Form__Inputs"
                placeholder="-- Select --"
                disabled={disabled}
              >
                <Select.Option value="Male" />
                <Select.Option value="Female" />
                <Select.Option value="Transgender Male" />
                <Select.Option value="Transgender Female" />
                <Select.Option value="Non-Binary" />
                <Select.Option value="Prefer to Self-Describe" />
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  If Gender Self-Describe:
                </label>
              }
            >
              <Input
                placeholder="Self Describe"
                className="ClientFamilyInformation__Form__Inputs"
                disabled={disabled}
              />
            </Form.Item>
          </section>
          <section className="ClientFamilyInformation__Form__SectionGrid1">
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Last Name:
                </label>
              }
            >
              <Input
                placeholder="Last Name"
                className="ClientFamilyInformation__Form__Inputs"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  DOB:
                </label>
              }
            >
              <DatePicker
                placeholder="MM-DD-YYYY"
                format={dateFormat}
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Race:
                </label>
              }
            >
              <Select
                className="ClientFamilyInformation__Form__Inputs"
                placeholder="-- Select --"
                disabled={disabled}
              >
                <Select.Option value="American Indian or Alaska Native" />
                <Select.Option value="Asian" />
                <Select.Option value="Black or African American" />
                <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                <Select.Option value="White" />
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Sexual Orientation:
                </label>
              }
            >
              <Select
                className="ClientFamilyInformation__Form__Inputs"
                placeholder="-- Select --"
                disabled={disabled}
              >
                <Select.Option value="Asexual" />
                <Select.Option value="Bisexual" />
                <Select.Option value="Gay" />
                <Select.Option value="Lesbian" />
                <Select.Option value="Heterosexual/Straight" />
                <Select.Option value="Pansexual" />
                <Select.Option value="Pansexual" />
                <Select.Option value="Queer" />
                <Select.Option value="Preferred Not to Answer" />
                <Select.Option value="Other" />
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  If Sexual Orientation Other:
                </label>
              }
            >
              <Input
                placeholder="Other"
                className="ClientFamilyInformation__Inputs"
                disabled={disabled}
              />
            </Form.Item>
          </section>
        </div>
        <br />
        <h1 className="ClientFamilyInformation__Form__h1">
          Last Known Address
        </h1>
        <div className="ClientFamilyInformation__Form__SectionGrid3__Container">
          <section className="ClientFamilyInformation__Form__SectionGrid2">
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Address:
                </label>
              }
            >
              <Input
                placeholder="Address"
                className="ClientFamilyInformation__Form__Inputs"
                disabled={disabled}
              />
            </Form.Item>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Apt #:
                </label>
              }
            >
              <Input
                placeholder="Apt #"
                className="ClientFamilyInformation__Form__Inputs"
                disabled={disabled}
              />
            </Form.Item>
          </section>
          <section className="ClientFamilyInformation__Form__SectionGrid3">
            <div className="CityandState__Container">
              <Form.Item
                label={
                  <label className="ClientFamilyInformation__Inputs__ItemLabel__Small">
                    City:
                  </label>
                }
              >
                <Input
                  placeholder="City Name"
                  className="ClientFamilyInformation__Form__Inputs"
                  disabled={disabled}
                />
              </Form.Item>
              <Form.Item
                label={
                  <label className="ClientFamilyInformation__Inputs__ItemLabel__Small StateMargin">
                    State:
                  </label>
                }
              >
                <Input
                  placeholder="State Abbrv."
                  className="ClientFamilyInformation__Form__SmallInputs StateMargin"
                  style={{ width: 335 }}
                  disabled={disabled}
                />
              </Form.Item>
            </div>
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel__Small">
                  Zip:
                </label>
              }
            >
              <InputNumber
                placeholder="Zip Code"
                className="ClientFamilyInformation__Form__SmallInputs"
                disabled={disabled}
              />
            </Form.Item>
          </section>
          <section className="ClientFamilyInformation__Form__VeteranStatus">
            <Form.Item
              label={
                <label className="ClientFamilyInformation__Inputs__ItemLabel">
                  Veteran?:
                </label>
              }
            >
              <Radio.Group>
                <Radio value={1} disabled={disabled}>
                  Yes
                </Radio>
                <Radio value={2} disabled={disabled}>
                  No
                </Radio>
              </Radio.Group>
            </Form.Item>
          </section>
        </div>
        <div className="ClientFamilyInformation__Form__FamilyMembers__Container">
          <section>
            <h1 className="ClientFamilyInformation__Form__h1">
              Family Members
            </h1>
            <Button
              style={{
                margin: '1rem',
                color: '#CDCDCD',
                background: '#007FD4',
                borderColor: '#007FD4',
              }}
              type="primary"
              disabled={disabled}
            >
              + Add Member
            </Button>
          </section>
          <section>
            <h1 className="ClientFamilyInformation__Form__h1">
              Client Or Family Member Pregnant
            </h1>
            <div className="ClientFamilyInformation__Form__FamilyMembers__IsPregnant">
              <Form.Item
                label={
                  <label className="ClientFamilyInformation__Inputs__ItemLabel">
                    Client or Family Member is Pregnant
                  </label>
                }
              >
                <Radio.Group>
                  <Radio value={1} disabled={disabled}>
                    Yes
                  </Radio>
                  <Radio value={2} disabled={disabled}>
                    No
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                className="ClientFamilyInformation__Form__FamilyMembers__formItem"
                label={
                  <label className="ClientFamilyInformation__Inputs__ItemLabel">
                    If Yes, Due Date:
                  </label>
                }
              >
                <DatePicker
                  placeholder="MM-DD-YYYY"
                  format={dateFormat}
                  disabled={disabled}
                />
              </Form.Item>
            </div>
            <div className="pregnantFamilyMember__Container">
              <Form.Item
                label={
                  <label className="ClientFamilyInformation__Inputs__ItemLabel">
                    Which Family Member?
                  </label>
                }
              >
                <Input
                  className="ClientFamilyInformation__Form__Inputs"
                  placeholder="Spouse, Domestic Partner, Child, Etc..."
                  disabled={disabled}
                />
              </Form.Item>
            </div>
          </section>
          <section>
            <div className="editButtonsContainer">
              <Button
                htmlType="submit"
                disabled={disabled}
                style={{
                  margin: '1rem',
                  color: '#CDCDCD',
                  background: '#007FD4',
                  borderWidth: '3px',
                }}
                type="primary"
              >
                SAVE
              </Button>
              <Button
                onClick={disableFormItem}
                style={{
                  margin: '1rem',
                  color: '#CDCDCD',
                  background: '#007FD4',
                  borderWidth: '3px',
                }}
                type="primary"
              >
                EDIT
              </Button>
            </div>
          </section>
        </div>
      </Form>
    </div>
  );
};

export default ClientFamilyInfoForm;
