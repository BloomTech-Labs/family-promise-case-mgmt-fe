import { Button } from 'antd';

import React, { useState } from 'react';
import SingleNote from './SingleNote';
import PlaceholderProfileImage from '../../../assets/PlaceholderProfileImage.png';
import Search from 'antd/lib/input/Search';

export const initialFormValues = {
  name: 'Firstname Lastname',
  date: 'mm/dd/yyyy xx:xx:xx',
  picture: <img src={PlaceholderProfileImage} alt="Profile"></img>,
  note:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  archived: false,
};

export const initialFormValuesArchived = {
  name: 'Firstname Lastname',
  date: 'mm/dd/yyyy xx:xx:xx',
  picture: <img src={PlaceholderProfileImage} alt="Profile"></img>,
  note:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  archived: true,
};

export const Notes = () => {
  const [archived, setArchived] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const showArchive = () => {
    setArchived(true);
  };
  const showCurrent = () => {
    setArchived(false);
  };

  const onFinish = values => {
    const updatedHousehold = values;
    console.log(updatedHousehold);
    setDisabled(!disabled);
  };

  const notesContainerStyle = {
    margin: 'auto',
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const notesSwitchPanelStyle = {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  };

  const buttonStyle = {
    margin: '1rem',
    color: '#CDCDCD',
    background: '#007FD4',
    borderColor: '#007FD4',
    width: '18vw',
  };

  const searchStyle = {
    width: '10vw',
    margin: '1rem',
    color: '#cdcdcd',
    backgroundColor: '#cdcdcd',
  };

  return (
    <div className="notesContainer" style={notesContainerStyle}>
      <span className="notesSwitchPanel" style={notesSwitchPanelStyle}>
        <Button style={buttonStyle} onClick={showCurrent}>
          Current
        </Button>
        <Button style={buttonStyle} onClick={showArchive}>
          Archive
        </Button>
        <Search placeholder="filter" style={searchStyle} />
      </span>

      {archived === true ? (
        <div>
          <SingleNote props={initialFormValuesArchived} />
          <SingleNote props={initialFormValuesArchived} />
        </div>
      ) : (
        <div>
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
        </div>
      )}
    </div>
  );
};
