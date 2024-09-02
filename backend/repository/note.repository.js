// repositories/noteRepository.js
const { Note, Category, User } = require('../models');

const findAll = async () => {
  return await Note.findAll();
};

const findByFilters = async (filtros) => {
  try {
    const notes = await Note.findAll({
      where: filtros,
    });
    return notes;
  } catch (error) {
    throw new Error('Error al buscar Notas con los filtros proporcionados: ' + error.message);
  }
};


const findByUserId = async (userId) => {
  try {
    const notes = await Note.findAll({
      where: { userId },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: [ 'name']
        },
        {
          model: User,
          as: 'user',
          attributes: [ 'username']
        }
      ]
    });
    return notes;
  } catch (error) {
    throw new Error('Error al obtener las Notas desde la base de datos');
  }
};

const findById = async (id) => {
  return await Note.findByPk(id, {
    include: [
      {
        model: Category,
        as: 'category',
        attributes: ['name'],
      },
      {
        model: User,
        as: 'user',
        attributes: ['username'],
      },
    ],
  });
};

const create = async (noteData) => {
  return await Note.create(noteData);
};

const update = async (id, noteData) => {
  const note = await Note.findByPk(id) ;
  if (!note) {
    throw new Error("Nota no encontrada");
  }
  return await note.update(noteData);
};

const remove = async (id) => {
  const note = await Note.findByPk(id);
  if (!note) {
    throw new Error("Nota no encontrada");
  }
  return await note.destroy();
};

const findNotesByCategoryId = async (categoryId) => {
  return await Note.findAll({ where: { categoryId } });
};

const findNotesByIsArchived = async (isArchived) => {
  return await Note.findAll({ where: { isArchived } });
};

const findNotesByCategory = async (categoryId, userId) => {
  try {
    return await Note.findAll({
      where: {
        categoryId,
        userId, // Filtrar por el usuario
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name']
        },
        {
          model: User,
          as: 'user',
          attributes: ['username']
        }
      ]
    });
  } catch (error) {
    throw new Error(`Error al buscar Notas por categoría: ${error.message}`);
  }
};


const findNotesByArchived = async (isArchived, userId) => {
  try {
    return await Note.findAll({
      where: {
        isArchived,
        userId, // Filtrar por el usuario
      },
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['name']
        },
        {
          model: User,
          as: 'user',
          attributes: ['username']
        }
      ]
    });
  } catch (error) {
    throw new Error(`Error al buscar Notas por estado archivado: ${error.message}`);
  }
};


module.exports = {
  findByUserId,
  findByFilters,
  findById,
  findAll,
  create,
  update,
  remove,
  findNotesByCategoryId,
  findNotesByIsArchived,
  findNotesByCategory,
  findNotesByArchived,
};
