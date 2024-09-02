// services/noteService.js
const noteRepository = require('../Repository/note.repository');

const getNotes = async () => {
  return await noteRepository.findAll();
};

const getNotesByUserId = async (userId) => {
  try {
    const notes = await noteRepository.findByUserId(userId);
    return notes;
  } catch (error) {
    throw new Error('Error al procesar las notas');
  }
};

const getNoteById = async (id) => {
  return await noteRepository.findById(id);
};

const filterNotes = async (isArchived, categoryId, userId) => {
  const filtros = { userId }; // Siempre incluir el userId en los filtros

  if (isArchived !== undefined) {
    const lowerCaseArchived = isArchived.toLowerCase();
    if (lowerCaseArchived === 'true') {
      filtros.isArchived = true;
    } else if (lowerCaseArchived === 'false') {
      filtros.isArchived = false;
    } else {
      return {
        error: true,
        message: 'El valor de isArchived debe ser true o false.',
      };
    }
  }

  if (categoryId) {
    if (isNaN(categoryId)) {
      return {
        error: true,
        message: 'El valor de categoryId debe ser un número válido.',
      };
    }
    filtros.categoryId = parseInt(categoryId, 10);
  }

  try {
    const notes = await noteRepository.findByFilters(filtros);
    return notes;
  } catch (error) {
    return {
      error: true,
      message: 'Error al obtener las notas: ' + error.message,
    };
  }
};



const createNote = async (noteData) => {
  const { title, content, categoryId, userId, isArchived } = noteData;
  
  if (!title || !content || !categoryId) {
    throw new Error("El título, contenido y categoria son obligatorios");
  }

  return await noteRepository.create({
    title,
    content,
    categoryId,
    isArchived,
    userId,
  });
};


const updateNote = async (id, noteData) => {
  return await noteRepository.update(id, noteData);
};

const deleteNote = async (id) => {
  await noteRepository.remove(id);
};

const getNotesByCategoryId = async (categoryId) => {
  return await noteRepository.findNotesByCategoryId(categoryId);
};

const getNotesByIsArchived = async (isArchived) => {
  return await noteRepository.findNotesByIsArchived(isArchived);
};

const filterNotesByCategory = async (categoryId, userId) => {
  try {
      const notes = await noteRepository.findNotesByCategory(categoryId, userId);
      return notes;
  } catch (error) {
      throw new Error(`Error al filtrar notas por categoría: ${error.message}`);
  }
};

const filterNotesByArchived = async (isArchived, userId) => {
  try {
      const notes = await noteRepository.findNotesByArchived(isArchived, userId);
      return notes;
  } catch (error) {
      throw new Error(`Error al filtrar notas por estado archivado: ${error.message}`);
  }
};

module.exports = {
  getNotesByUserId,
  getNoteById,
  getNotes,
  filterNotes,
  createNote,
  updateNote,
  deleteNote,
  getNotesByCategoryId,
  getNotesByIsArchived,
  filterNotesByCategory,
  filterNotesByArchived,
};
