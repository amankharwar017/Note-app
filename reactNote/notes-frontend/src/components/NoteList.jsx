export default function NoteList({ notes, onNoteDeleted }) {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8081/api/notes/${id}`, { method: "DELETE" });
    onNoteDeleted(id);
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
