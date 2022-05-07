import React from 'react';
import { Button, Card } from 'antd';

import '../../../styles/css/styles.css';

const CaseDetails = () => {
  // dummy text, can delete when forms are added to collapse panels
  const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  return (
    <div className="CaseDetails">
      <div className="CaseDetails__LeftSide">
        <div className="CaseDetails__LeftSideHead">
          <h2>Single Case View</h2>
          <Button type="default">ALL CASES</Button>
        </div>
        <div className="CaseDetails__LeftSideBtnsContainer">
          <Card>Basic info here</Card>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            Test
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            Test
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            Test
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            Test
          </Button>
          <Button type="block" className="CaseDetails__LeftSideBtns">
            Test
          </Button>
        </div>
      </div>
      <div className="CaseDetails__RightSide"></div>
    </div>
  );
};

export default CaseDetails;
