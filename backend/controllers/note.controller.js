const noteService = require('../services/note.services');

const getNotes = async (req, res) => {
  const userId = req.user.userId; 
  try {
    const notes = await noteService.getNotesByUserId(userId);
    res.json({ notes });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'El ID de la nota es obligatorio' });
  }

  try {
    const note = await noteService.getNoteById(id);
    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }
    res.json(note);
  } catch (error) {
    console.error('Error al obtener la nota:', error);
    res.status(500).json({ message: 'Error al obtener la nota' });
  }
};

const filtrarNotas = async (req, res) => {
  let { isArchived, categoryId } = req.query;
  const userId = req.user.id;

  isArchived = isArchived === 'true' ? true : isArchived === 'false' ? false : undefined;

  try {
    
    const result = await noteService.filterNotes(isArchived, categoryId, userId);

    if (result.error) {
      console.error('Error en el servicio:', result.message);
      return res.status(400).json({ message: result.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "No se encontraron notas que coincidan con los criterios de filtrado." });
    }

    res.status(200).json({ notas: result, message: "Notas filtradas exitosamente" });
  } catch (error) {
    console.error(`Error en filtrarNotas: ${error.message}`, error.stack);
    return res.status(500).json({ message: `Error al obtener las notas: ${error.message}` });
  }
};


const crearNota = async (req, res) => {

  const { title, content, categoryId } = req.body;

  if (!title || !content || !categoryId) {
    return res.status(400).json({ message: 'El título, el contenido y la categoria son obligatorios' });
  }

  try {
    const userId = req.user?.userId;

    const nuevaNota = await noteService.createNote({ ...req.body, userId });
    
    res.status(201).send({ nuevaNota, message: "Nota creada exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



const modificarNota = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'El ID de la nota es obligatorio' });
  }

  if (!title || !content || !categoryId) {
    return res.status(400).json({ message: 'El título, el contenido y la categoría son obligatorios' });
  }

  try {
    const nota = await noteService.updateNote(id, req.body);
    res.send({ nota, message: "Nota modificada exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const eliminarNota = async (req, res) => {
  const { id } = req.params;
  try {
    await noteService.deleteNote(id);
    res.send({ message: "Nota eliminada exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const filterNotesByCategory = async (req, res) => {
  const { categoryId } = req.query;
  const userId = req.user.userId; 

  try {
      const notes = await noteService.filterNotesByCategory(categoryId, userId);
      if (notes.length === 0) {
          return res.status(404).json({ message: "No se encontraron notas para la categoría seleccionada y el usuario." });
      }

      res.status(200).json({ notes, message: "Notas filtradas exitosamente por categoría." });
  } catch (error) {
      console.error(`Error en filterNotesByCategory: ${error.message}`);
      return res.status(500).json({ message: "Error al filtrar notas por categoría." });
  }
};

const filterNotesByArchived = async (req, res) => {
  let { isArchived } = req.query;
  const userId = req.user.userId; 

  
  isArchived = isArchived === 'true' ? true : isArchived === 'false' ? false : undefined;

  try {
      const notes = await noteService.filterNotesByArchived(isArchived, userId);
      if (notes.length === 0) {
          return res.status(404).json({ message: "No se encontraron notas archivadas para el usuario." });
      }

      res.status(200).json({ notes, message: "Notas filtradas exitosamente por estado archivado." });
  } catch (error) {
      console.error(`Error en filterNotesByArchived: ${error.message}`);
      return res.status(500).json({ message: "Error al filtrar notas por estado archivado." });
  }
};


module.exports = {
  getNotes,
  crearNota,
  filtrarNotas,
  getNoteById,
  modificarNota,
  eliminarNota,
  filterNotesByCategory,
  filterNotesByArchived,
};
