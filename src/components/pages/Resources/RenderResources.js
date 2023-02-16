import React from 'react';
import { useHistory } from 'react-router-dom';

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
        <section className="tab-container">
          {/* resources categorized by topic */}
          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              {/* on click will route to page with list of related resources */}
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>
            {/* brief summary of section and what that resource is used for + who it is aimed for */}
            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>

          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>
          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button onClick={null} className="r-tab-btn">
                VIEW
              </button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
