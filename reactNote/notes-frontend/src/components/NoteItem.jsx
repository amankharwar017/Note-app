import React from "react";

function NoteItem(props) {
  return (
    <div className="note-box">
      <div>
        <strong>ID:</strong> {props.note.id}
        <br />
        <strong>Title:</strong> {props.note.title}
        <br />
        <strong>Content:</strong> {props.note.content}
      </div>
      <button
        className="delete-btn"
        onClick={function () {
          props.onDelete(props.note.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default NoteItem;
