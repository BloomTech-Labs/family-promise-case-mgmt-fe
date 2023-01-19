import React from 'react';

// When functional, should pull case information from CaseDetails.js
// The sort of information at stake in FP-18 not to be confused with general "Notes" (API should probably be updated accordingly)
// The purpose of CaseActivity is to display certain timestampped events relevant for logging and tracking case-related actions--when a case is opened, changed, or closed.
// N.B the component currently uses dummy data, and thus doesn't need to actually inherit any props.

export default function CaseActivity() {
  /** structure of dummy data -- I do NOT expect this to remain intact as timestamps are fully implemented
   *  {
   *      time: ISO 8601 formatted date,
   *      actor: string (who did the dang thing),
   *      type: 'created', 'changed', 'closed'
   *      }
   */
  const dummyData = [
    { time: new Date(2020, 3, 18), actor: 'Billy Dean', type: 'created' },
    { time: new Date(2020, 8, 5), actor: 'Billy Dean', type: 'modified' },
    { time: new Date(2021, 1, 12), actor: 'Tamara', type: 'modified' },
    { time: new Date(2021, 10, 2), actor: 'Woohyeok', type: 'closed' },
  ];
  return (
    <div className="Rightside__PreviousNotes">
      {dummyData.map(entry => {
        const { time, actor, type } = entry;
        let month = time.getMonth();
        let day = time.getDate();
        let year = time.getFullYear();

        return (
          <div key={entry} className="NoteLine">
            <p>
              The case was {type} by {actor}.
            </p>
            <span>{`${month}/${day}/${year}`}</span>
          </div>
        );
      })}
    </div>
  );
}
