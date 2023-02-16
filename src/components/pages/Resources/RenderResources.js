import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function RenderResources() {
  const blackStar = '★';
  const whiteStar = '✰';

  const [pinned, setPinned] = useState(false);
  const [pin, setPin] = useState(whiteStar);

  // route path to /resources/:resourceID
  const history = useHistory();

  function routeToResource() {
    history.push('/resources/:resourceId');
  }

  function togglePin() {
    if (pinned === false) {
      setPinned(true);
      setPin(whiteStar);
    } else {
      setPinned(false);
      setPin(blackStar);
    }
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
        <section className="Resource">
          <div className="Resource-Header">
            <h3> Resource Title</h3>
            {/* pin/ unpin functionality */}
            <button className="resource-pin" onClick={togglePin}>
              {pin}
            </button>
          </div>
          <h4>Description</h4>
          <p>
            Short description lorem ipsum dolor sit amet, duis congue luptatum
            cum in, malorum ponderum dissentias ei qui. No per unum eros
            ancillae, nonumy aliquam nominavi cu per.
          </p>
          <h4>Contact</h4>
          {/* contact info readily available for case managers, updated by api */}
          <div className="resource-contacts">
            <button className="SidebarButton">Website</button>
            <button className="SidebarButton">Phone</button>
            <button className="SidebarButton">Address</button>
          </div>

          {/* tagging system will help make resources easier, quicker to find for case managers
            if they want to skip searching through categories */}
          {/* need to give ability to update tags  */}
          <ul className="r-tags">
            <li># tag</li>
            <li># tag</li>
            <li># tag</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
