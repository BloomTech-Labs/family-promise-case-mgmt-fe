import React, { useState } from 'react';

export default function CaseActivity() {
  const historyDummyData = [
    { action: 'opened', date: '12-03-2009' },
    { action: 'changed', date: '11-07-2009' },
    { action: 'changed', date: '03-23-2009' },
    { action: 'closed', date: '08-16-2019' },
  ];

  const [expandView, setExpandView] = useState(false);
  const [caseHistoryData, setCaseHistoryData] = useState(historyDummyData);

  const toggleExpandedView = () => {
    setExpandView(!expandView);
  };

  return (
    <>
      <div>
        <button style={{ marginLeft: '1em' }} onClick={toggleExpandedView}>
          View Case Activity
        </button>
      </div>
      {expandView && (
        <ExpandedActivity toggleExpandedView={toggleExpandedView} />
      )}
    </>
  );
}

const expandedStyles = {
  div: {
    marginTop: '2em',
    display: 'absolute',
    width: '100%',
    height: '80vh',
    top: '0',
    left: '0',
    backgroundColor: 'rgb(51,51,51, .5)',
  },
  titleDiv: {
    backgroundColor: 'rgb(51,51,51, .75)',
    margin: 0,
    width: '100%',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  h3: {
    fontSize: '24px',
    textAlign: 'center',
    color: '#006FBA',
    marginLeft: '2em',
  },
  closeButton: {},
};

const ExpandedActivity = ({ toggleExpandedView }) => {
  return (
    <div style={expandedStyles.div}>
      <div style={expandedStyles.titleDiv}>
        <h3 style={expandedStyles.h3}>Case Activity</h3>
        <button onClick={toggleExpandedView} style={expandedStyles.closeButton}>
          close
        </button>
      </div>
    </div>
  );
};
