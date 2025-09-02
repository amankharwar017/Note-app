import React, { useState } from "react";
import "./NotesApp.css";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [manualId, setManualId] = useState("");

  function fetchNotes() {
    fetch("http://localhost:8081/api/notes/getAll")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setNotes(data);
      });
  }

  function createNote(note) {
    fetch("http://localhost:8081/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (newNote) {
        setNotes([newNote]); // show only the newly added note
      });
  }

  function deleteNote(id) {
    fetch("http://localhost:8081/api/notes/" + id, {
      method: "DELETE",
    }).then(function () {
      fetchNotes(); // refresh list after delete
    });
  }

  function deleteNoteById(id) {
    if (!id) return;
    fetch("http://localhost:8081/api/notes/" + id, {
      method: "DELETE",
    }).then(function () {
      setManualId(""); // clear input
      fetchNotes(); // refresh list silently
    });
  }

  return (
    <div className="container">
      <h2>Note App</h2>

      <NoteForm onCreate={createNote} />

      <button onClick={fetchNotes} className="load-btn">
        Load Notes
      </button>

      <div className="manual-delete">
        <input
          type="number"
          placeholder="Enter ID to delete"
          value={manualId}
          onChange={function (e) {
            setManualId(e.target.value);
          }}
        />
        <button
          onClick={function () {
            deleteNoteById(manualId);
          }}
        >
          Delete by ID
        </button>
      </div>

      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default NotesApp;
