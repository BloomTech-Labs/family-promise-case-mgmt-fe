import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrintNotes = () => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios
      //update the 1 state based on which client we are viewing
      .get('http://localhost:8000/api/clients/1/notes')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(notes);

  return (
    <>
      <header className="printNotesHeader">
        <div>Family Promise</div>
        <div>{notes[0].client_id}</div>
      </header>
      {notes.length
        ? notes.map(note => (
            <div key={note.id}>
              <section>
                <div>{note.created_at}</div>
                <div>{note.created_by}</div>
              </section>
              <section>{note.message}</section>
            </div>
          ))
        : 'No notes for this client yet'}
    </>
  );
};

export default PrintNotes;
