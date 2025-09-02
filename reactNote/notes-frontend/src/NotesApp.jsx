import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => console.error("Error fetching notes:", err));
  }, []);

  const handleNoteAdded = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  const handleNoteDeleted = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1>My Notes</h1>
      <NoteForm onNoteAdded={handleNoteAdded} />
      <NoteList notes={notes} onNoteDeleted={handleNoteDeleted} />
    </div>
  );
}
