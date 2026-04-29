import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // ✅ corregido
import FormularioLibro from "./components/FormularioLibro";
import ListaLibros from "./components/ListaLibros";

function App() {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/libros")
      .then(res => setLibros(res.data))
      .catch(err => console.error("Error cargando libros:", err));
  }, []);

  const agregarLibro = (libro) => {
    axios.post("http://localhost:4000/api/libros", libro)
      .then(res => setLibros([...libros, res.data]))
      .catch(err => console.error("Error agregando libro:", err));
  };

  const eliminarLibro = (id) => {
    axios.delete(`http://localhost:4000/api/libros/${id}`)
      .then(() => setLibros(libros.filter(l => l._id !== id)))
      .catch(err => console.error("Error eliminando libro:", err));
  };

  return (
    <div>
      <h1>📚 Biblioteca</h1>
      <FormularioLibro onLibroAgregado={agregarLibro} />
      <ListaLibros libros={libros} onEliminar={eliminarLibro} />
    </div>
  );
}

export default App;
