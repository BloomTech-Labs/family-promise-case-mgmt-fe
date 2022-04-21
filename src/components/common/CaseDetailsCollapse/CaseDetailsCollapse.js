import React from 'react';
import { Button, Collapse } from 'antd';
import ClientFamilyInfoForm from '../CaseDetailsForms/ClientFamilyInformation';

import { HouseholdInformationForm } from '../CaseDetailsForms/HouseholdInformationForm';
import { initialFormValues, Notes } from '../CaseDetailsForms/Notes';
import SingleNote from '../CaseDetailsForms/SingleNote';

const { Panel } = Collapse;

const CaseDetailsCollapse = () => {
  // logs which panels are currently open, remove console.log in production
  function callback(key) {
    console.log(key);
  }

  // adds new note button to notes preview panel
  const genAddNoteButton = () => (
    <Button
      style={{
        color: '#CDCDCD',
        background: '#007fd4',
        borderColor: '#007fd4',
      }}
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

  // dummy text, can delete when forms are added to collapse panels
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  return (
    <div className="CaseDetailsCollapse">
      {/* change h1 text to read appropriate API data when availible */}
      <h1>Case Details</h1>
      <Collapse defaultActiveKey={['notesPreview']} onChange={callback}>
        <Panel
          header="Client Notes"
          key="notesPreview"
          style={{ margin: 'auto' }}
          extra={genAddNoteButton()}
        >
          <SingleNote props={initialFormValues} />
          <Collapse onChange={callback}>
            <Panel header="Show All Notes" key="showAllNotes">
              <Notes />
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="Client/Family Information" key="clientFamilyInformation">
          <ClientFamilyInfoForm />
        </Panel>
        <Panel header="Household Information" key="householdInformation">
          <HouseholdInformationForm />
        </Panel>
        <Panel header="Education" key="education">
          {/* insert Education Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
        <Panel header="Employment" key="employment">
          {/* insert Employment Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
        <Panel header="Finances" key="finances">
          {/* insert Finances Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
        <Panel header="Insurance" key="insurance">
          {/* insert Insurance Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
        <Panel header="Documents" key="documents">
          {/* insert Documents Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
        <Panel header="Goals/Strengths/Obstacles" key="goalsStrengthsObstacles">
          {/* insert Goals/Strengths/Obstacles Form here and delete p tag w/ dummy text */}
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default CaseDetailsCollapse;
