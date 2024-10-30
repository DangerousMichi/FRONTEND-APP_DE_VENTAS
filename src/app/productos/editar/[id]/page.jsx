"use client";
import axios from "axios";
import { useEffect, useState } from "react";

async function editarProducto(e) {
    e.preventDefault();
    
    const idProd = document.getElementById("id").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const stock = document.getElementById("stock").value;

    if (!descripcion.trim() || !precio.trim() || !stock.trim() ) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
    }

    const url = `http://localhost:3000/editarProducto/${idProd}`;
    const datos = {
        descripcion: descripcion,
        precio: precio,
        stock: stock
    };

    try {
        const respuesta = await axios.put(url, datos);
        console.log(respuesta.data);
        location.replace("http://localhost:3001/productos/mostrar");
    } catch (error) {
        console.error("Error al editar la producto:", error);
    }
}

export default function Editar({ params }) {
    const [producto, setProducto] = useState({
        descripcion: "",
        precio: "",
        stock: ""
    });

    useEffect(() => {
        async function cargarProducto() {
            try {
                // Llama a la API para obtener los datos del registro de la producto
                const respuesta = await axios.get(`http://localhost:3000/productos/${params.id}`);
                setProducto(respuesta.data); // Almacena los datos en el estado
            } catch (error) {
                console.error("Error al cargar la producto:", error);
            }
        }
        cargarProducto();
    }, [params.id]);

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={editarProducto}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Producto</h1>
                    </div>
                    <div className="card-body">
                        <h6>idProducto:</h6>
                        <input id="id" value={params.id} className="form-control mb-3" type="text" disabled />
                        <input 
                            id="descripcion" 
                            value={producto.descripcion} 
                            onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
                            placeholder="descripcion" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                        <input 
                            id="precio" 
                            value={producto.precio} 
                            onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                            placeholder="precio" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                        <input 
                            id="stock"  
                            value={producto.stock} 
                            onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
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

