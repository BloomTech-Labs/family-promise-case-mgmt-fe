import React from 'react';

const CaseDashboard = props => {
    console.log("props",props)
  return (
    <div>
      <h2>DASHBOARD</h2>
      <div>
        <p>Family Size: {props.familyData.familySize}</p>
        <p>Is Active: {props.familyData.active? "Yes" : "No"}</p>
        <p>Documents: <a href={props.familyData.documents} target="_blank" rel="noopener noreferrer">Docs</a></p>
        <p>Applications: <a href={props.familyData.applications} target="_blank" rel="noopener noreferrer">Applications</a></p>
      </div>
    </div>
  );
};

export default CaseDashboard;
