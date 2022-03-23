import React from 'react';
import {
  Form,
  Select,
  Input,
  Button,
  Radio,
  DatePicker,
  // TextArea,
  // Checkbox,
  InputNumber,
  // PageHeader,
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

  const style = {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px',
    gridAutoFlow: 'row dense',
    paddingTop: '2rem',
    width: '55%',
    padding: '3rem',
    margin: '0 20rem',
    background: '#3f3f3f',
    color: '#ffffff',
  };

  const sec3 = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const labelText = {
    color: '#cdcdcd',
    textAlign: 'center',
  };

  const sec1 = {
    gridRow: '1 / span 2',
  };

  const inputs = {
    width: '20rem',
  };

  const dateFormat = 'MM/DD/YYYY';

  const sec2 = {
    display: 'flex',
    justifyContent: 'space-evenly',
  };

  return (
    <div className="ClientFamilyForm">
      <Form
        form={form}
        style={style}
        initialValues={initialFormValues}
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        labelWrap
      >
        <Form.Item
          style={{ margin: '0 0 2rem 35rem' }}
          label={<label style={{ color: '#FFFFFF' }}>Initial Date:</label>}
        >
          <DatePicker placeholder="MM-DD-YYYY" format={dateFormat} />
        </Form.Item>
        <h1 style={labelText}>Head of Household</h1>
        <div className="sec1Container" style={sec2}>
          <section style={sec1}>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>First Name:</label>}
            >
              <Input placeholder="First Name" style={inputs} />
            </Form.Item>
            <Form.Item label={<label style={{ color: '#FFFFFF' }}>SSN:</label>}>
              <InputNumber
                placeholder="XXX - XXX - XXXX"
                style={inputs}
                name="SSN"
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Ethnicity:</label>}
            >
              <Select style={inputs} placeholder="-- Select --">
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
              label={<label style={{ color: '#FFFFFF' }}>Gender:</label>}
            >
              <Select style={inputs} placeholder="-- Select --">
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
                <label style={{ color: '#FFFFFF' }}>
                  If Gender Self-Describe:
                </label>
              }
            >
              <Input placeholder="Self Describe" style={inputs} />
            </Form.Item>
          </section>
          <section style={sec1}>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Last Name:</label>}
            >
              <Input placeholder="Last Name" style={inputs} />
            </Form.Item>
            <Form.Item label={<label style={{ color: '#FFFFFF' }}>DOB:</label>}>
              <DatePicker placeholder="MM-DD-YYYY" format={dateFormat} />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Race:</label>}
            >
              <Select style={inputs} placeholder="-- Select --">
                <Select.Option value="American Indian or Alaska Native" />
                <Select.Option value="Asian" />
                <Select.Option value="Black or African American" />
                <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                <Select.Option value="White" />
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label style={{ color: '#FFFFFF' }}>Sexual Orientation:</label>
              }
            >
              <Select style={inputs} placeholder="-- Select --">
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
                <label style={{ color: '#FFFFFF' }}>
                  If Sexual Orientation Other:
                </label>
              }
            >
              <Input placeholder="Other" style={inputs} />
            </Form.Item>
          </section>
        </div>
        <h1 style={labelText}>Last Known Address</h1>
        <div className="section2Container">
          <section style={sec2}>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Address:</label>}
            >
              <Input placeholder="Address" style={inputs} />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Apt #:</label>}
            >
              <Input placeholder="Apt #" style={inputs} />
            </Form.Item>
          </section>
          <section style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>City:</label>}
            >
              <Input placeholder="City Name" style={inputs} />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>State:</label>}
            >
              <Input placeholder="State Abbrv." style={{ width: '7rem' }} />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Zip::</label>}
            >
              <InputNumber placeholder="Zip Code" style={{ width: '7rem' }} />
            </Form.Item>
          </section>
          <section style={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <Form.Item
              label={<label style={{ color: '#FFFFFF' }}>Veteran?:</label>}
            >
              <Radio.Group>
                <Radio style={{ color: '#FFFFFF' }} value={1}>
                  Yes
                </Radio>
                <Radio style={{ color: '#FFFFFF' }} value={2}>
                  No
                </Radio>
              </Radio.Group>
            </Form.Item>
          </section>
        </div>
        <div style={sec3} className="section3Container">
          <section>
            <h1 style={labelText}>Family Members</h1>
            <Button
              style={{
                margin: '1rem',
                color: '#CDCDCD',
                background: '#007FD4',
                borderColor: '#007FD4',
              }}
              type="primary"
            >
              + Add Member
            </Button>
          </section>
          <section>
            <h1 style={labelText}>Client Or Family Member Pregnant</h1>
            <div style={{ display: 'flex' }}>
              <Form.Item
                style={{ display: 'contents' }}
                label={
                  <label style={{ color: '#FFFFFF' }}>
                    Client or Family Member is Pregnant
                  </label>
                }
              >
                <Radio.Group>
                  <Radio style={{ color: '#FFFFFF' }} value={1}>
                    Yes
                  </Radio>
                  <Radio style={{ color: '#FFFFFF' }} value={2}>
                    No
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                style={{ display: 'flow-root' }}
                label={
                  <label style={{ color: '#FFFFFF' }}>If Yes, Due Date:</label>
                }
              >
                <DatePicker placeholder="MM-DD-YYYY" format={dateFormat} />
              </Form.Item>
            </div>
            <Form.Item
              label={
                <label style={{ color: '#FFFFFF' }}>Which Family Member?</label>
              }
            >
              <Input
                style={inputs}
                placeholder="Spouse, Domestic Partner, Child, Etc..."
              />
            </Form.Item>
          </section>
        </div>
      </Form>
    </div>
  );
};

export default ClientFamilyInfoForm;
