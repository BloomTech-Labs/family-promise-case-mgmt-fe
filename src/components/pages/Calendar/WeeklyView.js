//---- Imports ----//
import React from 'react';
import Weekdays from '../../common/WeeklyView/Weekdays';

//---- Constants and Functions ----//

//---- WeeklyView Render ----//
function WeeklyView() {
  return (
    <div className="weekly-cal">
      {/* --- Header --- */}
      <Weekdays />

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
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              7 AM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              8 AM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              9 AM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              10 AM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              11 AM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              12 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              1 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              2 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              3 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              4 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              5 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              6 PM
            </li>
            <li
              style={{
                paddingBottom: '25px',
              }}
            >
              7 PM
            </li>
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
            style={{
              border: '2px dotted orange',
              height: '35px',
            }}
          >
            spacer
          </div>
          {/* --- Row 1 --- */}
          <div
            className="7am-row"
            style={{
              width: '100%',
            }}
          >
            <ul
              className="sun-times"
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
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
            </ul>
          </div>
          {/* --- Row 2 --- */}
          <div
            className="8am-row"
            style={{
              width: '100%',
            }}
          >
            <ul
              className="mon-times"
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
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
            </ul>
          </div>

          {/* --- Row 3 --- */}
          <div
            className="8am-row"
            style={{
              width: '100%',
            }}
          >
            <ul
              className="mon-times"
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
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
                }}
              >
                Placeholder
              </li>
              <li
                style={{
                  width: 'calc(100% / 7)',
                  padding: '10px 0px 15px 0px',
                  backgroundColor: '#363636',
                  borderLeft: '15px solid #101010',
                  borderRight: '15px solid #101010',
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
