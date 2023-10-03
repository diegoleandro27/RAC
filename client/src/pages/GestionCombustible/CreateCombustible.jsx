import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/tipocombustible";

const CreateCombustible = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    Swal.fire("Agregado", "Tu combustible ha sido agregado", "success");
    e.preventDefault();
    await axios.post(URI, { descripcion: descripcion });
    navigate("/gestionCombustible");
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Create combustible </h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Nombre del combustible
          </label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CreateCombustible;
