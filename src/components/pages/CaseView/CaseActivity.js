import React from 'react';

export default function CaseActivity({ history }) {
  //TODO:
  // - Add a Case Logger function taking an action, and the time, then moving that data to the caseActivity

  return (
    <div>
      <ol>
        {history.map(change => (
          <li>
            Case {change.action} - {change.date}
          </li>
        ))}
      </ol>
    </div>
  );
}
