import React from 'react';
import ResourcesTable from './ResourcesTable';

const Resources = () => {
  return (
    <div className="Resources">
      <div className="Resources__LeftSide">
        <h2>Resources</h2>
        <ResourcesTable />
        <button>Add Resource</button>
      </div>
      <div className="Resources__RightSide">
        <h2>Details View</h2>
      </div>
    </div>
  );
};

export default Resources;
