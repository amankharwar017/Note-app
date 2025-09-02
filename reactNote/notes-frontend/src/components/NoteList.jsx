import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
  return (
    <div className="note-list">
      {props.notes.map(function (note) {
        return <NoteItem key={note.id} note={note} onDelete={props.onDelete} />;
      })}
    </div>
  );
}

export default NoteList;
