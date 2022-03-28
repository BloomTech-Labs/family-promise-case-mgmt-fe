import { Button } from 'antd';
import React, { useState } from 'react';

function SingleNote(props) {
  const note = props.props;

  const containerStyle = {
    borderStyle: 'groove',
    background: '#3f3f3f',
    color: '#fcfcfc',
    margin: '0 2% 0 0',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '5px',
    gridAutoFlow: 'row dense',
    width: '50%',
  };

  const contentStyle = {
    gridRow: '2',
    gridColumn: '2 / span 4',
  };

  const buttonStyle = {
    gridRow: '3',
    gridColumn: '5',
  };

  const infoStyle = {
    gridRow: '1',
    gridColumn: '3 / span 2',
  };

  const pictureStyle = {
    gridRow: '2',
    gridColumn: '1',
    marginLeft: '1rem',
  };

  //   const [archived, setArchived] = useState(note.archived);
  const [thisNote, setThisNote] = useState(note);

  const restoreNote = () => {
    console.log(thisNote);
    setThisNote({ ...thisNote, archived: false });
    console.log(thisNote);
  };

  const archiveNote = () => {
    console.log(thisNote);
    setThisNote({ ...thisNote, archived: true });
    console.log(thisNote);
  };

  return (
    <div className="SingleNote" style={containerStyle}>
      <div className="picture" style={pictureStyle}>
        {props.props.picture}
      </div>
      <section className="basicInfo" style={infoStyle}>
        <div>Case Manager: {props.props.name}</div>
        <div>Date Created: {props.props.date}</div>
      </section>
      <section className="noteText" style={contentStyle}>
        {props.props.note}
      </section>
      {thisNote.archived === true ? (
        <Button style={buttonStyle} onClick={restoreNote}>
          Restore
        </Button>
      ) : (
        <Button style={buttonStyle} onClick={archiveNote}>
          Archive Note
        </Button>
      )}
    </div>
  );
}

export default SingleNote;