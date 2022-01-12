import React from 'react';
import CaseDashboard from './Dashboard';
import FamilyMembersTable from './FamilyTable';

const CaseViewPage = () => {
  const family = {
    householdId: 123456789,
    active: true,
    returning: false,
    familySize: 5,
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
        relationship: 'Wife',
        firstname: 'Christina',
        lastname: 'White',
        gender: 'female',
        veteran: 'no',
        dateOfBirth: '12-2-1986',
      },
      {
        relationship: 'Son',
        firstname: 'Adam',
        lastname: 'Smith',
        gender: 'male',
        veteran: 'no',
        dateOfBirth: '12-2-2009',
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
      <FamilyMembersTable />
    </div>
  );
};

export default CaseViewPage;
