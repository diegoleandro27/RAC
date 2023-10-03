import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/clientes";
const GestionClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes();
  }, []);

  //mostrar tipo Clientess
  const getClientes = async () => {
    try {
      const res = await axios.get(URI);
      setClientes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar tipo Clientess
  const deleteClientes = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Clientes ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getClientes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Clientes</h1>
          <Link
            to={"/createClientes"}
            className="btn btn-primary mb-2 btn-left"
          >
            Crear Clientes
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Cedula</th>
                <th>Tarjeta de credito</th>
                <th>Limite de credito</th>
                <th>Tipo Persona</th>
                <th>Estado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.cedula}</td>
                  <td>{item.tarjetacr}</td>
                  <td>{item.limitecr}</td>
                  <td>{item.tipopersona}</td>
                  <td>{item.Estado}</td>
                  <td>
                    <Link
                      to={`/putClientes/${item.id}`}
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteClientes(item.id);
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

export default GestionClientes;
