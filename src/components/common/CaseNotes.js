import React from 'react';

export default function CaseNotes(props) {
  const { filterSearch, filteredResults, notes } = props;
  return (
    <div className="Rightside__PreviousNotes">
      {filterSearch.length > 1
        ? filteredResults.map(item => {
            let date = new Date(item.created_at);
            let month = date.getMonth();
            let year = date.getFullYear();
            let day = date.getDate();

            return (
              <div key={item.id} className="NoteLine">
                <h3>Title here</h3>
                <p>
                  {item.message}
                  <span>{`${month}/${day}/${year}`}</span>
                </p>
              </div>
            );
          })
        : notes.map(item => {
            let date = new Date(item.created_at);
            let month = date.getMonth();
            let year = date.getFullYear();
            let day = date.getDate();

            return (
              <div key={item.id} className="NoteLine">
                <h3>Title here2</h3>
                <p>
                  {item.message}
                  <span>{`${month}/${day}/${year}`}</span>
                </p>
              </div>
            );
          })}
    </div>
  );
}
