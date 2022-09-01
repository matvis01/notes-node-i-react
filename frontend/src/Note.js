import React from "react";

export default function Note(props) {
  return (
    <div className="note">
      <div className="note--content">
        <h1>{props.note.title}</h1>
        <p>{props.note.body}</p>
        <div className="note--buttons">
          <button
            onClick={() => props.delete(props.note._id)}
            className="delete"
          >
            delete
          </button>
          <button onClick={() => props.edit(props.note._id)} className="edit">
            edit
          </button>
        </div>
      </div>
    </div>
  );
}
