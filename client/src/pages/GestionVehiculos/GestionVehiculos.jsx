import React, { useEffect, useState } from "react";
import axios from "axios";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/vehiculos";

const GestionVehiculo = () => {
  const [Vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    getVehiculos();
  }, []);

  const getVehiculos = async () => {
    try {
      const res = await axios.get(URI);
      setVehiculos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteVehiculo = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Vehiculo ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getVehiculos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Vehiculo</h1>
          <Link
            to={"/createVehiculo"}
            className="btn btn-primary mb-2 btn-left"
          >
            Crear Vehiculo
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Vin</th>
                <th>Numero de motor</th>
                <th>Numero de placa</th>
                <th>Tipo de Vehiculo</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Tipo Combustible</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Vehiculos.map((item) => (
                <tr key={item.id}>
                  <td>{item.descripcion}</td>
                  <td>{item.vin}</td>
                  <td>{item.nmotor}</td>
                  <td>{item.nplaca}</td>
                  <td>{item.tipovehiculo.descripcion}</td>
                  <td>{item.marca.descripcion}</td>
                  <td>{item.modelo.nombreModelo}</td>
                  <td>{item.combustible.descripcion}</td>
                  <td>
                    <Link
                      to={`/putVehiculo/${item.id}`}
                      className="btn btn-info"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteVehiculo(item.id);
                      }}
                      className="btn btn-danger ml-2"
                    >
                      Delete
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

export default GestionVehiculo;
