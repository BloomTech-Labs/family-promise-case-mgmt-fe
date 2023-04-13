import React, { useState } from 'react';
import '../../../styles/less/styles.less';

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
      <div className="CaseActivity">
        <button className="CaseActivity_button" onClick={toggleExpandedView}>
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

const ExpandedActivity = ({ toggleExpandedView, caseHistoryData }) => {
  return (
    <div className="ExpandedCaseActivity">
      <div className="ExpandedCaseActivity_container">
        <div className="ExpandedCaseActivity_title-wrap">
          <h3 className="ExpandedCaseActivity_title">Case Activity</h3>
          <button onClick={toggleExpandedView}>close</button>
        </div>
        <div>
          <div className="ExpandedCaseActivity_legend-wrap">
            <p className="ExpandedCaseActivity_legend">Modification</p>
            <p className="ExpandedCaseActivity_legend">Date</p>
          </div>
          {caseHistoryData.map(item => {
            return (
              <>
                <div className="ExpandedCaseActivity_item-wrap">
                  <p className="ExpandedCaseActivity_item">{item.action}</p>
                  <p className="ExpandedCaseActivity_item">{item.date}</p>
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};
