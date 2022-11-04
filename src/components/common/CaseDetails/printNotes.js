import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrintNotes = () => {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/clients/2/notes')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {notes.length > 1
        ? notes.map(note => <div key={note.id}>{note.message}</div>)
        : 'No notes for this client yet'}
    </>
  );
};

export default PrintNotes;
