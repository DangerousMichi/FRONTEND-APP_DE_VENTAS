"use client";
import axios from "axios";

export default function BorrarProducto({ id }) {
    const borrarProducto = async () => {
        try {
            const url = "http://localhost:3000/borrarProducto/"+ id;
            await axios.delete(url); // Asegúrate de que la ruta DELETE esté configurada en tu servidor
            alert("Producto borrado exitosamente.");
            location.reload(); // Recargar la página para ver los cambios
        } catch (error) {
            console.error("Error al borrar el produto:", error);
            alert("Hubo un problema al borrar el producto.");
        }
    };

    return (
        <button onClick={borrarProducto} className="btn btn-danger btn-sm">
            Borrar
        </button>
    );
}
