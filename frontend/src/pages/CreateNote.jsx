import React, { useState } from 'react';
import Notification from '../components/Notification'; 
import NoteForm from '../components/NoteForm';
import useCreateNote from '../hooks/useCreateNote'; 
import '../App.css';

const CreateNote = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isArchived, setIsArchived] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');  
  const [showButtons, setShowButtons] = useState(false); 

  const handleCreate = useCreateNote(setNotificationMessage, setShowButtons); 

  const handleNotification = (e) => {
    e.preventDefault();
    setNotificationMessage('Are you sure you want to create this note?');
    setShowButtons(true); 
  };

  const handleCloseNotification = () => {
    setNotificationMessage('');
    setShowButtons(false);
  };

  return (
    <div className='createEditContainer'>
      <h2>Create your new note</h2>
      <div className='editCard'>

        <NoteForm 
          title={title} 
          setTitle={setTitle}
          content={content} 
          setContent={setContent}
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory}
          isArchived={isArchived} 
          setIsArchived={setIsArchived}
          onSubmit={handleNotification} 
          buttonText="Create note"
        />
      </div>
      <Notification 
        message={notificationMessage} 
        onClose={handleCloseNotification} 
        onConfirm={() => handleCreate(title, content, selectedCategory, isArchived)}
        showButtons={showButtons} 
      />
    </div>
  );
};

export default CreateNote;
