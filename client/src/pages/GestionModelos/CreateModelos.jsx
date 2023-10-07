import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/modelos";
const MARCAS_URI = "http://localhost:3001/marcas";
const CreateModelo = () => {
  const [marcas, setMarcas] = useState([]);
  const [idmarcas, setIdMarcas] = useState("");
  const [nombremodelo, setNombreModelo] = useState("");
  const navigate = useNavigate();

  const storeModelos = async (e) => {
    Swal.fire("Agregado", "Tu Modelo ha sido agregado", "success");
    e.preventDefault();
    await axios.post(URI, { idmarcas: idmarcas, nombremodelo: nombremodelo });
    navigate("/gestionModelos");
  };

  useEffect(() => {
    getMarcas();
  }, []);

  const getMarcas = async () => {
    try {
      const res = await axios.get(MARCAS_URI);
      setMarcas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Crear Modelos </h3>
      <form onSubmit={storeModelos}>
        <div className="col-12">
          <label htmlFor="inputTarjeta" className="form-label">
            Marca
          </label>
          <select
            id="inputTarjeta"
            className="form-select"
            value={idmarcas}
            onChange={(e) => {
              setIdMarcas(e.target.value);
            }}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {marcas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Nombre del Modelo
          </label>
          <input
            type="text"
            value={nombremodelo}
            onChange={(e) => setNombreModelo(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar Modelo
        </button>
      </form>
    </div>
  );
};

export default CreateModelo;
