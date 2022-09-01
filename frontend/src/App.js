import React, { useEffect, useState } from "react";
import Note from "./Note";
import EditingNote from "./EditingNote";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/notes",
});

function App() {
  useEffect(() => {
    api.get("/").then((res) => {
      setNotes(res.data);
    });
  }, []);

  const [notes, setNotes] = useState([]);

  const [editedNoteID, setEditedNoteID] = useState(0);

  const myNotes = notes.map((note) => {
    if (note._id === editedNoteID) {
      return (
        <EditingNote
          key={note._id}
          note={note}
          delete={(id) => deleteNote(id)}
          save={saveEditedNote}
        />
      );
    } else {
      return (
        <Note
          note={note}
          key={note._id}
          delete={(id) => deleteNote(id)}
          edit={changeEditedNote}
        />
      );
    }
  });

  async function saveEditedNote(id, title, body) {
    if (!title && !body) {
      deleteNote(id);
    }

    setNotes((prev) =>
      prev.map((e) => {
        if (e._id === id) {
          return { ...e, title: title, body: body };
        } else return e;
      })
    );

    await api.patch(`/${id}`, { title: title, body: body });
    setEditedNoteID(0);
  }

  function changeEditedNote(id) {
    setEditedNoteID(id);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((e) => e._id !== id));
    api.delete(`/${id}`);
  }

  async function addNote() {
    const res = await api.post("/", {});
    const id = res.data._id;
    setNotes([{ key: id, _id: id, title: "", body: "" }, ...notes]);
    setEditedNoteID(id);
  }

  return (
    <div className="App">
      <button className="addNote" onClick={addNote}>
        +
      </button>
      {myNotes}
    </div>
  );
}

export default App;
