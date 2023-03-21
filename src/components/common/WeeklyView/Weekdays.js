//---- Imports ----//
import React from 'react';

//---- Constants and Functions ----//
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayList = [];
// - Creates days of the week with dry code - //
days.forEach((item, index) => {
  dayList.push(
    <li
      key={index}
      style={{
        width: 'calc(100% / 7)',
      }}
    >
      {item}
    </li>
  );
});

// - Calculating current date - //
let currDate = new Date();

let lastSunday = currDate.getDate() - currDate.getDay();
// - Fill in the week based off the last Sunday - //
const week = [];
for (let i = 0; i < 7; i++) {
  let nextDay = lastSunday++;
  week.push(nextDay);
}

let dateList = [];
// - Creates numerical dates with dry code - //
week.forEach((item, index) => {
  dateList.push(
    <li
      key={index}
      style={{
        width: 'calc(100% / 7)',
      }}
    >
      {item}
    </li>
  );
});

console.log('This is the thing:' + week);

//---- WeeklyView Render ----//
function Weekdays() {
  return (
    <div
      className="week-header"
      style={{
        marginLeft: '5.5%',
        width: '94%',
      }}
    >
      <ul
        className="weekdays"
        style={{
          color: 'white',
          fontSize: '2rem',
          listStyle: 'none',
          paddingLeft: '0px',
          display: 'flex',
          flexFlow: 'row wrap',
          textAlign: 'center',
          marginBottom: '0px',
        }}
      >
        {dayList}
      </ul>

      <ul
        className="dates"
        style={{
          color: 'white',
          fontSize: '2rem',
          listStyle: 'none',
          paddingLeft: '0px',
          display: 'flex',
          flexFlow: 'row wrap',
          textAlign: 'center',
          marginBottom: '0px',
        }}
      >
        {dateList}
      </ul>
    </div>
  );
}

export default Weekdays;
