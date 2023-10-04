import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/marcas";
const GestionMarcas = () => {
  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    getMarcas();
  }, []);

  //mostrar tipo Marcass
  const getMarcas = async () => {
    try {
      const res = await axios.get(URI);
      setMarcas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar tipo Marcass
  const deleteMarcas = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Marcas ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getMarcas();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Marcas</h1>
          <Link to={"/createMarcas"} className="btn btn-primary mb-2 btn-left">
            Crear Marcas
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Descripcion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {marcas.map((item) => (
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td>
                    <Link to={`/putMarcas/${item.id}`} className="btn btn-info">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteMarcas(item.id);
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

export default GestionMarcas;
