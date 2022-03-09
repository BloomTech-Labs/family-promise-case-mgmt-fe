import React from 'react';
import { Button, Collapse } from 'antd';

const { Panel } = Collapse;

const CaseDetailsCollapse = () => {
  // logs which panels are currently open, remove console.log in production
  function callback(key) {
    console.log(key);
  }

  // adds new note button to notes preview panel
  const genAddNoteButton = () => (
    <Button
      onClick={event => {
        // prevents panel collapse when clicked
        event.stopPropagation();
        // logic to add new note here
        console.log('add new note triggered');
      }}
    >
      Add Note
    </Button>
  );

  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  return (
    <div>
      <h1>Case Details Collapse</h1>
      <Collapse defaultActiveKey={['notesPreview']} onChange={callback}>
        <Panel
          header="Client Notes"
          key="notesPreview"
          extra={genAddNoteButton()}
        >
          <p>display most recent note, this panel is default active</p>
          <Collapse onChange={callback}>
            <Panel header="Show All Notes" key="showAllNotes">
              <p>note 2 visible in secondary exapndable panel</p>
              <p>note 3 visible in secondary exapndable panel</p>
              <p>note 4 visible in secondary exapndable panel</p>
            </Panel>
          </Collapse>
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
