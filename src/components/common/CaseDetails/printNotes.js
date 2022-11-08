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

  //format the date
  function formatDate(index) {
    const date = new Date(notes[index].created_at).toLocaleString();
    return date;
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
        ? notes.map((note, i) => (
            <div className="printNotesContainer" key={note.id}>
              <section className="printNotesSectionContainer">
                <div className="notesHeading notesHeading1">
                  Added on: {formatDate(i)}
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
