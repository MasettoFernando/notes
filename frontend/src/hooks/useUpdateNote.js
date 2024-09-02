import axios from 'axios';
import useAuthConfig from './useAuthConfig'; 

const useUpdateNote = () => {
  const authConfig = useAuthConfig();

  const updateNote = async (id, updatedNote, setNotificationMessage, setShowButtons) => {
    try {
      if (!authConfig) return;

      await axios.put(`http://localhost:3100/api/${id}`, updatedNote, authConfig);
      setNotificationMessage('Note successfully edited');
      setShowButtons(false);
    } catch (err) {
      console.error('Error updating note:', err);
      setNotificationMessage('Error updating note');
      setShowButtons(false);
    }
  };

  return updateNote;
};

export default useUpdateNote;
