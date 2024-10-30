import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthConfig from './useAuthConfig';

const useFetchNotes = (selectedCategory, isArchived) => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  
  const authConfig = useAuthConfig();

  useEffect(() => {
    const fetchNotes = async () => {
      if (!authConfig) return;
      
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api`, authConfig);
        setNotes(response.data.notes);
      } catch (error) {
        console.error('Error al obtener las notas:', error);
        setNotes([]);
      }
    };

    fetchNotes();
  }, [authConfig]); 

  useEffect(() => {
    let filtered = notes;

    if (selectedCategory) {
      filtered = filtered.filter(note => note.categoryId === parseInt(selectedCategory));
    }

    if (isArchived) {
      filtered = filtered.filter(note => note.isArchived);
    } else {
      filtered = filtered.filter(note => !note.isArchived);
    }

    setFilteredNotes(filtered);
  }, [notes, selectedCategory, isArchived]);

  // Nueva función para eliminar notas
  const removeNote = (noteToDelete) => {
    setNotes((prevNotes) => prevNotes.filter(note => note.id !== noteToDelete));
    setFilteredNotes((prevNotes) => prevNotes.filter(note => note.id !== noteToDelete));
  };

  return {  filteredNotes, removeNote };
};

export default useFetchNotes;
