import React, { useEffect, useState } from "react";
import axios from "axios";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/modelos";

const GestionModelo = () => {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    getModelos();
  }, []);

  const getModelos = async () => {
    try {
      const res = await axios.get(URI);
      setModelos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteModelo = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Modelo ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getModelos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Gestion de Modelo</h1>
      <Link to={"/createModelo"} className="btn btn-primary mb-2 btn-left">
        Crear Modelo
      </Link>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Nombre del Modelo</th>
              <th>Marca</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {modelos.map((item) => (
              <tr key={item.id}>
                <td>{item.nombreModelo}</td>
                <td>{item.marca.descripcion}</td>
                <td>
                  <Link to={`/putModelo/${item.id}`} className="btn btn-info">
                    Editar
                  </Link>
                  <button
                    onClick={() => {
                      deleteModelo(item.id);
                    }}
                    className="btn btn-danger ml-2"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestionModelo;
