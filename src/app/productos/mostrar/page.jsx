import BorrarProducto from "@/components/borrrarProducto";
import axios from "axios";
import Link from "next/link";


async function getProductos(){
    
    const url="http://localhost:3000/mostrarProductos";
    const productos=await axios.get(url);
   // console.log(productos)
   //console.log({process.env.BASE_URL});
    return productos.data;
}
//noticias()
export default async function Productos (){
    const productos= await getProductos();
    return(
        <>
       
        <h1>Productos</h1>
        <p>Estas en productos</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>nombre</th>
                    <th>descripcion</th>
                    <th>precio</th>
                    <th>stock</th>
                    <th>Editar/Borrar</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((productos,i)=>(
                        <tr key={i}>
                        <td>{productos.id}</td>
                        <td>{productos.nombre}</td>
                        <td>{productos.descripcion}</td>
                        <td>{productos.precio}</td>
                        <td>{productos.stock}</td>
                        <td>
                        <Link className="btn btn-primary btn-sm" rel="stylesheet" href={`/productos/editar/${productos.id}`} >Editar</Link>
                            <span> / </span>
                            <BorrarProducto id={productos.id} />
                        </td>
                        </tr>
                    ))
                } 
            </tbody>
        </table>
        
        <Link className="btn btn-primary btn-sm  mt-2 ml-5" rel="stylesheet" href={`/productos/nuevo`} >Crear nuevo producto</Link>
        </>
    );
}