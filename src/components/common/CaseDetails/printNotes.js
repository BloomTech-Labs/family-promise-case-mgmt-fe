import React, { useEffect, useState } from 'react';
import { getClientsNotes } from '../../../api/index';
import { connect } from 'react-redux';
import familyPromiseIcon from '../../../assets/fplogo.png';

const PrintNotes = props => {
  const [notes, setNotes] = useState([]);

  const { clientName } = props;

  //When clientNotes is built out, replace everything using tempObject with props
  //or you can replace with redux when redux is working
  const tempClientObj = {
    name: 'John Doe',
    id: 1,
  };

  useEffect(() => {
    getClientsNotes(tempClientObj.id).then(res => setNotes(res));
  }, []); //eslint-disable-line

  //format the date
  function formatDate(index) {
    const date = new Date(notes[index].created_at).toLocaleString();
    return date;
  }

  return (
    <div className="containerForPrintNotesComp">
      <header className="printNotesHeader">
        <img
          className="logoInHeader"
          src={familyPromiseIcon}
          alt="family promise logo"
        ></img>
        <div className="headerDivPrintNotes">Client Name: {clientName}</div>
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

export default connect(st => st)(PrintNotes);
