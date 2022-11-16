import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Button,
  Checkbox,
  Divider,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddFamilyMember = () => {
  const [form] = Form.useForm();

  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">FAMILY MEMBERS</h2>

      <Form form={form} layout="inline">
        <div className="AddFamilyMember_Container">
          <h1 className="AddFamilyMember_h1">Family Member: Adult</h1>
        </div>
        <div>
          <section className="AddFamilyMember_SectionLeft">
            <div className="AddFamilyMember_TopSection">
              <div className="AddFamilyMember_InputSyling">
                <Form.Item
                  label="First Name::"
                  name="adultFirstname"
                  initialValue=""
                  className="AddFamilyMember_Label_Styles"
                >
                  <Input
                    placeholder="John"
                    className="AddFamilyMember_InputStyles"
                  />
                </Form.Item>
              </div>
              <Form.Item label="SSN::" name="adultSSN" initialValue="">
                <Input
                  placeholder="XXX-XX-XXXX"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="Race::" initialValue="">
                <Select
                  className="AddFamilyMember_InputStyles"
                  placeholder="-- Select --"
                >
                  <Select.Option value="American Indian or Alaska Native" />
                  <Select.Option value="Asian" />
                  <Select.Option value="Black or African American" />
                  <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                  <Select.Option value="White" />
                </Select>
              </Form.Item>
              <Form.Item label="Sexual Orientation::" initialValue="">
                <Select
                  className="AddFamilyMember_InputStyles"
                  placeholder="-- Select --"
                >
                  <Select.Option value="Asexual" />
                  <Select.Option value="Bisexual" />
                  <Select.Option value="Gay" />
                  <Select.Option value="Lesbian" />
                  <Select.Option value="Heterosexual/Straight" />
                  <Select.Option value="Pansexual" />
                  <Select.Option value="Queer" />
                  <Select.Option value="Preferred Not to Answer" />
                  <Select.Option value="Other" />
                </Select>
              </Form.Item>

              <Form.Item
                label="If Sexual Orientation Is Other::"
                name="adultOther"
                initialValue=""
              >
                <Input
                  placeholder="Other"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="Veteran?" name="isAdultVeteran" initialValue="">
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
          </section>
        </div>

        <div>
          <section className="AddFamilyMember_SectionRight">
            <div className="AddFamilyMember_TopSection">
              <Form.Item
                label="Last Name::"
                name="adultLastName"
                initialValue=""
              >
                <Input
                  placeholder="Doe"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="DOB::" name="adultDOB" initialValue="">
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>
              <Form.Item label="Gender::" initialValue="">
                <Select
                  placeholder="-- Select --"
                  className="AddFamilyMember_InputStyles"
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
                label="If Gender Is Self Describe::"
                name="adultSelfDescribe"
                initialValue=""
              >
                <Input
                  placeholder="Self Describe"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>

              <Form.Item
                label="Relation to HoH::"
                name="adultRealtionHoh"
                initialValue=""
              >
                <Input
                  placeholder="Relation"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>

              <Form.Item
                label="Pregnant?"
                name="isAdultPregnant"
                initialValue=""
              >
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                label="If yes, when is the due date?"
                name="adultDueDate"
                initialValue=""
              >
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>
            </div>
          </section>
        </div>
      </Form>

      {/* <span className="AddFamilyMember_Divider_Container">
        <Divider className="AddFamilyMember_Divider" />
      </span> */}

      <div className="AddFamilyMember_Divider_Container"></div>

      <Form form={form} className="AddFamilyMember__Form" layout="inline">
        <div className="AddFamilyMember_Container">
          <h1 className="AddFamilyMember_h1">Family Member: Child</h1>
        </div>
        <div>
          <section className="AddFamilyMember_SectionLeft">
            <div className="AddFamilyMember_BottomSection">
              <Form.Item
                label="First Name::"
                name="childFirstname"
                initialValue=""
              >
                <Input
                  placeholder="Jane"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="SSN::" name="childSSN" initialValue="">
                <Input
                  placeholder="XXX-XX-XXXX"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="Race::" initialValue="">
                <Select placeholder="-- Select --">
                  <Select.Option value="American Indian or Alaska Native" />
                  <Select.Option value="Asian" />
                  <Select.Option value="Black or African American" />
                  <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                  <Select.Option value="White" />
                </Select>
              </Form.Item>
              <Form.Item label="Sexual Orientation::">
                <Select
                  placeholder="-- Select --"
                  className="AddFamilyMember_InputStyles"
                >
                  <Select.Option value="Asexual" />
                  <Select.Option value="Bisexual" />
                  <Select.Option value="Gay" />
                  <Select.Option value="Lesbian" />
                  <Select.Option value="Heterosexual/Straight" />
                  <Select.Option value="Pansexual" />
                  <Select.Option value="Queer" />
                  <Select.Option value="Preferred Not to Answer" />
                  <Select.Option value="Other" />
                </Select>
              </Form.Item>
              <Form.Item
                label="If Sexual Orientation Is Other::"
                name="childOther"
                initialValue=""
              >
                <Input
                  placeholder="Other"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item
                label="Last School Attended::"
                name="childLastSchool"
                initialValue=""
              >
                <Input
                  placeholder="School Name"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
            </div>
          </section>
        </div>

        <div>
          <section className="AddFamilyMember_SectionRight">
            <div className="AddFamilyMember_BottomSection">
              <Form.Item
                label="Last Name::"
                name="adultLastName"
                initialValue=""
              >
                <Input
                  placeholder="Doe"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item label="DOB::" name="adultDOB" initialValue="">
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>
              <Form.Item label="Gender::" initialValue="">
                <Select
                  placeholder="-- Select --"
                  className="AddFamilyMember_InputStyles"
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
                label="If Gender Is Self Describe::"
                name="childSelfDescribe"
                initialValue=""
              >
                <Input
                  placeholder="Self Describe"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>

              <Form.Item
                label="Relation to HoH::"
                name="childRealtionHoh"
                initialValue=""
              >
                <Input
                  placeholder="Relation"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
              <Form.Item
                label="Current Or Last Completed Grade::"
                name="childGrade"
                initialValue=""
              >
                <Input
                  placeholder="Grade"
                  className="AddFamilyMember_InputStyles"
                />
              </Form.Item>
            </div>
          </section>
        </div>

        <Form.Item>
          <Button className="AddFamilyMember_Button" icon={<PlusOutlined />}>
            Add Family Member
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFamilyMember;