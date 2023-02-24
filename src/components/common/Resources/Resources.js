import React, { useState } from 'react';
import ResourcesTable from './ResourcesTable';
import DetailsView from './DetailsView';

const Resources = () => {
  const [details, setDetails] = useState('');
  console.log(details);
  return (
    <div className="Resources">
      <div className="Resources__LeftSide">
        <h2 className="Resources__Title">Resources</h2>
        <ResourcesTable setDetails={setDetails} />
        <button className="Resources__Button">ADD RESOURCE</button>
      </div>
      <div className="Resources__RightSide">
        <h2 className="Resources__Title">Details View</h2>
        <DetailsView details={details} />
      </div>
    </div>
  );
};

export default Resources;
