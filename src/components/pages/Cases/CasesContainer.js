import React, { useState } from 'react';
import axios from 'axios';
import RenderCases from './RenderCases';
import { Button } from 'antd';
const CasesContainer = () => {
  const [timestamp, setTimestamp] = useState('');

  const updateTimestamp = () => {
    axios
      .post(`http://localhost:8000/1/notes`)
      .then(res => setTimestamp(res.data))
      .catch(err => console.log(err));
  };
  return (
    <>
      <RenderCases />
      <p>Push To Record a Time Stamp on History Page</p>
      <Button type="secondary" onClick={updateTimestamp}>
        Make Stamp
      </Button>
    </>
  );
};

export default CasesContainer;
