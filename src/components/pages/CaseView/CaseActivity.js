import React, { useState } from 'react';

export default function CaseActivity() {
  const historyDummyData = [
    { action: 'opened', date: '12-03-2009' },
    { action: 'changed', date: '11-07-2009' },
    { action: 'changed', date: '03-23-2009' },
    { action: 'closed', date: '08-16-2019' },
  ];

  const [expandView, setExpandView] = useState(true);
  const toggleExpandedView = () => {
    setExpandView(!expandView);
  };

  return (
    <>
      <div>
        {/* This gets the last two changes and displays them */}
        <p>
          <span style={{ fontWeight: 'bold' }}>Latest Activity:</span>{' '}
          {historyDummyData[0].action}: {historyDummyData[0].date}
        </p>
        <button onClick={toggleExpandedView}>View All Activity</button>
      </div>
      {expandView && <ExpandedActivity />}
    </>
  );
}

const ExpandedStyles = {};

const ExpandedActivity = () => {
  return (
    <div>
      <h2>Expanded</h2>
    </div>
  );
};
