import React from 'react';
import CaseDashboard from './Dashboard';
import FamilyMembersTable from './FamilyTable';

const CaseViewPage = () => {
  const family = {
    householdId: 123456789,
    active: true,
    familySize: 4,
    history: "https://www.google.com", 
    documents: "https://www.google.com", 
    applications: "https://www.google.com", 
    headOfHousehold: {
      firstname: 'John',
      lastname: 'Smith',
      gender: 'male',
      veteran: 'no',
      dateOfBirth: '9-7-1974',
    },
    familyMembers: [
      {
            id: '1',
            firstname: 'John',
            lastname: 'Brown',
            birthDate: '12-5-1498',
            gender: 'Male',
            relationshipToGuardian: "Guardian",
            ssn: '123-45-678',
            veteran: "No",
            education: "Some High School",
            employment: "Employed"
          },
          {
            id: '2',
            firstname: 'Jim', 
            lastname: 'Green',
            birthDate: '5-3-8965',
            gender: 'Male',
            relationshipToGuardian: "Son",
            ssn: '123-45-678',
            veteran: "No",
            education: "Elementary",
            employment: "Student"
          },
          {
            id: '3',
            firstname: 'Jen', 
            lastname: 'Black',
            birthDate: '11-5-7894',
            gender: 'Female',
            relationshipToGuardian: "Wife",
            ssn: '123-45-678',
            veteran: "No",
            education: "High School",
            employment: "Employed"
          },
          {
            id: '4',
            firstname: 'Jim', 
            lastname: 'Red',
            birthDate: '63-75-4826',
            gender: 'Male',
            relationshipToGuardian: "Father",
            ssn: '123-45-678',
            veteran: "No",
            education: "Some High School",
            employment: "Retired"
            },
    ],
  };

  return (
    <div>
      <h1>
        {family.headOfHousehold.firstname}
        {family.headOfHousehold.lastname}'s family (household ID:{' '}
        {family.householdId})
      </h1>
      <CaseDashboard familyData ={family}/>
      <FamilyMembersTable familyData ={family}/>
    </div>
  );
};

export default CaseViewPage;
