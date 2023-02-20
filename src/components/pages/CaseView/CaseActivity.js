import React, { useState } from 'react';

export default function CaseActivity() {
  // When using real data, please comment out the dummyData, and initialize the caseHistoryData to the history props passed in.

  const historyDummyData = [
    { action: 'opened', date: '12-03-2009' },
    { action: 'changed', date: '11-07-2009' },
    { action: 'changed', date: '03-23-2009' },
    { action: 'closed', date: '08-16-2019' },
  ];

  // State is used to determine whether the Expanded View should be rendered on the DOM
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
        <ExpandedActivity
          caseHistoryData={caseHistoryData}
          toggleExpandedView={toggleExpandedView}
        />
      )}
    </>
  );
}

// A custom styles object is used to not clog or interfere with the css files used site-wide, and allowing localized styling changes.
const expandedStyles = {
  div: {
    marginTop: '2em',
    display: 'absolute',
    width: '100%',
    top: '0',
    left: '0',
    backgroundColor: 'black',
  },
  titleDiv: {
    backgroundColor: 'rgb(51,51,51, .90)',
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
  legendDiv: {
    width: '100%',
    height: '4em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgb(51,51,51, .99)',
    marginTop: '.5em',
    marginBottom: '.5em',
  },
  legendP: {
    fontSize: '1.2em',
    color: '#006FBA',
    fontWeight: '500',
    textAlign: 'center',
  },
  itemDiv: {
    width: '100%',
    height: '4em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6E6E6E',
    marginTop: '.5em',
    marginBottom: '.5em',
  },
  itemP: {
    color: 'white',
    fontWeight: '400',
    textAlign: 'center',
  },
};

const ExpandedActivity = ({ toggleExpandedView, caseHistoryData }) => {
  return (
    <div style={expandedStyles.div}>
      <div style={expandedStyles.titleDiv}>
        <h3 style={expandedStyles.h3}>Case Activity</h3>
        <button onClick={toggleExpandedView} style={expandedStyles.closeButton}>
          close
        </button>
      </div>
      <div>
        <div style={expandedStyles.legendDiv}>
          <p style={expandedStyles.legendP}>Modification</p>
          <p style={expandedStyles.legendP}>Date</p>
        </div>
        {caseHistoryData.map(item => {
          return (
            <>
              <div style={expandedStyles.itemDiv}>
                <p style={expandedStyles.itemP}>{item.action}</p>
                <p style={expandedStyles.itemP}>{item.date}</p>
              </div>
            </>
          );
        })}
        ;
      </div>
    </div>
  );
};
