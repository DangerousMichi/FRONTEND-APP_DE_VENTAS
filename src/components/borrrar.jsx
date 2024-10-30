"use client";
import axios from "axios";

export default function BorrarUsuario({ id }) {
    const borrarUsuario = async () => {
        try {
            const url = "http://localhost:3000/borrarUsuario/"+ id;
            await axios.delete(url); // Asegúrate de que la ruta DELETE esté configurada en tu servidor
            alert("Usuario borrado exitosamente.");
            location.reload(); // Recargar la página para ver los cambios
        } catch (error) {
            console.error("Error al borrar el usuario:", error);
            alert("Hubo un problema al borrar el Usuario.");
        }
    };

    return (
        <button onClick={borrarUsuario} className="btn btn-danger btn-sm">
            Borrar
        </button>
    );
}
