import React, { useEffect } from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const CaseDetailsCollapse = () => {
  function callback(key) {
    console.log(key);
  }

  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  return (
    <div>
      <h1>Case Details Collapse</h1>
      <Collapse defaultActiveKey={['clientNotes']} onChange={callback}>
        <Panel header="Client notes" key="clientNotes">
          <p>{text}</p>
        </Panel>
        <Panel header="Client/Family Information" key="clientFamilyInformation">
          <p>{text}</p>
        </Panel>
        <Panel header="Household Information" key="householdInformation">
          <p>{text}</p>
        </Panel>
        <Panel header="Education" key="education">
          <p>{text}</p>
        </Panel>
        <Panel header="Employment" key="employment">
          <p>{text}</p>
        </Panel>
        <Panel header="Finances" key="finances">
          <p>{text}</p>
        </Panel>
        <Panel header="Insurance" key="insurance">
          <p>{text}</p>
        </Panel>
        <Panel header="Documents" key="documents">
          <p>{text}</p>
        </Panel>
        <Panel header="Goals/Strengths/Obstacles" key="goalsStrengthsObstacles">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CaseDetailsCollapse;
