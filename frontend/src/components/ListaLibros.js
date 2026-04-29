function ListaLibros({ libros, onEliminar }) {
    // Si no hay libros registrados, mostramos un mensaje
    if (libros.length === 0) return <p>No hay libros registrados.</p>;

    // Recorremos el arreglo de libros y los mostramos
    return (
        <ul>
            {libros.map((libro) => (
                <li key={libro._id}>
                    {libro.titulo} - {libro.autor} ({libro.anio})
                    <button onClick={() => onEliminar(libro._id)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default ListaLibros;