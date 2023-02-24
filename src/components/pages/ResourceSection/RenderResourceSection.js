import React from 'react';

export default function RenderSection() {
  return (
    <div key={null} className="r-tab">
      <div className="r-tab-header">
        {/* props.title */}
        <h4> Resource Section Tab </h4>
        {/* on click will route to page with list of related resources */}
        <button onClick={null} className="r-tab-btn">
          VIEW
        </button>
      </div>
      {/* brief summary of section and what that resource is used for + who it is aimed for */}
      {/* props.description */}
      <p>
        Short description lorem ipsum dolor sit amet, duis congue luptatum cum
        in, malorum ponderum dissentias ei qui. No per unum eros ancillae,
        nonumy aliquam nominavi cu per.
      </p>
    </div>
  );
}
