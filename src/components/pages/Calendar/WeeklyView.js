//---- Imports ----//
import React from 'react';
import Weekdays from '../../common/WeeklyView/Weekdays';
import Times from '../../common/WeeklyView/Times';
import WeeklyRows from '../../common/WeeklyView/WeeklyRow';
import DaySelector from '../../common/WeeklyView/DaySelector';

//---- Constants and Functions ----//
// - Months array - //
const months = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER',
];
// - Setting month date - //
const infos = {
  text: 'this is a test help me plz',
};

// - Render several rows - //
const rows = [];

for (let i = 0; i < 13; i++) {
  rows.push(<WeeklyRows />);
}

//---- WeeklyView Render ----//
function WeeklyView() {
  return (
    <div className="weekly-cal">
      {/* --- Header --- */}
      <div
        className="header"
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        <DaySelector />
        <h2
          style={{
            width: '77%',
            color: 'white',
            fontSize: '2.1rem',
            fontWeight: 'bolder',
            textAlign: 'center',
          }}
        ></h2>
      </div>

      {/* --- Days and Dates --- */}
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
          {/* --- Spacer --- */}
          <div
            style={{
              height: '50px',
            }}
          ></div>

          {rows}
        </div>
      </div>
    </div>
  );
}

//---- Export ----//
export default WeeklyView;
