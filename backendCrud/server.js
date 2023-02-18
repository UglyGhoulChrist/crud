const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 7777;
const notes = [
  {
    id: 1,
    content: "First Note",
  },
  {
    id: 2,
    content: "Second Note",
  },
];
let nextId = 3;
app.use(cors());
app.use(express.json()); // for parsing application/json

app.get("/", (req, res) => {
  res.send("HELLO SERVER");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});

app.post("/notes", (req, res) => {
  notes.push({ ...req.body, id: nextId++ });
  res.status(204).end();
});

app.delete("/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);
  const index = notes.findIndex((note) => note.id === noteId);
  if (index !== -1) {
    notes.splice(index, 1);
  }
  res.status(204).end();
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else console.log("Server OK");
});
