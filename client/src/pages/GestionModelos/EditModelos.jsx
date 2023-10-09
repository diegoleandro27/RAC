import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/modelos";
const MARCAS_URI = "http://localhost:3001/marcas"; // Añadiendo el acceso a la api de marcas para adquirir sus datos

const EditModelo = () => {
  const [idmarcas, setIdMarcas] = useState("");
  const [nombreModelo, setNombreModelo] = useState("");
  const [marcas, setMarcas] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getModeloById();
    getMarcas();
  }, [id]);

  const getModeloById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setIdMarcas(res.data.idmarcas);
      setNombreModelo(res.data.nombreModelo);
    } catch (error) {
      console.error("Error fetching Modelo:", error);
    }
  };

  const getMarcas = async () => {
    try {
      const res = await axios.get(MARCAS_URI);
      setMarcas(res.data);
    } catch (error) {
      console.error("Error fetching Marcas:", error);
    }
  };

  const updateModelo = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        idmarcas: idmarcas,
        nombreModelo: nombreModelo,
      });
      Swal.fire("Actualizado", "Tu Modelo ha sido Actualizado", "success");
      navigate("/gestionModelos");
    } catch (error) {
      console.error("Error updating Modelo:", error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3>Editar Modelo</h3>
      <form onSubmit={updateModelo}>
        <div className="mb-3">
          <label htmlFor="selectMarca" className="form-label">
            Marca
          </label>
          <select
            id="selectMarca"
            className="form-select"
            value={idmarcas}
            onChange={(e) => setIdMarcas(e.target.value)}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nombreModelo" className="form-label">
            Nombre del Modelo
          </label>
          <input
            type="text"
            value={nombreModelo}
            onChange={(e) => setNombreModelo(e.target.value)}
            className="form-control"
            id="nombreModelo"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Actualizar Modelo
        </button>
      </form>
    </div>
  );
};

export default EditModelo;
