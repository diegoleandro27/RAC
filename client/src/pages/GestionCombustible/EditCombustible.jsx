import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./gestionCombustible.css";
import Swal from "sweetalert2";
const URI = "http://localhost:3001/tipocombustible";

const EditCombustible = () => {
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCombustibleById();
  }, [id]);

  const getCombustibleById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setDescripcion(res.data.descripcion);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error fetching combustible:", error);
    }
  };

  const update = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        descripcion: descripcion,
      });
      Swal.fire("Actualizado", "Tu combustible ha sido Actualizado", "success");

      navigate("/gestionCombustible");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error updating combustible:", error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3>Editar combustible</h3>
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
          Actualizar Combustible
        </button>
      </form>
    </div>
  );
};

export default EditCombustible;
