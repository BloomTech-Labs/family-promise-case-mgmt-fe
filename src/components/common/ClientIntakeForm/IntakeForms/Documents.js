import React from 'react';
import { Checkbox, Form } from 'antd';

const Documents = () => {
  const subsectionHeader = {
    textAlign: 'center',
    marginBottom: '50px',
    backgroundColor: '#706f6f',
    padding: '20px',
  };

  const marginRight = {
    marginRight: '30px',
  };

  const formStyles = {
    display: 'flex',
    justifyContent: 'center',
  };

  const checkboxStyles = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  };

  const spreadOut = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  };

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
    <div>
      <h2 style={subsectionHeader}>Documents</h2>

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
    </div>
  );
};

export default Documents;
