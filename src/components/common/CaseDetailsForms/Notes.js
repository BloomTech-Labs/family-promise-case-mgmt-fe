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

const Notes = () => {
  const [archived, setArchived] = useState(false);

  const showArchive = () => {
    setArchived(true);
  };
  const showCurrent = () => {
    setArchived(false);
  };

  return (
    <div className="Notes__Container">
      <span className="Notes__Container__SwitchPanel">
        <Button
          type="primary"
          className="ant-btn-primary-noteDetails"
          onClick={showCurrent}
        >
          Current
        </Button>
        <Button
          type="primary"
          className="ant-btn-primary-noteDetails"
          onClick={showArchive}
        >
          Archive
        </Button>
        <Search
          placeholder="filter"
          bordered={false}
          className="Notes__Filter"
          enterButton={
            <Button
              type="primary"
              className="ant-btn-primary"
              style={{ margin: '0' }}
            >
              Filter
            </Button>
          }
        />
      </span>
      <div className="Notes__ShowNotes">
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
    </div>
  );
};

export default Notes;
