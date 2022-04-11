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
  const [disabled, setDisabled] = useState(true);

  const onFinish = values => {
    const updatedHousehold = values;
    console.log(updatedHousehold);
    setDisabled(!disabled);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const disableFormItem = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="HouseholdInformationDetails__Container">
      <Form
        form={form}
        className="HouseholdInformationDetails__Form"
        name="householdCaseView"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={initialFormValues}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 100 }}
        layout="horizontal"
        labelWrap
      >
        <section className="HouseholdInformationDetails__Form__Circumstances">
          <h4 className="HouseholdInformationDetails__Form__h4">
            What Circumstances Brought Client to Open Doors?
          </h4>
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

          <Form.Item
            name="otherText"
            label=""
            className="HouseholdInformationDetails__Form__Inputs"
          >
            <Input disabled={disabled} />
          </Form.Item>

          <p className="HouseholdInformationDetails__Form__p">
            Number of times Client has experienced homelessness in the past 3
            years
          </p>
          <Form.Item
            name="numTimesHomeless"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber style={{ width: '20rem' }} disabled={disabled} />
          </Form.Item>
          <p className="HouseholdInformationDetails__Form__p">
            Total time spent homeless in the past 3 years
          </p>
          <Form.Item
            name="totTimeHomeless"
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber style={{ width: '20rem' }} disabled={disabled} />
          </Form.Item>
          <p className="HouseholdInformationDetails__Form__p">
            Length of stay in previous living situation
          </p>
          <Form.Item
            name="lengthOfStayPrevY"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Months
              </label>
            }
            colon={false}
            rules={[{ type: 'number', message: 'Number Required' }]}
            placeholder={0}
          >
            <InputNumber disabled={disabled} />
          </Form.Item>

          <p className="HouseholdInformationDetails__Form__p">
            Does Client or family member have a disability
          </p>
          <Form.Item name="disability">
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <p className="HouseholdInformationDetails__Form__p">
            If yes, who has the disability and what is it?
          </p>
          <Form.Item name="disabiltyText" label="">
            <Input
              disabled={disabled}
              placeholder="Text Here"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>
        </section>

        <section className="LengthTimeHomelessCase">
          <h4 className="HouseholdInformationDetails__Form__h4">
            How long has the Client been homeless
          </h4>
          <Form.Item
            name="howLongA"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
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

        <section className="CPSInvolvement">
          <h4 className="HouseholdInformationDetails__Form__h4">
            CPS Involvement
          </h4>
          <Form.Item name="activeCase" valuePropName="checked">
            <Checkbox disabled={disabled}>Active Case</Checkbox>
          </Form.Item>
          <Form.Item name="pastIncident" valuePropName="checked">
            <Checkbox disabled={disabled}>Past Incident</Checkbox>
          </Form.Item>
          <Form.Item name="pastExplanation" label="">
            <Input
              disabled={disabled}
              placeholder="Text Here"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>

          <Form.Item name="moreThanOnePastIncident" valuePropName="checked">
            <Checkbox disabled={disabled}>Past Incident</Checkbox>
          </Form.Item>
          <Form.Item name="moreThanOneExplanation" label="">
            <Input
              disabled={disabled}
              placeholder="Text Here"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>

          <Form.Item
            name="receiveSec8Vouch"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Received a Section 8 Housing Voucher in the past three years
              </label>
            }
          >
            <Radio.Group disabled={disabled}>
              <Radio
                className={
                  disabled === true
                    ? 'ant-radio-disabled + span'
                    : 'ant-radio-wrapper'
                }
                value={true}
              >
                Yes
              </Radio>
              <Radio
                className={
                  disabled === true
                    ? 'ant-radio-disabled + span'
                    : 'ant-radio-wrapper'
                }
                value={false}
              >
                No
              </Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="HouseholdInformationDetails__Form__PrevLivSit">
          <Form.Item
            name="prevLivSit"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Previous Living Situation
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="Description Here"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>

          <Form.Item
            name="interpreter"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Client needs interpreter?
              </label>
            }
            colon={false}
          >
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="transportationAcc"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Access to transportation?
              </label>
            }
            colon={false}
          >
            <Radio.Group disabled={disabled}>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </section>

        <section className="FamilyHistoryCase">
          <h4 className="HouseholdInformationDetails__Form__h4">
            Client or family member have a history of:
          </h4>
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

        <section className="HouseholdInformationDetails__Form__SocialWorker">
          <h4 className="HouseholdInformationDetails__Form__h4">
            Social Worker Contact Information
          </h4>
          <Form.Item
            name="socialWorkerName"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Name
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="Firstname Lastname"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>
          <Form.Item
            name="socialWorkerEmail"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Email
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="email@email.com"
              className="HouseholdInformationDetails__Form__Inputs"
            />
          </Form.Item>

          <Form.Item
            name="socialWorkerPhone"
            label={
              <label
                className={
                  disabled === true
                    ? 'CaseDetailsLabel__Disabled'
                    : 'CaseDetailsLabel'
                }
              >
                Phone Number
              </label>
            }
            colon={false}
          >
            <Input
              disabled={disabled}
              placeholder="(555) 555-5555"
              className="HouseholdInformationDetails__Form__Inputs"
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
