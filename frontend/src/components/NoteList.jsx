import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onEdit, onDelete }) {

  return (
    <ul>
      {notes.length === 0 ? (
        <h5>You have no notes created.</h5>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )
      }
    </ul>
  );
}

export default NoteList;
