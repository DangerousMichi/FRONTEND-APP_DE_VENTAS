import CancelarVenta from "@/components/cancelarVenta";
import axios from "axios";
import Link from "next/link";


async function getVentas(){
    
    const url="http://localhost:3000/mostrarVentas";
    const ventas=await axios.get(url);
   // console.log(ventas)
   //console.log({process.env.BASE_URL});
    return ventas.data;
}
//noticias()
export default async function Ventas (){
    const ventas= await getVentas();
    return(
        <>
       
        <h1>Ventas</h1>
        <p>Estas en ventas</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>idUsuario</th>
                    <th>idProducto</th>
                    <th>cantidad</th>
                    <th>fecha</th>
                    <th>hora</th>
                    <th>Estatus</th>
                    <th>Editar/Cancelar</th>
                </tr>
            </thead>
            <tbody>
                {
                    ventas.map((ventas,i)=>(
                        <tr key={i}>
                        <td>{ventas.id}</td>
                        <td>{ventas.idUsuario}</td>
                        <td>{ventas.idProducto}</td>
                        <td>{ventas.cantidad}</td>
                        <td>{ventas.fecha}</td>
                        <td>{ventas.hora}</td>
                        <td>{ventas.estatus}</td>
                        <td>

<Link className="btn btn-primary btn-sm" rel="stylesheet" href={`/ventas/editar/${ventas.id}`} >EditarVenta</Link>                   <span> / </span>
                            <CancelarVenta id={ventas.id} /> 

                        </td>
                        
                        </tr>
                    ))
                } 
            </tbody>
        </table>

        <Link className="btn btn-primary btn-sm  mt-2 ml-5" rel="stylesheet" href={`/ventas/nuevo`} >Crear nueva venta</Link>
        </>

        
    );
}