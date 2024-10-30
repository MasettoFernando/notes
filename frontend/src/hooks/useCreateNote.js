import axios from 'axios';
import useAuthConfig from './useAuthConfig';

const useCreateNote = (setNotificationMessage, setShowButtons) => {
  const authConfig = useAuthConfig(); 

  const handleSubmit = async (title, content, selectedCategory, isArchived) => {
    if (!title || !content || !selectedCategory) {
      setNotificationMessage('Please complete all fields');
      setShowButtons(false);
      return;
    }

    if (!authConfig) return;

    const newNote = {
      title,
      content,
      categoryId: selectedCategory,
      isArchived
    };

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api`, newNote, authConfig);

      setNotificationMessage('Note successfully created');
      setShowButtons(false); 
    } catch (error) {
      console.error('Error creating note:', error);
      setNotificationMessage('Error creating note');
      setShowButtons(false);
    }
  };

  return handleSubmit; 
};

export default useCreateNote;
