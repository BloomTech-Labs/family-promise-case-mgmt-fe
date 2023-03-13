//---- Imports ----//
import React from 'react';

//---- Constants and Functions ----//
const times = [
  '7 AM',
  '8 AM',
  '9 AM',
  '10 AM',
  '11 AM',
  '12 AM',
  '1 PM',
  '2 PM',
  '3 PM',
  '4 PM',
  '5 PM',
  '6 PM',
  '7 PM',
];
let timeList = [];
// - Creates days of the week - //
times.forEach((item, index) => {
  timeList.push(
    <li
      key={index}
      style={{
        height: '55px',
      }}
    >
      {item}
    </li>
  );
});

//---- WeeklyView Render ----//
function Times() {
  return (
    <div
      className="times-list"
      style={{
        marginLeft: '1%',
        width: '3.5%',
      }}
    >
      <p
        className="local-time"
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'right',
        }}
      >
        GMT-05
      </p>

      <ul
        className="weekdays"
        style={{
          color: 'grey',
          listStyle: 'none',
          paddingLeft: '0px',
          display: 'flex',
          flexFlow: 'column wrap',
          textAlign: 'right',
        }}
      >
        {timeList}
      </ul>
    </div>
  );
}

export default Times;
