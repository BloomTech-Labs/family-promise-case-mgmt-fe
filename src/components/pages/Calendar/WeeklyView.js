//---- Imports ----//
import React from 'react';
import DashHeader from '../../common/DashHeader';
import SearchIcon from './SearchIcon';

//---- Constants and Functions ----//

//---- WeeklyView Render ----//
function WeeklyView() {
  return (
    <div className="weekly-cal">
      {/* --- Header --- */}
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
            paddingLeft: '0px',
            display: 'flex',
            flexFlow: 'row wrap',
            textAlign: 'center',
            marginTop: '0px',
            border: '2px dotted green',
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

      {/* --- Body-Times --- */}
      <div
        className="week-body"
        style={{
          border: '2px dotted red',
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
        <div
          className="list-of-times"
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
              textAlign: 'center',
            }}
          >
            GMT-05
          </p>
          <ul
            className="times"
            style={{
              color: 'grey',
              listStyle: 'none',
              paddingLeft: '0px',
              display: 'flex',
              flexFlow: 'column wrap',
              textAlign: 'right',
              border: '2px dotted cyan',
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
        {/* --- Body-Rows --- */}
        <div
          className="daily-breakdown"
          style={{
            border: '2px dashed magenta',
            width: '94.2%',
            marginLeft: '1%',
            display: 'flex',
            flexFlow: 'column wrap',
            alignItems: 'center',
          }}
        >
          <div
            className="7am-row"
            style={{
              width: '100%',
            }}
          >
            <ul
              className="1am-times"
              style={{
                color: 'white',
                backgroundColor: 'grey',
                listStyle: 'none',
                paddingLeft: '0px',
                display: 'flex',
                flexFlow: 'row wrap',
                textAlign: 'center',
                border: '2px dotted cyan',
              }}
            >
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                }}
              >
                Placeholder
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

//---- Export ----//
export default WeeklyView;
