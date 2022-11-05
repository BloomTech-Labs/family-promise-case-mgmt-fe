import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrintNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    //update the 1 with state based on which client we are viewing
    axios
      .get('http://localhost:8000/api/clients/1/notes')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  //changes the formata of the date given
  let stringVersionMMDDYY = '';
  let mmddyy = [];
  let yy = '';
  let mm = '';
  let dd = '';

  //grabs the MM/DD/YYYY in array format
  for (let i = 0; i < notes.length; i++) {
    mmddyy = notes[i].created_at.split('');
  }

  //loops over MM/DD/YYYY array and builds a readable date format
  for (let i = 0; i < mmddyy.length; i++) {
    if (mmddyy[i] === 'T') break;
    if (i === 4) continue;
    if (i < 4) {
      yy += mmddyy[i];
    } else if (i < 8) {
      mm += mmddyy[i];
    } else {
      dd += mmddyy[i];
    }
    stringVersionMMDDYY = mm + dd + '-' + yy;
  }

  return (
    <div className="containerForPrintNotesComp">
      <header className="printNotesHeader">
        <div className="headerDivPrintNotes">Family Promise</div>
        <div className="headerDivPrintNotes">
          {notes.length < 1 ? '' : `Client id: ${notes[1].client_id}`}
        </div>
      </header>
      {notes.length
        ? notes.map(note => (
            <div className="printNotesContainer" key={note.id}>
              <section className="printNotesSectionContainer">
                <div className="notesHeading notesHeading1">
                  Added on: {stringVersionMMDDYY}
                </div>
                <div className="notesHeading notesHeading2">
                  Added by: {note.created_by}
                </div>
              </section>
              <p className="theLiteralNotesMessage">{note.message}</p>
            </div>
          ))
        : 'No notes for this client yet'}
    </div>
  );
};

export default PrintNotes;
