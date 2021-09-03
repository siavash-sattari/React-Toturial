import React from "react";
import Note from "./Note";

export default function StickyNote() {
  const notesData = [
    {title: "Tile #1", content: "Text Content #1"},
    {title: "Tile #2", content: "Text Content #2"},
    {title: "Tile #3", content: "Text Content #3"},
    {title: "Tile #4", content: "Text Content #4"},
    {title: "Tile #5", content: "Text Content #5"},
  ];

  const notes = notesData.map((note, index) => <Note key={index} title={note.title} content={note.content} />);

  return <ul>{notes}</ul>;
}
