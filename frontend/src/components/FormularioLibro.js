import { useState } from "react";

// El componente recibe una función (prop) llamada onLibroAgregado
// que será la encargada de enviar los datos al backend
function FormularioLibro({ onLibroAgregado }) {
    // Definimos estados para cada campo del formulario
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [anio, setAnio] = useState("");

    // Función que se ejecuta al enviar el formulario
    const enviarLibro = (e) => {
        e.preventDefault(); // Evita recargar la página

        // Validamos que los campos no estén vacíos
        if (!titulo || !autor || !anio) {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Enviamos los datos al padre (App.js)
        onLibroAgregado({ titulo, autor, anio });

        // Limpiamos los campos del formulario
        setTitulo("");
        setAutor("");
        setAnio("");
    };

    // JSX → estructura visual del formulario
    return (
        <form onSubmit={enviarLibro}>
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />
            <input
                type="number"
                placeholder="Año"
                value={anio}
                onChange={(e) => setAnio(e.target.value)}
            />
            <button type="submit">Agregar Libro</button>
        </form>
    );
}

export default FormularioLibro;