//---- Imports ----//
//---- Constants and Functions ----//
// --- Grab today's date --- //
const currDate = new Date(),
  currMonth = currDate.getMonth(),
  currYear = currDate.getFullYear();

// --- Find the first day of the month --- //
let firstDay = currDate.getDate() - currDate.getDay();
firstDay = firstDay - 7;
let lastWeekFirst = new Date(currDate.setDate(firstDay));

function log() {
  console.log(currDate);
  console.log(currMonth);
  console.log(currYear);
  console.log(lastWeekFirst);
}

//---- Creates column of times to the left of main content ----//
function DateInfo() {
  return <button onClick={log}>hep</button>;
}

export default DateInfo;
