import React, { useState } from 'react';
// import data from './resourcesDataTemp';

const ResourcesTable = ({ setDetails }) => {
  const [resources, setResources] = useState([]);
  const handleDetails = details => {
    setDetails(details);
  };
  return (
    <table>
      <tr>
        <th>ORGANIZATION</th>
        <th>PHONE NUMBER</th>
        <th>RESOURCE TYPE</th>
        <th>QUALIFICATIONS</th>
        <th></th>
      </tr>
      {resources[0] ? (
        resources.map(resource => {
          return (
            <tr>
              <td>{resource.organization}</td>
              <td>{resource.phoneNumber}</td>
              <td>{resource.resourceType}</td>
              <td>{resource.qualifications ? 'yes' : 'no'}</td>
              <td>
                <button onClick={() => handleDetails(resource.details)}>
                  Details
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <p>Oops there are no Resources.</p>
      )}
    </table>
  );
};

export default ResourcesTable;
