import React, { useEffect, useState } from "react";

export default function EditingNote(props) {
  const [title, setTitle] = useState(props.note.title);
  const [body, setBody] = useState(props.note.body);

  function saveTitle(event) {
    setTitle(event.target.value);
  }
  function saveBody(event) {
    setBody(event.target.value);
  }

  return (
    <div className="note">
      <div className="note--input">
        <input
          placeholder="Title"
          defaultValue={props.note.title}
          onChange={saveTitle}
        ></input>
        <br></br>
        <input
          placeholder="body"
          defaultValue={props.note.body}
          onChange={saveBody}
        ></input>
        <div className="note--edit--buttons">
          <button
            onClick={() => props.delete(props.note._id)}
            className="delete"
          >
            delete
          </button>
          <button
            onClick={() => props.save(props.note._id, title, body)}
            className="save"
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
