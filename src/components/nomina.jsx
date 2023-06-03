import { useState } from "react";

const BaseColaboradores = [
  {
    id: "1",
    nombre: "Colaborador 1",
    correo: "colaborador1@colaborador1.com"
  },
  {
    id: "2",
    nombre: "Colaborador 2",
    correo: "colaborador2@colaborador2.com"
  },
  {
    id: "3",
    nombre: "Colaborador 3",
    correo: "colaborador3@colaborador3.com"
  },
];

export default function Nomina() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [filtro, setFiltro] = useState("");

  const NombreChange = (event) => {
    setNombre(event.target.value);
  };

  const CorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const AgregarColaborador = () => {
    const id = String(colaboradores.length + 1);
    const nuevoColaborador = {
      id: id,
      nombre: nombre,
      correo: correo
    };
    setColaboradores([...colaboradores, nuevoColaborador]);
    setNombre("");
    setCorreo("");
  };

  const FiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    return colaborador.nombre.toLowerCase().includes(filtro.toLowerCase());
  });

  return (
    <div class="home">
      <div class="search">
        <div class="title">
          <h1>Búsqueda de colaboradores</h1>
        </div>
        <div class="filt">
          <input
          type="text"
          placeholder="Filtrar por nombre"
          value={filtro}
          onChange={FiltroChange}
          />
        </div>
      </div>
      <div class="plus">
        <div class="title2">
          <h2>Agregar Colaborador</h2>
        </div>
        <div class="form">
          <label>
            Nombre del colaborador:
            <input type="text" value={nombre} onChange={NombreChange} />
          </label>
        </div>
        <div class="form">
          <label>
            Correo del colaborador:
          <input type="text" value={correo} onChange={CorreoChange} />
          </label>
        </div>
        <div class="click">
          <button onClick={AgregarColaborador}>Agregar Colaborador</button>
          </div>
      </div>
      <ul>
        {colaboradoresFiltrados.map((colaborador) => (
          <li key={colaborador.id}>
            {colaborador.nombre} ({colaborador.correo})
          </li>
        ))}
      </ul>
    </div>
  );
}