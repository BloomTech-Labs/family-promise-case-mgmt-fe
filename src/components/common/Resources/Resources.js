import React, { useState } from 'react';
import ResourcesTable from './ResourcesTable';
import DetailsView from './DetailsView';

const Resources = () => {
  const [details, setDetails] = useState('');
  console.log(details);
  return (
    <div className="Resources">
      <div className="Resources__LeftSide">
        <h2>Resources</h2>
        <ResourcesTable setDetails={setDetails} />
        <button>Add Resource</button>
      </div>
      <div className="Resources__RightSide">
        <h2>Details View</h2>
        <DetailsView details={details} />
      </div>
    </div>
  );
};

export default Resources;
