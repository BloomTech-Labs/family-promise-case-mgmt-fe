//---- Imports ----//
import { React, useState } from 'react';
import { currDate } from '../../pages/Calendar/WeeklyView';
import arrow from '../../../assets/VectorarrowForAllCases.png';

//---- Constants and Functions ----//
// --- Grab today's date --- //
/*let test = new Date();

// --- Find the first day of the month --- //
let firstDay = test.getDate() - test.getDay();
firstDay = firstDay - 7;
let lastWeekFirst= new Date(test.setDate(firstDay));

function click() {
  console.log(lastWeekFirst);
};*/

//---- Creates column of times to the left of main content ----//
function DaySelector(props) {
  return (
    <div className="test">
      <div
        className="help"
        style={{
          fontSize: '1.2 rem',
          color: 'white',
        }}
      >
        {props.text}
      </div>
    </div>
  );
}

export default DaySelector;

/*<div
      className="day-select"
      style={{
        width: '12%',
        margin: '0% 1% 0% 1%',
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        
      <img
        src={arrow}
        onClick={click}
        alt="leftArrow"
        style={{
          transform: 'scaleX(-1)',
          padding: '2px',
          borderRadius: '5px',
          backgroundColor: '#2d2d2d',
          width: '25px',
          height: '20px',
        }}/>

      <p style={{
          width: '125px',
          border: '2px solid #d3d3d3',
          borderRadius: '8px',
          backgroundColor: '#2d2d2d',
          padding: '5px',
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#d3d3d3',
          margin: '12px',
        }}>
        Change Week
      </p>

      <img
        src={arrow}
        alt="rightArrow"
        style={{
          padding: '2px',
          borderRadius: '5px',
          backgroundColor: '#2d2d2d',
          width: '25px',
          height: '20px',
        }}/>
    </div>*/
