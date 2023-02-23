import React, { useState } from 'react';

const ResourcesTable = () => {
  const [resources, setResources] = useState([]);
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
                <button>Details</button>
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
