import React, { useState } from 'react';
import RenderResource from './RenderResource';

export default function RenderResources() {
  function toggleActive(evt) {
    if (evt.currentTarget.classList.contains('r-tab-active')) {
      evt.currentTarget.classList.remove('r-tab-active');
      console.log('Button no longer active');
    } else {
      evt.currentTarget.classList.add('r-tab-active');
      console.log('Button is now active');
    }
  }

  return (
    <div className="RenderResources">
      <div className="ResourceBody">
        <section className="tab-container">
          <div className="r-tab">
            <div className="r-tab-header">
              <h4> Resource Section Tab </h4>
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
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
              <button className="r-tab-btn">VIEW</button>
            </div>

            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
          </div>
        </section>

        <section className="r-section-lists">
          <div className="r-tab-header">
            <h4> Resource Title</h4>
            <p>
              Short description lorem ipsum dolor sit amet, duis congue luptatum
              cum in, malorum ponderum dissentias ei qui. No per unum eros
              ancillae, nonumy aliquam nominavi cu per.
            </p>
            <button className="r-tab-btn">VIEW</button>
            <ul className="r-tags">
              <li>tag</li>
              <li>tag</li>
              <li>tag</li>
            </ul>
          </div>
        </section>

        {/* <RenderResource/> */}
      </div>
    </div>
  );
}
