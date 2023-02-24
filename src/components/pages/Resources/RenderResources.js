import React from 'react';
import { useHistory } from 'react-router-dom';

import Sections from '../ResourceSection/ResourceSectionContainer';

export default function RenderResources() {
  // route path to /resources/:resourceID
  const history = useHistory();

  function routeToResource() {
    history.push('/resources/:resourceId');
  }

  return (
    <div className="RenderResources">
      <div className="pinned-container">
        {/* would need to add button to add to pinned resources */}
        <div className="pinned-header">
          <h3>Pinned Resources</h3>
        </div>

        <div className="pinned-resource">
          <h4>This is a Pinned Resource</h4>
          <button>&#x25B8;</button>
        </div>
      </div>

      <div className="ResourceBody">
        <Sections />
      </div>
    </div>
  );
}
