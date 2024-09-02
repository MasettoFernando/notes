const { Router } = require("express");
const authMiddleware = require("../Middlewares/authenticateToken.js");
const noteController = require("../Controllers/note.controller.js");

const router = Router();

// Proteger todas las rutas de notas con autenticación
router.use(authMiddleware);

router.get("/", noteController.getNotes)

// Obtener una nota específica por su ID
router.get("/:id", noteController.getNoteById);

// Eliminar una nota específica del usuario autenticado
router.delete("/:id", noteController.eliminarNota);

// Crear una nueva nota para el usuario autenticado
router.post("/", noteController.crearNota);

// Modificar una nota específica del usuario autenticado
router.put("/:id", noteController.modificarNota);

// Filtrar las notas del usuario autenticado
router.get("/filter", noteController.filtrarNotas);

// Ruta para filtrar por categoría
router.get('/filter/categoryId', noteController.filterNotesByCategory);

// Ruta para filtrar por archivado
router.get('/filter/isArchived', noteController.filterNotesByArchived);

module.exports = router;
