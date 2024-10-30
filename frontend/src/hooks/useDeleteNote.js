import axios from 'axios';
import useAuthConfig from './useAuthConfig'; 

const useDeleteNote = (removeNote, setNotificationMessage, setShowButtons) => {
  const authConfig = useAuthConfig(); 


  const handleDelete = async (noteToDelete, setNoteToDelete) => {
    if (!authConfig) return; 
    if (noteToDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/${noteToDelete}`, authConfig);

        removeNote(noteToDelete);

        setNoteToDelete(null);
        setNotificationMessage('Note successfully deleted');
        setShowButtons(false); 
      } catch (error) {
        console.error('Error deleting note:', error);
        setNotificationMessage('Error deleting note');
        setShowButtons(false);
      }
    } else {
      console.error('No note selected for deletion');
    }
  };

  return handleDelete;
};

export default useDeleteNote;
