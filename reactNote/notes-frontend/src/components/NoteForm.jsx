import React, { useState } from "react";

function NoteForm(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;
    props.onCreate({ title: title, content: content });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={function (e) {
          setContent(e.target.value);
        }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
