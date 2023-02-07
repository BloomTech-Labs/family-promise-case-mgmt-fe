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

const expandedStyles = {
  div: {
    display: 'absolute',
    width: '100%',
    height: '80vh',
    top: '0',
    left: '0',
    backgroundColor: 'rgb(0,0,0, .6)',
  },
  h3: {},
};

const ExpandedActivity = () => {
  return (
    <div style={expandedStyles.div}>
      <h3>Case Activity</h3>
    </div>
  );
};
