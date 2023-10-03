import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/tipovehiculo";
const GestionTipoVehiculo = () => {
  const [tipoVehiculo, setTipoVehiculo] = useState([]);

  useEffect(() => {
    getTipoVehiculos();
  }, []);

  //mostrar tipo TipoVehiculos
  const getTipoVehiculos = async () => {
    try {
      const res = await axios.get(URI);
      setTipoVehiculo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar tipo TipoVehiculos
  const deleteTipoVehiculo = async (id) => {
    try {
      Swal.fire(
        "Eliminado",
        "Tu Tipo de Vehiculo ha sido eliminado",
        "success"
      );
      await axios.delete(`${URI}/${id}`);
      getTipoVehiculos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Tipo de Vehiculo</h1>
          <Link
            to={"/createTipoVehiculo"}
            className="btn btn-primary mb-2 btn-left"
          >
           Crear tipo de vehiculo
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Descripcion</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {tipoVehiculo.map((item) => (
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td>
                    <Link
                      to={`/putTipoVehiculo/${item.id}`}
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteTipoVehiculo(item.id);
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

export default GestionTipoVehiculo;
