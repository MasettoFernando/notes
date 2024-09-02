
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Notification from '../components/Notification';
import NoteForm from '../components/NoteForm';
import useFetchNote from '../hooks/useFetchNoteById';
import useUpdateNote from '../hooks/useUpdateNote';
import '../App.css';

const EditNote = () => {
  const { id } = useParams();
  const { note, loading, error } = useFetchNote(id);
  const updateNote = useUpdateNote();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isArchived, setIsArchived] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setSelectedCategory(note.categoryId);
      setIsArchived(note.isArchived);
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content || !selectedCategory) {
      alert('Please complete all fields');
      return;
    }
    setNotificationMessage('Are you sure you want to edit this note?');
    setShowButtons(true);
  };

  const handleConfirm = () => {
    const updatedNote = {
      title,
      content,
      categoryId: selectedCategory,
      isArchived
    };
    updateNote(id, updatedNote, setNotificationMessage, setShowButtons);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='createEditContainer'>
      <h2>Edit your note</h2>
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
          onSubmit={handleSubmit}
          buttonText="Save Changes"
        />
      </div>
      <Notification 
        message={notificationMessage}
        onClose={() => setNotificationMessage('')}
        onConfirm={handleConfirm}
        showButtons={showButtons}
      />
    </div>
  );
};

export default EditNote;
