const express = require("express");
const router = express.Router();
const Note = require("../models/note.js");

//get all
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one
router.get("/:id", getNote, async (req, res) => {
  res.json(res.note);
});

//create one
router.post("/", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    body: req.body.body,
  });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//update one
router.patch("/:id", getNote, async (req, res) => {
  if (req.body.title) {
    res.note.title = req.body.title;
  }
  if (req.body.body) {
    res.note.body = req.body.body;
  }
  if (req.body.timeToDo) {
    res.note.timeToDo = req.body.timeToDo;
  }

  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one
router.delete("/:id", getNote, async (req, res) => {
  try {
    await res.note.remove();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    const notes = await Note.find();
    notes.forEach((e) => e.remove());
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "cant find note" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.note = note;
  next();
}

module.exports = router;
