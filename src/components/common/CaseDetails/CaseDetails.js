import React, { useState } from 'react';
import {
  Button,
  Card,
  Collapse,
  Form,
  Input,
  Space,
  DatePicker,
  Select,
  Radio,
  Checkbox,
} from 'antd';

import '../../../styles/css/styles.css';

const { Option } = Select;
const { Panel } = Collapse;

const CaseDetails = () => {
  //State and onChange for radio buttons
  const [radioValue, setRadioValue] = useState(0);

  const onChange = event => {
    console.log(event.target.radioValue);
    setRadioValue(event.target.radioValue);
  };

  return (
    <div className="CaseDetails">
      <div className="CaseDetails__LeftSide">
        <div className="CaseDetails__LeftSideHead">
          <h2>Single Case View</h2>
          <Button type="default">ALL CASES</Button>
        </div>
        <div className="CaseDetails__LeftSideBtnsContainer">
          <Card className="CaseDetails__Leftside__OverviewHead">
            <div className="Leftside__overviewSection1">HOH: Name here</div>
            <div className="Leftside__overviewSection2">Name: Name here</div>
            <div className="Leftside__overviewSection3">
              Contact: cont. info
            </div>
          </Card>
          <Collapse accordion>
            <Panel header="Head of Household" key="1">
              <Form name="basic">
                <Form.Item label="First Name" name="First Name">
                  <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="Last Name">
                  <Input />
                </Form.Item>
                <Form.Item label="SSN" name="SSN">
                  <Input />
                </Form.Item>
                <Form.Item label="DOB" name="DOB">
                  <Space direction="vertical">
                    <DatePicker />
                  </Space>
                </Form.Item>
                <Form.Item label="Ethnicity" name="Ethnicity">
                  <Select>
                    <Option value="AmericanIndianorAlaskaNative">
                      American Indian or Alaska Native
                    </Option>
                    <Option value="Asian">Asian</Option>
                    <Option value="BlackorAfricanAmerican">
                      Black or African American
                    </Option>
                    <Option value="NativeHawaiian">
                      Native Hawaiian or other Pacific Islander
                    </Option>
                    <Option value="White">White or Caucasion</Option>
                    <Option value="Hispanic">
                      Hispanic or Latino or Spanish Origin
                    </Option>
                    <Option value="Alien">
                      Non-Resident Alien (of any race or ethnicity)
                    </Option>
                    <Option value="multiracial">Multiracial or Biracial</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Race" name="Race">
                  <Select>
                    <Option value="AmericanIndian/AlaskaNative">
                      American Indian or Alaska Native
                    </Option>
                    <Option value="Asian">Asian</Option>
                    <Option value="BlackorAfricanAmerican">
                      Black or African American
                    </Option>
                    <Option value="NativeHawaiian">
                      Native Hawaiian or other Pacific Islander
                    </Option>
                    <Option value="White">White or Caucasion</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Sexual Orientation" name="SexualOrientation">
                  <Select>
                    <Option value="Asexual">Asexual</Option>
                    <Option value="Bisexual">Bisexual</Option>
                    <Option value="Gay">Gay</Option>
                    <Option value="Lesbian">Lesbian</Option>
                    <Option value="Heterosexual/Straight">
                      Heterosexual/Straight
                    </Option>
                    <Option value="Pansexual">Pansexual</Option>
                    <Option value="Queer">Queer</Option>
                    <Option value="Preferred Not to Answer">
                      Preferred Not to Answer
                    </Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Gender" name="Gender">
                  <Select>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Transgender Male">Transgender Male</Option>
                    <Option value="Transgender Female">
                      Transgender Female
                    </Option>
                    <Option value="Non-Binary">Non-Binary</Option>
                    <Option value="Prefer to Self-Describe">
                      Prefer to Self-Describe
                    </Option>
                  </Select>
                </Form.Item>
                <Form.Item label="If Other" name="IfOther">
                  <Input />
                </Form.Item>
                <Form.Item label="Self-Describe" name="Self-Describe">
                  <Input />
                </Form.Item>
                <Form.Item label="Veteran?" name="Veteran">
                  <Radio.Group onChange={onChange} value={radioValue}>
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  label="Does Client have Documented Disabilities?"
                  name="CDD"
                >
                  <Radio.Group>
                    <Radio value={1}>Yes</Radio>
                    <Radio value={2}>No</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="If yes what disabilities?">
                  <Input />
                </Form.Item>
                <Form.Item></Form.Item>
              </Form>
            </Panel>
            <Panel header="Family Members" key="2">
              <p>I DID IT</p>
            </Panel>
            <Panel header="Family Size" key="3">
              <p>I DID IT</p>
            </Panel>
            <Panel header="Education Status" key="4">
              <p>I DID IT</p>
            </Panel>
            <Panel header="Prior History of Homelessness" key="5">
              <p>I DID IT</p>
            </Panel>
            <Panel header="Employment" key="6">
              <p>I DID IT</p>
            </Panel>
          </Collapse>

          {/* <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Head of Household</span>
            <span>HoH name here</span>
            <Button type="ghost">Update</Button>
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Family Members</span>
            <span>Closest member here</span>
            <Button type="ghost">Update</Button>
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Family Size</span>
            <span>Number here</span>
            <Button type="ghost">Update</Button>
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Education Status</span>
            <span>Highest EDU completed</span>
            <Button type="ghost">Update</Button>
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Prior History of Homelessness</span>
            <span>History here</span>
            <Button type="ghost">Update</Button>
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            <span>Employment Status</span>
            <span>Status here</span>
            <Button type="ghost">Update</Button>
          </Button> */}
        </div>
      </div>
      <div className="CaseDetails__RightSide"></div>
    </div>
  );
};

export default CaseDetails;
