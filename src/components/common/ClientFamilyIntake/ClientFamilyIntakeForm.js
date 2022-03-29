// note: the very first section of this form, up to household clientInformation, was done by Steven Clair
import {
  DatePicker,
  Form,
  Input,
  Select,
  Radio,
  Divider,
  Checkbox,
  Button,
} from 'antd';

import React from 'react';

const ClientFamilyIntake = () => {
  const [form] = Form.useForm();

  const inputStyles = {
    width: '20rem',
  };

  const inputStylesShort = {
    width: '7rem',
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const sectionLeft = {
    margin: '20px',
  };

  const sectionRight = {
    margin: '20px',
  };

  const marginRight = {
    marginRight: '30px',
  };

  const shortInputContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 10px',
  };

  const spreadOut = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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

  const borderStyled = {
    width: '20rem',
    border: '1px solid black',
  };

  const centered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const { TextArea } = Input;

  const historyOptions = [
    { label: 'Physical Illness', value: 'physicalIllness' },
    { label: 'Mental Illness', value: 'mentalIllness' },
    { label: 'Personal Violence', value: 'personalViolence' },
    { label: 'Substance Dependence', value: 'substanceDependence' },
  ];

  const historyOptionsTwo = [
    { label: 'Physical Illness', value: 'physicalIllness' },
    { label: 'Mental Illness', value: 'mentalIllness' },
    { label: 'Family Conflict', value: 'familyConflict' },
    {
      label:
        'Personal Violence (Being Physically, Sexually, Verbally or Emotionally Abused)',
      value: 'personalViolence',
    },
    { label: 'Substance Abuse/Dependence', value: 'substanceDependence' },
  ];

  const financeHistoryOptions = [
    { label: 'Eviction', value: 'eviction' },
    { label: 'Landlord Debt', value: 'landlordDebt' },
    { label: 'Criminal History', value: 'criminalHistory' },
    { label: 'Poor Credit', value: 'poorCredit' },
    { label: 'No Rental History', value: 'noRentalHistory' },
  ];

  const circumstanceOptions = [
    { label: 'Fleeing Domestic Violence', value: 'fleeingDomesticViolence' },
    { label: 'Lack of Income', value: 'lackOfIncome' },
    { label: 'Family Conflict', value: 'familyConflict' },
    { label: 'Family Rejection/LGBTQ+ Issues', value: 'familyRejection' },
    { label: 'Lack of Affordable Housing', value: 'lackOfAffordableHousing' },
    { label: 'Eviction', value: 'eviction' },
    { label: 'Lost Job', value: 'lostJob' },
    { label: 'Other', value: 'other' },
  ];

  const cpsOptions = [
    { label: 'Active Case', value: 'activeCase' },
    { label: 'Past Incident', value: 'pastIncident' },
    { label: 'More Than One Past Incident', value: 'moreThanOnePastIncident' },
  ];

  const workOptions = [
    { label: 'Sales/Retail', value: 'salesRetail' },
    { label: 'Fast Food', value: 'fastFood' },
    { label: 'Hospitality', value: 'hospitality' },
    { label: 'Warehouse', value: 'warehouse' },
    { label: 'Truck Driving', value: 'truckDriving' },
  ];

  const incomeSourceOptions = [
    { label: 'TANF', value: 'TANF' },
    { label: 'SSI', value: 'SSI' },
    { label: 'SSDI', value: 'SSDI' },
    { label: 'Child Support', value: 'childSupport' },
  ];

  const documentsOptionsA = [
    {
      label:
        'Completed The HFCA (Homeless Families Coordinated Assessment) within the past 90 days',
      value: 'hfcaCompleted',
    },
    {
      label: "Valid Driver's License or State Identification Card",
      value: 'validID',
    },
    {
      label: 'A valid social security card for everyone in the household',
      value: 'validSocialSecurity',
    },
    {
      label: 'Signed up for benefits through DSHS (WIC, TANF, SNAP)',
      value: 'benefits',
    },
    {
      label: 'Completed the Responsible Renters Course',
      value: 'responsibleRentersCourseComplete',
    },
    {
      label: 'Birth Certificates for children in the household',
      value: 'childBirthCertificates',
    },
  ];

  const childrenOptions = [
    { label: 'Children Enrolled in School', value: 'childrenEnrolledSchool' },
    { label: 'Childcare', value: 'childcare' },
  ];

  const assistanceOptions = [
    { label: 'Food/Meal Assistance', value: 'foodAssistance' },
    { label: 'Clothing Assistance', value: 'clothingAssistance' },
    { label: 'Counseling Services', value: 'counselingServices' },
    { label: 'Addiction/Recovery Resources', value: 'addictionResources' },
    { label: 'Mentor Programs', value: 'mentorPrograms' },
    { label: 'Youth Services/Programming', value: 'youthServices' },
    { label: 'Budgeting', value: 'budgeting' },
  ];

  const textUpdateOptions = [
    { label: 'Employment Opportunities', value: 'employmentOpportunities' },
    { label: 'Apartment Listings', value: 'apartmentListings' },
    {
      label: 'Career fairs and job trainings/programs',
      value: 'careerServices',
    },
  ];

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Inital Intake Date" style={{ margin: '20px 110px' }}>
        <DatePicker format="MM/DD/YYYY" />
      </Form.Item>

      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Client/Family Information
      </h2>

      <Divider>Head of Household</Divider>
      <div className="hohContainer" style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Ethnicity">
            <Select style={inputStyles} placeholder="-- Select --">
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

          <Form.Item label="Sexual Orientation">
            <Select style={inputStyles} placeholder="-- Select --">
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

          <Form.Item label="If Other">
            <TextArea placeholder="Other" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Veteran?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Does Client have Documented Disabilities?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes what disablities?">
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB">
            <DatePicker format="MM/DD/YYYY" />
          </Form.Item>

          <Form.Item label="Race">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item label="Gender">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="Male" />
              <Select.Option value="Female" />
              <Select.Option value="Transgender Male" />
              <Select.Option value="Transgender Female" />
              <Select.Option value="Non-Binary" />
              <Select.Option value="Prefer to Self-Describe" />
            </Select>
          </Form.Item>

          <Form.Item label="Self-Describe">
            <TextArea placeholder="Self-Describe" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes, when is due date?">
            <DatePicker format={'MM-DD-YYYY'} />
          </Form.Item>

          <Form.Item label="Does Client have a history of:">
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>

      <Divider>Last Known Address</Divider>
      <div style={formStyles}>
        <container style={sectionLeft}>
          <Form.Item label="Address 1">
            <Input placeholder="123 Somewhere Rd." style={inputStyles} />
          </Form.Item>
          <Form.Item label="City">
            <Input placeholder="City Name" style={inputStyles} />
          </Form.Item>
        </container>

        <container style={sectionRight}>
          <Form.Item label="Address 2">
            <Input placeholder="Apt. #" style={inputStyles} />
          </Form.Item>

          <section style={shortInputContainer}>
            <Form.Item label="State">
              <Input placeholder="State Abbrv." style={inputStylesShort} />
            </Form.Item>

            <Form.Item label="Zip">
              <Input placeholder="Zip Code" style={inputStylesShort} />
            </Form.Item>
          </section>
        </container>
      </div>

      <Divider style={{ marginBottom: '50px' }}>Family Members</Divider>

      <h3 style={{ textAlign: 'center' }}>Adult</h3>
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Relation to HoH">
            <Input placeholder="Relation" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Race">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item label="Sexual Orientation">
            <Select style={inputStyles} placeholder="-- Select --">
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
          <Form.Item label="Other">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Veteran?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Does Family Member have Documented Disabilities?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes what disablities?">
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Ethnicity">
            <Select style={inputStyles} placeholder="-- Select --">
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

          <Form.Item label="Gender">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="Male" />
              <Select.Option value="Female" />
              <Select.Option value="Transgender Male" />
              <Select.Option value="Transgender Female" />
              <Select.Option value="Non-Binary" />
              <Select.Option value="Prefer to Self-Describe" />
            </Select>
          </Form.Item>
          <Form.Item label="Self-Describe:">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes, when are they due?">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Does Family Member have a history of:">
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>

      <h3 style={{ textAlign: 'center' }}>Child</h3>
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="First Name">
            <Input placeholder="First Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Relation to HoH">
            <Input placeholder="Relation" style={inputStyles} />
          </Form.Item>

          <Form.Item label="SSN">
            <Input placeholder="XXX-XX-XXXX" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Race">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="American Indian or Alaska Native" />
              <Select.Option value="Asian" />
              <Select.Option value="Black or African American" />
              <Select.Option value="Native Hawaiian or Other Pacific Islander" />
              <Select.Option value="White" />
            </Select>
          </Form.Item>

          <Form.Item label="Sexual Orientation">
            <Select style={inputStyles} placeholder="-- Select --">
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
          <Form.Item label="Other">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Last School Attended">
            <Input placeholder="School Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="Last Grade Completed">
            <Input placeholder="Grade #" style={inputStylesShort} />
          </Form.Item>

          <Form.Item label="Does Family Member have Documented Disabilities?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="If yes what disablities?">
            <TextArea placeholder="Describe Disabilities" style={inputStyles} />
          </Form.Item>
        </section>

        <section style={sectionRight}>
          <Form.Item label="Last Name">
            <Input placeholder="Last Name" style={inputStyles} />
          </Form.Item>

          <Form.Item label="DOB">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Ethnicity">
            <Select style={inputStyles} placeholder="-- Select --">
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

          <Form.Item label="Gender">
            <Select style={inputStyles} placeholder="-- Select --">
              <Select.Option value="Male" />
              <Select.Option value="Female" />
              <Select.Option value="Transgender Male" />
              <Select.Option value="Transgender Female" />
              <Select.Option value="Non-Binary" />
              <Select.Option value="Prefer to Self-Describe" />
            </Select>
          </Form.Item>
          <Form.Item label="Self-Describe:">
            <TextArea style={inputStyles} />
          </Form.Item>

          <Form.Item label="Pregnant?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="If yes, when is due date?">
            <DatePicker format="MM-DD-YYYY" />
          </Form.Item>

          <Form.Item label="Does Family Member have a history of:">
            <Checkbox.Group options={historyOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>
        Household Information
      </h2>

      <Divider />
      <div style={formStyles}>
        <container style={sectionLeft}>
          <Form.Item label="What Circumstances Brought Client to Open Doors?">
            <Checkbox.Group
              options={circumstanceOptions}
              style={checkboxStyles}
            />
          </Form.Item>
          <Form.Item label="If Other, Describe Here:">
            <TextArea
              placeholder="If Other, Describe Here"
              style={inputStyles}
            />
          </Form.Item>
          <Form.Item label="Previous Living Situation">
            <TextArea placeholder="Description Here" style={inputStyles} />
          </Form.Item>

          <p>Length of Stay in Previous Living Situation</p>
          <Form.Item label="Years">
            <Input placeholder="" style={inputStylesShort} />
          </Form.Item>
          <Form.Item label="Months">
            <Input placeholder="" style={inputStylesShort} />
          </Form.Item>
          <Form.Item label="Does Client or family member have a disability?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="If Yes, who has the disability and what is it?">
            <TextArea placeholder="Text Here" style={inputStyles} />
          </Form.Item>
          <Form.Item label="CPS Involvement">
            <Checkbox.Group options={cpsOptions} style={checkboxStyles} />
          </Form.Item>
          <Form.Item label="If Past Incident, Explain Here:">
            <TextArea
              placeholder="Explain Past Incident Here"
              style={inputStyles}
            />
          </Form.Item>
          <Form.Item label="If More Than One Past Incident, Explain Here:">
            <TextArea
              placeholder="If More Than One Past Incident, Explain Here"
              style={inputStyles}
            />
          </Form.Item>
          <Form.Item label="Received a Section 8 Housing Voucher in the Past Three Years">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
        </container>

        <container style={sectionRight}>
          <h4>How Long Has the Client Been Homeless?</h4>

          <Form.Item label="a. Living in a place not meant for human habitation">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="b. Emergency Shelter">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="c. Traditional Housing">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="d. Fleeing Domestic Violence">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="e. Unsheltered">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="Total">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="Number of times Client has experienced homelessness in the past 3 years">
            <Input placeholder="Enter number" style={inputStyles} />
          </Form.Item>
          <Form.Item label="Client Needs Interpreter?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Access to Transportation?">
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Client or family member have a history of:">
            <Checkbox.Group
              options={historyOptionsTwo}
              style={checkboxStyles}
            />
          </Form.Item>
          <h4>Social Worker Contact Information</h4>
          <Form.Item label="Name">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="Email">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
          <Form.Item label="Phone Number">
            <Input placeholder="" style={inputStyles} />
          </Form.Item>
        </container>
      </div>
      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Education</h2>

      <Divider />
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="Highest Grade / Degree Completed">
            <Radio.Group style={radioStyles}>
              <Radio value={'gradeSchool'}>Grade School</Radio>
              <Radio value={'highSchool'}>High School/GED</Radio>
              <Radio value={'associateDegree'}>Associate Degree</Radio>
              <Radio value={'undergradDegree'}>Undergrad Degree</Radio>
              <Radio value={'gradPostgraduateDegree'}>
                Grad/Postgraduate Degree
              </Radio>
            </Radio.Group>
          </Form.Item>
        </section>
      </div>
      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Employment</h2>

      <Divider />
      <div style={formStyles}>
        <section style={sectionLeft}>
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
        <section style={sectionRight}>
          <Form.Item label="Interested in working in:">
            <Checkbox.Group options={workOptions} style={checkboxStyles} />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Finances</h2>

      <Divider />
      <div style={formStyles}>
        <section style={sectionLeft}>
          <Form.Item label="Family have history of:">
            <Checkbox.Group
              options={financeHistoryOptions}
              style={checkboxStyles}
            />
          </Form.Item>

          <Form.Item label="Types of Debt:">
            <Checkbox
              value="studentLoan"
              style={{
                lineHeight: '32px',
              }}
            >
              Student Loan
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="creditCard"
              style={{
                lineHeight: '32px',
              }}
            >
              Credit Card
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="medicalBills"
              style={{
                lineHeight: '32px',
              }}
            >
              Medical Bills
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
            <Checkbox
              value="autoLoan"
              style={{
                lineHeight: '32px',
              }}
            >
              Auto Loan
            </Checkbox>
            <Form.Item label="Amount">
              <Input placeholder="$0" style={inputStyles} />
            </Form.Item>
          </Form.Item>
        </section>
        <section style={sectionRight}>
          <Form.Item label="Source of Income:">
            <Checkbox.Group
              options={incomeSourceOptions}
              style={checkboxStyles}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Insurance</h2>

      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Medicare" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Medicare #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Medicaid" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Medicaid #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
          <Form.Item label="Expiration Date:" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Private Insurance" style={marginRight}>
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Insurance Company" style={marginRight}>
            <Input placeholder="Company Name" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Group #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Subscriber #:" style={marginRight}>
            <Input placeholder="XXXXXXXXXXX" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Effective Date:" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Expiration Date:" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Employer Occupation:" style={marginRight}>
            <Input
              placeholder="Employer Occupation Description Here"
              style={borderStyled}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <div style={formStyles}>
        <Form.Item label="Other Coverage (Explain)" style={marginRight}>
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </div>
      <Divider />
      <div style={formStyles}>
        <Form.Item
          label="Client or Family working with other agencies?"
          style={marginRight}
        >
          <Radio.Group>
            <Radio value={true}>Yes</Radio>
            <Radio value={false}>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="If Yes, what other agencies?" style={marginRight}>
          <TextArea placeholder="Text Here" style={borderStyled} />
        </Form.Item>
      </div>

      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Documents</h2>

      <Divider />
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Adults in family have:" style={marginRight}>
            <Checkbox.Group
              options={documentsOptionsA}
              style={checkboxStyles}
            />
          </Form.Item>
          <Form.Item label="(If Applicable)" style={marginRight}>
            <Checkbox.Group options={childrenOptions} style={checkboxStyles} />
          </Form.Item>
          <Form.Item
            label="Would you like to receive information about:"
            style={marginRight}
          >
            <Checkbox.Group
              options={assistanceOptions}
              style={checkboxStyles}
            />
          </Form.Item>
          <Form.Item
            label="Would you like to receive text updates about:"
            style={marginRight}
          >
            <Checkbox.Group
              options={textUpdateOptions}
              style={checkboxStyles}
            />
          </Form.Item>
        </section>
      </div>
      <Divider />
      <h3>Referrals:</h3>

      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Name:" style={marginRight}>
            <Input placeholder="John Doe" style={borderStyled} />
          </Form.Item>
          <Form.Item label="First Meeting" style={marginRight}>
            <DatePicker
              format="MM/DD/YYYY"
              style={{ border: '1px solid black' }}
            />
          </Form.Item>
          <Form.Item label="Address(If Available):" style={marginRight}>
            <Input placeholder="123 Anywhere Street" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Apt. #:" style={marginRight}>
            <Input placeholder="Apt #" style={borderStyled} />
          </Form.Item>
          <Form.Item label="City:" style={marginRight}>
            <Input placeholder="City Name" style={borderStyled} />
          </Form.Item>
          <Form.Item label="State:" style={marginRight}>
            <Input placeholder="State Abbrv." style={borderStyled} />
          </Form.Item>
          <Form.Item label="Zip:" style={marginRight}>
            <Input placeholder="Zip Code" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Email:" style={marginRight}>
            <Input placeholder="user@email.com" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Cell:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Work:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Home:" style={marginRight}>
            <Input placeholder="555-555-5555" style={borderStyled} />
          </Form.Item>
        </section>

        <button style={borderStyled}>
          Add Referral Button (THIS NEEDS TO BE FIXED)
        </button>
      </div>

      <Divider />
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>
        Barriers, Goals, and Strengths
      </h2>

      <Divider />
      <h3>Goals:</h3>
      <div style={formStyles}>
        <section style={spreadOut}>
          <Form.Item label="Area:" style={marginRight}>
            <Input placeholder="Housing" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Target Date" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Steps:" style={marginRight}>
            <TextArea placeholder="Enter steps here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="CM Task" style={marginRight}>
            <Input placeholder="Task Here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Date Achieved:" style={marginRight}>
            <DatePicker format="MM/DD/YYYY" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Notes" style={marginRight}>
            <TextArea placeholder="Notes" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Client Strengths:" style={marginRight}>
            <TextArea placeholder="Text Here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Client Barriers:" style={marginRight}>
            <TextArea placeholder="Text Here" style={borderStyled} />
          </Form.Item>
          <Form.Item label="Progress Summary:" style={marginRight}>
            <TextArea placeholder="Text Here" style={borderStyled} />
          </Form.Item>
        </section>
        <button style={borderStyled}>+ Goal (THIS NEEDS TO BE FIXED)</button>
      </div>
      <div style={centered}>
        <Button type="primary">Submit Form</Button>
      </div>
    </Form>
  );
};

export default ClientFamilyIntake;
