import React from 'react';

const CaseDashboard = ({familyData}) => {
  return (
    <div>
      <h2>DASHBOARD</h2>
      <div>
        <p>Family Size: {familyData.familySize}</p>
        <p>Is Active: {familyData.active? "Yes" : "No"}</p>
        <p>History: <a href={familyData.history} target="_blank" rel="noopener noreferrer">History</a></p>
        <p>Documents: <a href={familyData.documents} target="_blank" rel="noopener noreferrer">Docs</a></p>
        <p>Applications: <a href={familyData.applications} target="_blank" rel="noopener noreferrer">Applications</a></p>
      </div>
    </div>
  );
};

export default CaseDashboard;
