import React from 'react';

function NoteItem({ note, onEdit, onDelete }) {
  
  return (
  
      <li className='card'>
      <h4><strong>Title: </strong>{note.title}</h4>
      <p><strong>Content: </strong>{note.content}</p>
      <p><strong>Category:</strong> {note.category.name}</p>
      <p><strong>Archived:</strong> {note.isArchived ? 'Yes' : 'No'}</p>
      <div className='headerContainer'>
        <button onClick={() => onEdit(note.id)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </li>
    
  );
}

export default NoteItem;
