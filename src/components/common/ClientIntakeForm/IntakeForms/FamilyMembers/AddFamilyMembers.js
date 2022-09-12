import React from 'react';
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Checkbox,
  Divider,
} from 'antd';

const AddFamilyMembers = () => {
  const [form] = Form.useForm();

  return (
    <div className="subsectionContainer">
      <h2 className="subsectionHeader">FAMILY MEMBERS</h2>

      <Form form={form} layout="inline">
        <div className="family-member-container">
          <h1 className="family-member">Family Member: Adult</h1>
        </div>
        <div>
          <section className="section-left">
            <div className="top-section-container">
              <Form.Item
                label="First Name::"
                name="adultFirstname"
                initialValue=""
              >
                <Input placeholder="John" />
              </Form.Item>
              <Form.Item label="SSN::" name="adultSSN" initialValue="">
                <Input placeholder="XXX-XX-XXXX" />
              </Form.Item>

              <Form.Item label="Race: " name="adultRace" initialValue="">
                <Select placeholder="-- Select --">
                  <Select.Option value="American Indian or Alaska Native" />
                  <Select.Option value="Asian" />
                  <Select.Option value="Black or African American" />
                  <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                  <Select.Option value="White" />
                </Select>
              </Form.Item>

              <Form.Item
                label="Sexual Orientation::"
                name="adultOrientation"
                initialValue=""
              >
                <Select placeholder="-- Select --">
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
                <Input placeholder="Other" />
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
          <section className="section-right">
            <div className="top-section-container">
              <Form.Item
                label="Last Name::"
                name="adultLastName"
                initialValue=""
              >
                <Input placeholder="Doe" />
              </Form.Item>
              <Form.Item label="DOB::" name="adultDOB" initialValue="">
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>

              <Form.Item label="Gender::" name="adultGender" initialValue="">
                <Select placeholder="-- Select --">
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
                <Input placeholder="Self Describe" />
              </Form.Item>

              <Form.Item
                label="Relation to HoH::"
                name="adultRealtionHoh"
                initialValue=""
              >
                <Input placeholder="Relation" />
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

      <Divider></Divider>

      <div className="child-container"> </div>
      <Form form={form} className="AddFamilyMember__Form" layout="inline">
        <div className="family-member-container">
          <h1 className="family-member">Family Member: Child</h1>
        </div>
        <div>
          <section className="section-left">
            <div className="bottom-section-container">
              <Form.Item
                label="First Name::"
                name="childFirstname"
                initialValue=""
              >
                <Input placeholder="Jane" />
              </Form.Item>
              <Form.Item label="SSN::" name="childSSN" initialValue="">
                <Input placeholder="XXX-XX-XXXX" />
              </Form.Item>
              <Form.Item label="Race: " name="childRace" initialValue="">
                <Select placeholder="-- Select --">
                  <Select.Option value="American Indian or Alaska Native" />
                  <Select.Option value="Asian" />
                  <Select.Option value="Black or African American" />
                  <Select.Option value="Native Hawaiian or Other Pacific Islander" />
                  <Select.Option value="White" />
                </Select>
              </Form.Item>

              <Form.Item
                label="Sexual Orientation::"
                name="childOrientation"
                initialValue=""
              >
                <Select placeholder="-- Select --">
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
                <Input placeholder="Other" />
              </Form.Item>
              <Form.Item
                label="Last School Attended::"
                name="childLastSchool"
                initialValue=""
              >
                <Input placeholder="School Name" />
              </Form.Item>
            </div>
          </section>
        </div>

        <div>
          <section className="section-right">
            <div className="bottom-section-container">
              <Form.Item
                label="Last Name::"
                name="adultLastName"
                initialValue=""
              >
                <Input placeholder="Doe" />
              </Form.Item>
              <Form.Item label="DOB::" name="adultDOB" initialValue="">
                <DatePicker format="MM-DD-YYYY" />
              </Form.Item>
              <Form.Item label="Gender::" name="childGender" initialValue="">
                <Select placeholder="-- Select --">
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
                <Input placeholder="Self Describe" />
              </Form.Item>

              <Form.Item
                label="Relation to HoH::"
                name="childRealtionHoh"
                initialValue=""
              >
                <Input placeholder="Relation" />
              </Form.Item>
              <Form.Item
                label="Current Or Last Completed Grade::"
                name="childGrade"
                initialValue=""
              >
                <Input placeholder="Grade" />
              </Form.Item>
            </div>
          </section>
        </div>
      </Form>
    </div>
  );
};

export default AddFamilyMembers;
