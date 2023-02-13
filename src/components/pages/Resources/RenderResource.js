import React from 'react';

export default function RenderResource() {
  return (
    <section className="CurrentResource">
      <h3> Current Resource Sample </h3>

      <h4> Summary </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
      </p>
      <h4> Details </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip
      </p>

      <a href="#" className="resource-link">
        Visit Website
      </a>

      <div className="resource-tags">
        <ul>
          <li>tag</li>
          <li>tag</li>
          <li>tag</li>
        </ul>
      </div>
    </section>
  );
}
