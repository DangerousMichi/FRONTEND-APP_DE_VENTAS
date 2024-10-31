"use client"; // Marca el componente como de cliente

import axios from "axios";
import { useEffect, useState } from "react";

export default function DetalleUniversidad({ params }) {
  const [universidad, setUniversidad] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchUniversidad = async () => {
      if (id) {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        const response = await axios.get(url);
        setUniversidad(response.data);
      }
    };

    fetchUniversidad();
  }, [id]);

  if (!universidad) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{universidad.name}</h1>
      <p><strong>Username:</strong> {universidad.username}</p>
      <p><strong>Email:</strong> {universidad.email}</p>
      <p><strong>Teléfono:</strong> {universidad.phone}</p>
      <p><strong>Sitio Web:</strong> <a href={`https://${universidad.website}`} target="_blank" rel="noopener noreferrer">{universidad.website}</a></p>
      <h2>Dirección</h2>
      <p><strong>Calle:</strong> {universidad.address.street}</p>
      <p><strong>Suite:</strong> {universidad.address.suite}</p>
      <p><strong>Ciudad:</strong> {universidad.address.city}</p>
      <p><strong>Código Postal:</strong> {universidad.address.zipcode}</p>
      <h2>Compañía</h2>
      <p><strong>Nombre:</strong> {universidad.company.name}</p>
      <p><strong>Catch Phrase:</strong> {universidad.company.catchPhrase}</p>
      <p><strong>BS:</strong> {universidad.company.bs}</p>
    </div>
  );
}
