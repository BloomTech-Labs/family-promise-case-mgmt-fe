import { Form, Checkbox, Input, InputNumber, Radio, Button } from 'antd';
import React, { useState } from 'react';

const initialFormValues = {
  fleeingDomV: false,
  lackOfIncome: false,
  lostJob: false,
  familyConflict: false,
  familyRej: false,
  lackOfAffHous: false,
  eviction: false,
  other: false,
  otherText: 'If other enter here',
  numTimesHomeless: 0,
  totTimeHomeless: 0,
  lengthOfStayPrevY: 0,
  lengthOfStayPrevM: 0,
  disability: true,
  disabiltyText: 'Enter who and what disability here',
  activeCase: false,
  pastIncident: false,
  pastExplanation: 'Explanation',
  moreThanOnePast: false,
  moreThanOneExplanation: 'Explanation',
  receiveSec8Vouch: true,
  howLongA: 1,
  howLongB: 0,
  howLongC: 0,
  howLongD: 2,
  howLongE: 0,
  howLongTotal: 3,
  prevLivSit: 'Description Here',
  interpreter: false,
  transportationAcc: false,
  physIll: true,
  mentalIll: false,
  famConflictHist: false,
  personalViol: false,
  subAbuse: false,
  socialWorkerName: 'Firstname Lastname',
  socialWorkerEmail: 'email@email.com',
  socialWorkerPhone: '(555) 123-4567',
};

