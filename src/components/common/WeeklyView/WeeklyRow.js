//---- Imports ----//
import React from 'react';

//---- Constants and Functions ----//
const weekly = [
  'SunTime',
  'MonTime',
  'TueTime',
  'WedTime',
  'ThuTime',
  'FriTime',
  'SatTime',
];
let weeklyList = [];
// - Creates days of the week - //
weekly.forEach((item, index) => {
  weeklyList.push(
    <li
      key={index}
      style={{
        width: 'calc(100% / 7)',
        height: '53.5px',
        paddingTop: '10px',
        backgroundColor: '#363636',
        borderLeft: '15px solid #101010',
        borderRight: '15px solid #101010',
      }}
    >
      Placeholder
    </li>
  );
});

//---- WeeklyView Render ----//
function WeeklyRows() {
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <ul
        style={{
          color: 'white',
          listStyle: 'none',
          paddingLeft: '0px',
          display: 'flex',
          flexFlow: 'row wrap',
          textAlign: 'center',
          borderBottom: '1.5px solid #D9D9D9',
          margin: '0px',
        }}
      >
        {weeklyList}
      </ul>
    </div>
  );
}

export default WeeklyRows;
