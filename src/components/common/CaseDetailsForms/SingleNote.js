import { Button } from 'antd';
import React, { useState } from 'react';

function SingleNote(props) {
  const note = props.props;

  const [thisNote, setThisNote] = useState(note);

  const restoreNote = () => {
    setThisNote({ ...thisNote, archived: false });
  };

  const archiveNote = () => {
    setThisNote({ ...thisNote, archived: true });
  };

  return (
    <div className="SingleNote__Container">
      <div className="SingleNote__Picture">{props.props.picture}</div>
      <section className="SingleNote__InfoStyle">
        <h4 className="SingleNote__InfoStyle__HeaderStyle">
          Case Manager: {props.props.name}
        </h4>
        <h4 className="SingleNote__InfoStyle__HeaderStyle">
          Date Created: {props.props.date}
        </h4>
      </section>
      <section className="SingleNote__NoteText">{props.props.note}</section>
      {thisNote.archived === true ? (
        <Button
          type="primary"
          className="ant-btn-primary-notes"
          onClick={restoreNote}
        >
          Restore
        </Button>
      ) : (
        <Button
          type="primary"
          className="ant-btn-primary-notes"
          onClick={archiveNote}
        >
          Archive Note
        </Button>
      )}
    </div>
  );
}

export default SingleNote;
