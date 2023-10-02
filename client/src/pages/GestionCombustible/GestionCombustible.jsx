import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./gestionCombustible.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/tipocombustible";
const GestionCombustible = () => {
  const [combustible, setCombustible] = useState([]);

  useEffect(() => {
    getCombustibles();
  }, []);

  //mostrar tipo combustibles
  const getCombustibles = async () => {
    try {
      const res = await axios.get(URI);
      setCombustible(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar tipo combustibles
  const deleteCombustible = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu combustible ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getCombustibles();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de combustible</h1>
          <Link
            to={"/createCombustible"}
            className="btn btn-primary mb-2 btn-left"
          >
            Crear Combustible
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Descripcion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {combustible.map((item) => (
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td>
                    <Link
                      to={`/putCombustible/${item.id}`}
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteCombustible(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      <i className="fa-solid fa-delete-left"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionCombustible;
