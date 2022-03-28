import { Button } from 'antd';

import React, { useState } from 'react';
import SingleNote from './SingleNote';
import PlaceholderProfileImage from '../../../assets/PlaceholderProfileImage.png';

const initialFormValues = {
  name: 'Firstname Lastname',
  date: 'mm/dd/yyyy xx:xx:xx',
  picture: <img src={PlaceholderProfileImage} alt="Profile"></img>,
  note:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  archived: false,
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

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  //   const [form] = Form.useForm();

  return (
    <div className="notesContainer">
      {archived === true ? (
        <div>
          <SingleNote props={initialFormValues} />
        </div>
      ) : (
        <div>
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
          <SingleNote props={initialFormValues} />
        </div>
      )}
      <Button onClick={showArchive}> Archive</Button>
      <Button onClick={showCurrent}>Current</Button>
    </div>
  );
};
