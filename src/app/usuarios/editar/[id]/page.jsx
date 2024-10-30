"use client";
import axios from "axios";
import { useEffect, useState } from "react";

async function editarUsuario(e) {
    e.preventDefault();
    
    const idUsu = document.getElementById("id").value;
    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;

    if (!nombre.trim() || !usuario.trim()) {
        alert("Por favor, completa todos los campos antes de continuar.");
        return;
    }

    const url = `http://localhost:3000/editarUsuario/${idUsu}`;
    const datos = {
        nombre: nombre,
        usuario: usuario,
    };

    try {
        const respuesta = await axios.put(url, datos);
        console.log(respuesta.data);
        location.replace("http://localhost:3001/usuarios/mostrar");
    } catch (error) {
        console.error("Error al editar el usuario:", error);
    }
}

export default function Editar({ params }) {
    const [usuario, setUsuario] = useState({
        nombre: "",
        usuario: "",
    });

    useEffect(() => {
        async function cargarUsuario() {
            try {
                // Llama a la API para obtener los datos del registro de la usuario
                const respuesta = await axios.get(`http://localhost:3000/usuarios/${params.id}`);
                setUsuario(respuesta.data); // Almacena los datos en el estado
            } catch (error) {
                console.error("Error al cargar la usuario:", error);
            }
        }
        cargarUsuario();
    }, [params.id]);

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={editarUsuario}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar Usuario</h1>
                    </div>
                    <div className="card-body">
                        <h6>idUsuario:</h6>
                        <input id="id" value={params.id} className="form-control mb-3" type="text" disabled />
                        <input 
                            id="nombre" 
                            value={usuario.nombre} 
                            onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                            placeholder="nombre" 
                            className="form-control mb-3" 
                            type="text" 
                        />
                        <input 
                            id="usuario" 
                            value={usuario.usuario} 
                            onChange={(e) => setUsuario({ ...usuario, usuario: e.target.value })}
                            placeholder="usuario" 
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

