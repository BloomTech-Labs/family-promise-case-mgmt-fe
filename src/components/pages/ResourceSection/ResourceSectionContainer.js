import React from 'react';
import RenderSection from './RenderResourceSection';

export default function ResourceSectionContainer() {
  let sampleData = [
    'section1',
    'section2',
    'section3',
    'section4',
    'section5',
    'section6',
    'section7',
    'section8',
  ];

  return (
    <section className="tab-container">
      {sampleData.map(i => (
        <RenderSection />
      ))}
    </section>
  );
}
