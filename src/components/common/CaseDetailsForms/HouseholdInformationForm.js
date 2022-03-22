import { Form, Checkbox, Input, InputNumber, Radio, Button } from 'antd';
import React, { useState } from 'react';
import FormButton from '../FormButton';

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
  receiveSec8Vouch: false,
  howLongA: 0,
  howLongB: 0,
  howLongC: 0,
  howLongD: 0,
  howLongE: 0,
  howLongTotal: 0,
  prevLivSit: 'Description Here',
  interpreter: false,
  transportationAcc: false,
  physIll: false,
  mentalIll: false,
  famConflictHist: false,
  personalViol: false,
  subAbuse: false,
  socialWorkerName: 'Firstname Lastname',
  socialWorkerEmail: 'email here',
  socialWorkerPhone: '(###) ###-####',
};

export const HouseholdInformationForm = props => {
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState(true);

  const onFinish = values => {
    const updatedHousehold = values;
    console.log(updatedHousehold);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const style = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '5px',
    // gridAutoRows: 'minmax(100px, auto)',
    // gridAutoRows: 'min-content',
    gridAutoFlow: 'row dense',
    paddingTop: '2rem',
    width: '80%',
    padding: '2rem',
    margin: '0 20rem ',
    background: '#3f3f3f',
  };

  const grid = {
    gridRow: '2',
    gridColumn: '2',
  };

  const socWork = {
    //   gridRow: '2',
    gridColumn: '2',
  };

  const sec1 = {
    gridRow: '1 / span 2',
  };

  const formSecs = {
    // width: '40%',
    // margin: 'auto',
  };

  const inputs = {
    width: '20rem',
  };

  const disableFormItem = () => {
    console.log(disabled);
    setDisabled(!disabled);
  };

  return (
    <div className="HouseholdCase" disabled>
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
          <h4>What Circumstances Brought Client to Open Doors?</h4>
          <Form.Item name="fleeingDomV" valuePropName="checked">
            <Checkbox disabled={disabled}>Fleeing Domestic Violence</Checkbox>
          </Form.Item>

          <Form.Item name="lackOfIncome" valuePropName="checked">
            <Checkbox disabled={disabled}>Lack of Income</Checkbox>
          </Form.Item>

          <Form.Item name="lostJob" valuePropName="checked">
            <Checkbox disabled={disabled}>Lost Job</Checkbox>
          </Form.Item>

          <Form.Item name="familyConflict" valuePropName="checked">
            <Checkbox disabled={disabled}>Family Conflict</Checkbox>
          </Form.Item>

          <Form.Item name="familyRej" valuePropName="checked">
            <Checkbox disabled={disabled}>
              Family Rejection/LGBTQ+ Issue
            </Checkbox>
          </Form.Item>

          <Form.Item name="lackOfAffHous" valuePropName="checked">
            <Checkbox disabled={disabled}>Lack of Affordable Housing</Checkbox>
          </Form.Item>

          <Form.Item name="eviction" valuePropName="checked">
            <Checkbox disabled={disabled}>Eviction</Checkbox>
          </Form.Item>

          <Form.Item name="other" valuePropName="checked">
            <Checkbox disabled={disabled}>Other</Checkbox>
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
            label="Years"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="lengthOfStayPrevM"
            label="Months"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <p>Does Client or family member have a disability</p>
          <Form.Item name="disability">
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <p>If yes, who has the disability and what is it?</p>
          <Form.Item name="disabilityText">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>
        </section>

        <section className="LengthTimeHomelessCase" style={formSecs}>
          <h4>How long has the Client been homeless</h4>
          <Form.Item
            name="howLongA"
            label="a. Living in a place not meant for human habitation"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongB"
            label="b. Emergency Shelter"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongC"
            label="c. Traditional Housing"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongD"
            label="d. Fleeing domestic violence"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongE"
            label="e. Unsheltered"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <Form.Item
            name="howLongTotal"
            label="Total"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>
        </section>

        <section className="CPSInvolvement" style={formSecs}>
          <h4>CPS Involvement</h4>
          <Form.Item name="activeCase" valuePropName="checked">
            <Checkbox disabled={disabled}>Active Case</Checkbox>
          </Form.Item>
          <Form.Item name="pastIncident" valuePropName="checked">
            <Checkbox disabled={disabled}>Past Incident</Checkbox>
          </Form.Item>
          <Form.Item name="pastExplanation" label="">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>

          <Form.Item name="moreThanOnePastIncident" valuePropName="checked">
            <Checkbox disabled={disabled}>Past Incident</Checkbox>
          </Form.Item>
          <Form.Item name="moreThanONeExplanation" label="">
            <Input disabled={disabled} placeholder="Text Here" style={inputs} />
          </Form.Item>

          <Form.Item
            name="receiveSec8Vouch"
            label="Received a Section 8 Housing Voucher in the past three years"
          >
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="PreviousLivSitCase" style={grid}>
          <Form.Item name="prevLivSit" label="Previous Living Situation">
            <Input
              disabled={disabled}
              placeholder="Description Here"
              style={inputs}
            />
          </Form.Item>

          <Form.Item name="interpreter" label="Client needs interpreter?">
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="transportationAcc" label="Access to transportation?">
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="FamilyHistoryCase" style={formSecs}>
          <h4>Client or family member have a history of:</h4>
          <Form.Item name="physIll" valuePropName="checked">
            <Checkbox disabled={disabled}>Physical Illness</Checkbox>
          </Form.Item>
          <Form.Item name="mentalIll" valuePropName="checked">
            <Checkbox disabled={disabled}>Mental Illness</Checkbox>
          </Form.Item>
          <Form.Item name="famConflictHist" valuePropName="checked">
            <Checkbox disabled={disabled}>Family Conflict</Checkbox>
          </Form.Item>
          <Form.Item name="personalViol" valuePropName="checked">
            <Checkbox disabled={disabled}>
              Personal Violence (being physically, sexually, verbally, or
              emotionally abused)
            </Checkbox>
          </Form.Item>
          <Form.Item name="subAbuse" valuePropName="checked">
            <Checkbox disabled={disabled}>Substance Abuse</Checkbox>
          </Form.Item>
        </section>

        <section className="SocialWorkerCase" style={socWork}>
          <h4>Social Worker Contact Information</h4>
          <Form.Item name="socialWorkerName" label="Name">
            <Input
              disabled={disabled}
              placeholder="Firstname Lastname"
              style={inputs}
            />
          </Form.Item>
          <Form.Item name="socialWorkerEmail" label="Email">
            <Input
              disabled={disabled}
              placeholder="email@email.com"
              style={inputs}
            />
          </Form.Item>
          <Form.Item name="socialWorkerName" label="Name">
            <Input
              disabled={disabled}
              placeholder="Firstname Lastname"
              style={inputs}
            />
          </Form.Item>
          <Form.Item name="socialWorkerPhone" label="Phone Number">
            <Input
              disabled={disabled}
              placeholder="(###) ###-####"
              style={inputs}
            />
          </Form.Item>
        </section>
        <section className="CaseSubmit">
          <Button>Save Changes</Button>
          <Button onClick={disableFormItem}>Edit</Button>
        </section>
      </Form>
    </div>
  );
};
