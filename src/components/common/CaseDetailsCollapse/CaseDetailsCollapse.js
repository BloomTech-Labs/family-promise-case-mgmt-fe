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
    </div>
  );
};

export default CaseDetailsCollapse;
