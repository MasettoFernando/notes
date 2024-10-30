import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthConfig from './useAuthConfig';

const useFetchNoteById = (id) => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const authConfig = useAuthConfig();

  useEffect(() => {
    const fetchNote = async () => {
      if (!authConfig) return; 

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/${id}`, authConfig);
        setNote(response.data);
      } catch (error) {
        console.error('Error fetching note:', error);
        setError('Error fetching note');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id, authConfig]);

  return { note, loading, error };
};

export default useFetchNoteById;
