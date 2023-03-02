//---- Imports ----//
import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from './SearchIcon';

//---- Constants and Functions ----//

//---- WeeklyView Render ----//
function WeeklyView() {
  return (
    <div className="weekly-cal">
      <div
        className="week-header"
        style={{
          marginLeft: '3%',
        }}
      >
        <ul
          className="weekdays"
          style={{
            color: 'white',
            fontSize: '2rem',
            listStyle: 'none',
            display: 'flex',
            flexFlow: 'row wrap',
            textAlign: 'center',
            marginBottom: '0px',
          }}
        >
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Sun
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Mon
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Tue
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Wed
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Thu
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Fri
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            Sat
          </li>
        </ul>

        <ul
          className="dates"
          style={{
            color: 'white',
            fontSize: '1.7rem',
            listStyle: 'none',
            display: 'flex',
            flexFlow: 'row wrap',
            textAlign: 'center',
            marginTop: '0px',
          }}
        >
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            1
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            2
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            3
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            4
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            5
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            6
          </li>
          <li
            style={{
              width: 'calc(100% / 7)',
            }}
          >
            7
          </li>
        </ul>
      </div>

      <div className="week-body">
        <p
          className="local-time"
          style={{
            color: 'white',
            fontWeight: 'bold',
            marginLeft: '30px',
          }}
        >
          GMT-05
        </p>
        <ul
          className="times"
          style={{
            color: 'grey',
            listStyle: 'none',
            display: 'flex',
            flexFlow: 'column wrap',
            textAlign: 'right',
            marginRight: '94.6%',
          }}
        >
          <li>7 AM</li>
          <li>8 AM</li>
          <li>9 AM</li>
          <li>10 AM</li>
          <li>11 AM</li>
          <li>12 PM</li>
          <li>1 PM</li>
          <li>2 PM</li>
          <li>3 PM</li>
          <li>4 PM</li>
          <li>5 PM</li>
          <li>6 PM</li>
          <li>7 PM</li>
        </ul>
      </div>
    </div>
  );
}

//---- Export ----//
export default WeeklyView;
