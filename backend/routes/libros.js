import express from "express";
import libro from "../models/libro.js";

const router = express.Router();

// Obtener todos los libros
router.get("/", async (req, res) => {
  const libros = await libro.find(); // Consultamos todos los libros en la BD
  res.json(libros); // Los devolvemos en formato JSON
});

// Agregar un libro
router.post("/", async (req, res) => {
  const { titulo, autor, anio } = req.body;

  // Validamos que los datos estén completos
  if (!titulo || !autor || !anio) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  // Creamos un nuevo libro con los datos recibidos
  const nuevoLibro = new libro({ titulo, autor, anio });
  await nuevoLibro.save(); // Guardamos en MongoDB

  res.json(nuevoLibro); // Retornamos el libro guardado
});

// Eliminar un libro por ID
router.delete("/:id", async (req, res) => {
  await libro.findByIdAndDelete(req.params.id); // Buscamos y eliminamos por ID
  res.json({ mensaje: "Libro eliminado correctamente" });
});

export default router;