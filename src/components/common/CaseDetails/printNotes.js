import React, { useEffect, useState } from 'react';
import { getClientsNotes } from '../../../api/index';
import { connect } from 'react-redux';
import familyPromiseIcon from '../../../assets/fplogo.png';

const PrintNotes = ({ clientName, clientId }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //When clientNotes is built out, replace everything using tempObject with props
  //or you can replace with redux when redux is working
  const tempClientObj = {
    name: 'John Doe',
    id: 1,
  };

  useEffect(() => {
    setLoading(true);
    getClientsNotes(clientId)
      .then(res => setNotes(res))
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, [clientId]); //eslint-disable-line

  //format the date
  function formatDate(index) {
    const date = new Date(notes[index].created_at).toLocaleString();
    if (error) {
      return <div>Error: {error}</div>;
    }
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
