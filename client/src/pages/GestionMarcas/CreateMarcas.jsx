import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/marcas";

const CreateMarcas = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const storeMarcas = async (e) => {
    Swal.fire("Agregado", "Tu Marcas ha sido agregado", "success");
    e.preventDefault();
    await axios.post(URI, { descripcion: descripcion });
    navigate("/gestionMarcas");
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Crear Marcas </h3>
      <form onSubmit={storeMarcas}>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Nombre del Marcas
          </label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Marcas
        </button>
      </form>
    </div>
  );
};

export default CreateMarcas;
