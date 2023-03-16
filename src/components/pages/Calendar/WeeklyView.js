//---- Imports ----//
import React from 'react';
import Weekdays from '../../common/WeeklyView/Weekdays';
import Times from '../../common/WeeklyView/Times';
import WeeklyRows from '../../common/WeeklyView/WeeklyRow';

//---- Constants and Functions ----//
// - Setting month date - //
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

let currDate = new Date(),
  currMonth = currDate.getMonth(),
  currYear = currDate.getFullYear();

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
      <h2
        style={{
          marginLeft: '5.5%',
          color: 'white',
          fontSize: '2.1rem',
          fontWeight: 'bolder',
          textAlign: 'center',
        }}
      >
        {months[currMonth]} {currYear}
      </h2>
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
