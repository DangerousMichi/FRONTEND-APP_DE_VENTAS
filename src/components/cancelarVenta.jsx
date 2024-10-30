"use client";
import axios from "axios";

export default function CancelarVenta({ id }) {
    const cancelarProducto = async () => {
        try {
            const url = "http://localhost:3000/cancelarVenta/"+ id;
            await axios.post(url); // Asegúrate de que la ruta DELETE esté configurada en tu servidor
            alert("Venta cancelada exitosamente.");
            location.reload(); // Recargar la página para ver los cambios
        } catch (error) {
            console.error("Error al cancelar la venta:", error);
            alert("Hubo un problema al cancelar la venta.");
        }
    };

    return (
        <button onClick={cancelarProducto} className="btn btn-danger btn-sm">
            Cancelar
        </button>
    );
}
