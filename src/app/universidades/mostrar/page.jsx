import axios from "axios";
import Link from "next/link";

// Función para obtener las universidades desde la API
async function getUniversidades() {
  const url = "https://jsonplaceholder.typicode.com/users"; // URL de ejemplo, reemplaza con tu API real
  const response = await axios.get(url);
  return response.data;
}

export default async function Universidades() {
  const universidades = await getUniversidades();

  return (
    <>
      <h1>Universidades</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          {universidades.map((universidad) => (
            <tr key={universidad.id}>
              <td>{universidad.id}</td>
              <td>
                <Link href={`/universidades/mostrar/${universidad.id}`}>
                  {universidad.name}
                </Link>
              </td>
              <td>{universidad.email}</td>
              <td>{universidad.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Estás en la página de universidades</p>
    </>
  );
}
