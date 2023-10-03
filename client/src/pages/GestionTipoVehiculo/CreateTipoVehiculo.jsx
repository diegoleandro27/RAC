import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/tipovehiculo";

const CreateTipoVehiculo = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    Swal.fire("Agregado", "Tu tipo de vehiculo ha sido agregado", "success");
    e.preventDefault();
    await axios.post(URI, { descripcion: descripcion });
    navigate("/gestionTipoVehiculo");
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Crear un tipo de vehiculo </h3>
      <form onSubmit={store}>
        <div className="mb-3">
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

export default CreateTipoVehiculo;
