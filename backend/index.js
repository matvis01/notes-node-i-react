require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(cors()); //to remove error

const PORT = 5000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());
const notesRoutes = require("./routes/notes.js");

app.use("/notes", notesRoutes);

app.listen(PORT, () =>
  console.log("Server running on port: http://localhost:" + PORT)
);