export const HouseholdInformationForm = props => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(false);

  const onFinish = values => {
    const updatedHousehold = values;
    console.log(updatedHousehold);
    setDisabled(!disabled);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px',
    gridAutoFlow: 'row dense',
    paddingTop: '2rem',
    width: '80%',
    padding: '2rem',
    margin: '0 12rem ',
    background: '#3f3f3f',
    color: '#ffffff',
  };

  const grid = {
    gridRow: '2',
    gridColumn: '2',
  };

  const socWork = {
    gridColumn: '2',
  };

  const sec1 = {
    gridRow: '1 / span 2',
  };

  const formSecs = {};

  const inputs = {
    width: '20rem',
  };

  const caseContainer = {
    color: '#ffffff',
  };

  const disableFormItem = () => {
    setDisabled(!disabled);
  };

  const labelText = {
    color: '#cdcdcd',
  };

  const labelTextDis = {
    color: '#fcfcfc',
  };

  //   const checkBox = {
  //     color: disabled === true ? labelTextDis : labelText,
  //     // background: '#007fd4',
  //   };

  return (
    <div className="HouseholdCase" style={caseContainer}>
      <Form
        form={form}
        name="householdCaseView"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialFormValues}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        layout="horizontal"
        style={style}
        labelWrap

        // style={{ paddingTop: '2rem' }}
      >
        <section className="CircumstancesCaseView" style={sec1}>
          <h4 style={labelText}>
            What Circumstances Brought Client to Open Doors?
          </h4>
          <Form.Item name="fleeingDomV" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Fleeing Domestic Violence
            </Checkbox>
          </Form.Item>

          <Form.Item name="lackOfIncome" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Lack of Income
            </Checkbox>
          </Form.Item>

          <Form.Item name="lostJob" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Lost Job
            </Checkbox>
          </Form.Item>

          <Form.Item name="familyConflict" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Family Conflict
            </Checkbox>
          </Form.Item>

          <Form.Item name="familyRej" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Family Rejection/LGBTQ+ Issue
            </Checkbox>
          </Form.Item>

          <Form.Item name="lackOfAffHous" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Lack of Affordable Housing
            </Checkbox>
          </Form.Item>

          <Form.Item name="eviction" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Eviction
            </Checkbox>
          </Form.Item>

          <Form.Item name="other" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Other
            </Checkbox>
          </Form.Item>

          <Form.Item name="otherText" label="" style={inputs}>
            <Input disabled={disabled} />
          </Form.Item>

          <p>
            Number of times Client has experienced homelessness in the past 3
            years:
          </p>
          <Form.Item
            name="numTimesHomeless"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber style={{ width: '20rem' }} disabled={disabled} />
          </Form.Item>
          <p>Total time spent homeless in the past 3 years</p>
          <Form.Item
            name="tottimeHomeless"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber style={{ width: '20rem' }} disabled={disabled} />
          </Form.Item>
          <p>Length of stay in previous living situation</p>
          <Form.Item
            name="lengthOfStayPrevY"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Years
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="lengthOfStayPrevM"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Months
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber
              disabled={disabled}
              style={disabled === true ? labelTextDis : labelText}
            />
          </Form.Item>

          <p>Does Client or family member have a disability</p>
          <Form.Item name="disability">
            <Radio.Group disabled={disabled}>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={true}
              >
                Yes
              </Radio>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
          <p>If yes, who has the disability and what is it?</p>
          <Form.Item name="disabilityText">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>
        </section>

        <section className="LengthTimeHomelessCase" style={formSecs}>
          <h4 style={labelText}>How long has the Client been homeless</h4>
          <Form.Item
            name="howLongA"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                a. Living in a place not meant for human habitation
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongB"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                b. Emergency Shelter
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongC"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                c. Traditional Housing
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongD"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                d. Fleeing Domestic Violence
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongE"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                e. Unsheltered
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongTotal"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Total
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>
        </section>

        <section className="CPSInvolvement" style={formSecs}>
          <h4 style={labelText}>CPS Involvement</h4>
          <Form.Item name="activeCase" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Active Case
            </Checkbox>
          </Form.Item>
          <Form.Item name="pastIncident" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Past Incident
            </Checkbox>
          </Form.Item>
          <Form.Item name="pastExplanation" label="">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>

          <Form.Item name="moreThanOnePastIncident" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Past Incident
            </Checkbox>
          </Form.Item>
          <Form.Item name="moreThanOneExplanation" label="">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>

          <Form.Item
            name="receiveSec8Vouch"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Received a Section 8 Housing Voucher in the past three years
              </label>
            }
          >
            <Radio.Group disabled={disabled}>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={true}
              >
                Yes
              </Radio>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="PreviousLivSitCase" style={grid}>
          <Form.Item
            name="prevLivSit"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Previous Living Situation
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="Description Here"
              style={inputs}
            />
          </Form.Item>

          <Form.Item
            name="interpreter"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Client needs interpreter?
              </label>
            }
            colon={false}
          >
            <Radio.Group disabled={disabled}>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={true}
              >
                Yes
              </Radio>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="transportationAcc"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Access to transportation?
              </label>
            }
            colon={false}
          >
            <Radio.Group disabled={disabled}>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={true}
              >
                Yes
              </Radio>
              <Radio
                style={disabled === true ? labelTextDis : labelText}
                value={false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="FamilyHistoryCase" style={formSecs}>
          <h4 style={labelText}>Client or family member have a history of:</h4>
          <Form.Item name="physIll" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Physical Illness
            </Checkbox>
          </Form.Item>
          <Form.Item name="mentalIll" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Mental Illness
            </Checkbox>
          </Form.Item>
          <Form.Item name="famConflictHist" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Family Conflict
            </Checkbox>
          </Form.Item>
          <Form.Item name="personalViol" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Personal Violence (being physically, sexually, verbally, or
              emotionally abused)
            </Checkbox>
          </Form.Item>
          <Form.Item name="subAbuse" valuePropName="checked">
            <Checkbox
              style={disabled === true ? labelTextDis : labelText}
              disabled={disabled}
            >
              Substance Abuse
            </Checkbox>
          </Form.Item>
        </section>

        <section className="SocialWorkerCase" style={socWork}>
          <h4 style={labelText}>Social Worker Contact Information</h4>
          <Form.Item
            name="socialWorkerName"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Name
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="Firstname Lastname"
              style={inputs}
            />
          </Form.Item>
          <Form.Item
            name="socialWorkerEmail"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Email
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="email@email.com"
              style={inputs}
            />
          </Form.Item>

          <Form.Item
            name="socialWorkerPhone"
            label={
              <label style={disabled === true ? labelTextDis : labelText}>
                Phone Number
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="(555) 555-5555"
              style={inputs}
            />
          </Form.Item>
        </section>
        <section className="CaseSubmit">
          <Button
            htmlType="submit"
            disabled={disabled}
            style={{
              margin: '1rem',
              color: '#CDCDCD',
              background: '#007FD4',
              borderColor: '#007FD4',
            }}
            type="primary"
          >
            Save Changes
          </Button>
          <Button
            onClick={disableFormItem}
            style={{
              margin: '1rem',
              color: '#CDCDCD',
              background: '#007FD4',
              borderColor: '#007FD4',
            }}
            type="primary"
          >
            Edit
          </Button>
        </section>
      </Form>
    </div>
  );
};
