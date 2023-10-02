import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./gestionTipoVehiculo.css";
import Swal from "sweetalert2";
const URI = "http://localhost:3001/tipovehiculo";

const EditTipoVehiculo = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getTipoVehiculoById();
  }, [id]);

  const getTipoVehiculoById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setDescripcion(res.data.descripcion);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error al pedir los tipo de Vehiculo:", error);
    }
  };

  const update = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        descripcion: descripcion,
      });
      Swal.fire(
        "Actualizado",
        "Tu tipo de vehiculo ha sido Actualizado",
        "success"
      );

      navigate("/gestionTipoVehiculo");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error actualizando los tipos de vehiculo:", error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3>Editar tipo de vehiculo</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="form-control text-center"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar tipo de vehiculo
        </button>
      </form>
    </div>
  );
};

export default EditTipoVehiculo;
