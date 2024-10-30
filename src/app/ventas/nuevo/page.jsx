"use client"
import axios from "axios";
async function nuevaVenta(e){
    e.preventDefault();
    console.log("Estas en nuevaVenta"); 
    const url="http://localhost:3000/nuevaVenta"
    const datos = {
        cantidad:document.getElementById("cantidad").value,
        idUsuario:document.getElementById("idUsuario").value,
        idProducto:document.getElementById("idProducto").value,
        
    }
    try {
        const respuesta = await axios.post(url, datos);
        console.log(respuesta.data);
        location.replace("http://localhost:3001/ventas/mostrar");
    } catch (error) {
        console.error("Error al editar la venta:", error);
    }
}
export default function Nuevo() {
    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5 " onSubmit={nuevaVenta} action="" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nueva Venta</h1>
                    </div>
                    <div className="card-body">

                        <input id="cantidad"  placeholder="+1"  className="form-control mb-3" type="text" />

                        <input id="idUsuario"  placeholder="idUsuario" className="form-control mb-3" type="text" />

                        <input id="idProducto" placeholder="idProducto" className="form-control mb-3" type="text" />


                    </div>

                    <div className="card-footer">
                        <button className="btn btn-secondary col-12 " type="submit" >Guardar Venta</button>
                    </div>

                </div>

            </form>
        </div>
    )
}