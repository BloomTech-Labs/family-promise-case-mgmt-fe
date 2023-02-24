import React from 'react';

const ResourceSection = props => {
  return (
    <div className="r-tab">
      <div className="r-tab-header">
        <h4>{props.title}</h4>
        {/* on click will route to page with list of related resources */}
        <button onClick={null} className="r-tab-btn">
          VIEW
        </button>
      </div>
      {/* brief summary of section and what that resource is used for + who it is aimed for */}
      <p>{props.description}</p>
    </div>
  );
};

export { ResourceSection };
