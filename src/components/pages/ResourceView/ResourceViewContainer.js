import React, { useState } from 'react';

export default function ResourceViewContainer() {
  const [pinned, setPinned] = useState(false);
  const [pin, setPin] = useState('pin');

  function togglePin() {
    if (pinned === false) {
      setPinned(true);
      setPin('unpin');
    } else {
      setPinned(false);
      setPin('pin');
    }
  }

  return (
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
        Short description lorem ipsum dolor sit amet, duis congue luptatum cum
        in, malorum ponderum dissentias ei qui. No per unum eros ancillae,
        nonumy aliquam nominavi cu per.
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
  );
}
