"use client";
import axios from "axios";
import { useEffect, useState } from "react";

async function editarVenta(e) {
    e.preventDefault();

    const idVenta = document.getElementById("id").value;
    const idUsuario = document.getElementById("idUsuario").value;
    const idProducto = document.getElementById("idProducto").value;
    const cantidad = document.getElementById("cantidad").value;

    if (!idUsuario.trim() || !idProducto.trim() || !cantidad.trim()) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
    }

    const url = `http://localhost:3000/editarVenta/${idVenta}`;
    const datos = {
        idUsuario: idUsuario,
        idProducto: idProducto,
        cantidad: cantidad
    };

    try {
        const respuesta = await axios.put(url, datos);
        console.log(respuesta.data);
        location.replace("http://localhost:3001/ventas/mostrar");
    } catch (error) {
        console.error("Error al editar la venta:", error);
    }
}

export default function Editar({ params }) {
    const [venta, setVenta] = useState({
        idUsuario: "",
        idProducto: "",
        cantidad: ""
    });

    useEffect(() => {
        async function cargarVenta() {
            try {
                // Llama a la API para obtener los datos del registro de la venta
                const respuesta = await axios.get(`http://localhost:3000/ventas/${params.id}`);
                setVenta(respuesta.data); // Almacena los datos en el estado
            } catch (error) {
                console.error("Error al cargar la venta:", error);
            }
        }
        cargarVenta();
    }, [params.id]);

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={editarVenta}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Venta</h1>
                    </div>
                    <div className="card-body">
                        <h6>idVenta:</h6>
                        <input id="id" value={params.id} className="form-control mb-3" type="text" disabled />
                        <input 
                            id="idUsuario" 
                            value={venta.idUsuario} 
                            onChange={(e) => setVenta({ ...venta, idUsuario: e.target.value })}
                            placeholder="idUsuario" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                        <input 
                            id="idProducto" 
                            value={venta.idProducto} 
                            onChange={(e) => setVenta({ ...venta, idProducto: e.target.value })}
                            placeholder="idProducto" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                        <input 
                            id="cantidad"  
                            value={venta.cantidad} 
                            onChange={(e) => setVenta({ ...venta, cantidad: e.target.value })}
                            placeholder="Cantidad" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-secondary col-12" type="submit">Guardar Modificaciones</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

