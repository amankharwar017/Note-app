import { useState } from "react";

export default function NoteForm({ onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newNote = { title, content };

    try {
      const res = await fetch("http://localhost:8081/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newNote),
      });

      if (!res.ok) {
        throw new Error("Failed to save note");
      }

      const savedNote = await res.json();
      console.log(savedNote);

      // 👈 call parent with the actual saved note
      onNoteAdded(savedNote);

      // Clear inputs
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error saving note:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
