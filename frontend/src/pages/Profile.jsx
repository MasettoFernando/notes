import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification'; 
import useDeleteNote from '../hooks/useDeleteNote';
import useFetchNotes from '../hooks/useFetchNotes';
import Header from '../components/Header';
import Filters from '../components/Filters';
import NoteList from '../components/NoteList';

function Profile() {
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [isArchived, setIsArchived] = useState(false); 
  const [notificationMessage, setNotificationMessage] = useState('');  
  const [showButtons, setShowButtons] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null); 

  const { filteredNotes, removeNote } = useFetchNotes(selectedCategory, isArchived);
  const handleDelete = useDeleteNote(removeNote, setNotificationMessage, setShowButtons);

  const navigate = useNavigate();

  const confirmDelete = (noteId) => {
    setNoteToDelete(noteId);
    setNotificationMessage('Are you sure you want to delete this note?');
    setShowButtons(true); 
  };

  const handleCloseNotification = () => {
    setNotificationMessage('');
    setShowButtons(false);
    setNoteToDelete(null); 
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  return (
    <div className='container'>
      <h2>Profile</h2>
      <h3>Your Notes</h3>

      <Header onLogout={handleLogout} onCreateNote={() => navigate('/create-note')} />

      <Filters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isArchived={isArchived}
        setIsArchived={setIsArchived}
      />

      <NoteList
        notes={filteredNotes}
        onEdit={(noteId) => navigate(`/edit-note/${noteId}`)}
        onDelete={confirmDelete}
      />

      {notificationMessage && (
        <Notification 
          message={notificationMessage} 
          onClose={handleCloseNotification} 
          onConfirm={showButtons ? () => handleDelete(noteToDelete, setNoteToDelete) : null} 
          showButtons={showButtons} 
        />
      )}
    </div>
  );
}

export default Profile;
