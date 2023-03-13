//---- Imports ----//
import React from 'react';

//---- Constants and Functions ----//
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayList = [];
// - Creates days of the week - //
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

const dates = ['1', '2', '3', '4', '5', '6', '7'];
let dateList = [];
// - Creates numerical dates, will need JS - //
dates.forEach((item, index) => {
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
          border: '2px dotted green',
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
          border: '2px dotted green',
        }}
      >
        {dateList}
      </ul>
    </div>
  );
}

export default Weekdays;
