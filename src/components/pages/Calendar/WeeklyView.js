//---- Imports ----//
import React from 'react';
import Weekdays from '../../common/WeeklyView/Weekdays';
import Times from '../../common/WeeklyView/Times';
import WeeklyRows from '../../common/WeeklyView/WeeklyRow';

//---- Constants and Functions ----//
const rows = [];

for (let i = 0; i < 13; i++) {
  rows.push(<WeeklyRows />);
}

//---- WeeklyView Render ----//
function WeeklyView() {
  return (
    <div className="weekly-cal">
      {/* --- Header --- */}
      <Weekdays />

      {/* --- Body-Times --- */}
      <div
        className="week-body"
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        <Times />

        {/* --- Body-Rows --- */}
        <div
          className="daily-breakdown"
          style={{
            width: '94.2%',
            marginLeft: '1%',
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              height: '50px',
            }}
          >
            spacer
          </div>

          {rows}
        </div>
      </div>
    </div>
  );
}

//---- Export ----//
export default WeeklyView;
