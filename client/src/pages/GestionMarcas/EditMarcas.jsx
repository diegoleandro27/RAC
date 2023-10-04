import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";
const URI = "http://localhost:3001/marcas";

const EditMarcas = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMarcasById();
  }, [id]);

  const getMarcasById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setDescripcion(res.data.descripcion);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error fetching Marcas:", error);
    }
  };

  const updateMarcas = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        descripcion: descripcion,
      });
      Swal.fire("Actualizado", "Tu Marcas ha sido Actualizado", "success");

      navigate("/gestionMarcas");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error updating Marcas:", error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3>Editar Marcas</h3>
      <form onSubmit={updateMarcas}>
        <div className="mb-3">
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="form-control text-center"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar Marcas
        </button>
      </form>
    </div>
  );
};

export default EditMarcas;
