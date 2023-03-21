//---- Imports ----//
import React from 'react';

import arrow from '../../../assets/VectorarrowForAllCases.png';

//---- Constants and Functions ----//

//---- Creates column of times to the left of main content ----//
function DaySelector() {
  return (
    <div
      className="day-select"
      style={{
        width: '9%',
        margin: '0% 1% 0% 1%',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <img
        src={arrow}
        alt="Help"
        style={{
          transform: 'scaleX(-1)',
          padding: '2px',
          borderRadius: '5px',
          backgroundColor: '#2d2d2d',
          width: '25px',
          height: '20px',
        }}
      />
      <p
        style={{
          width: '70px',
          border: '2px solid #d3d3d3',
          borderRadius: '8px',
          backgroundColor: '#2d2d2d',
          padding: '5px',
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#d3d3d3',
          margin: '12px',
        }}
      >
        Today
      </p>
      <img
        src={arrow}
        alt="Help"
        style={{
          padding: '2px',
          borderRadius: '5px',
          backgroundColor: '#2d2d2d',
          width: '25px',
          height: '20px',
        }}
      />
    </div>
  );
}

export default DaySelector;
