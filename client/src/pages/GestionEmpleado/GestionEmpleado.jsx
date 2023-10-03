import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/empleados";
const GestionEmpleado = () => {
  const [empleado, setEmpleado] = useState([]);

  useEffect(() => {
    getEmpleado();
  }, []);

  //mostrar tipo Empleados
  const getEmpleado = async () => {
    try {
      const res = await axios.get(URI);
      setEmpleado(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //Eliminar tipo Empleados
  const deleteEmpleado = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Empleado ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getEmpleado();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Empleado</h1>
          <Link
            to={"/createEmpleado"}
            className="btn btn-primary mb-2 btn-left"
          >
            Crear Empleado
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Cedula</th>
                <th>Tanda Labor</th>
                <th>Porciento de comision</th>
                <th>fecha ingreso</th>
                <th>Estado</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {empleado.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.cedula}</td>
                  <td>{item.tandalabor}</td>
                  <td>{item.comisionpr}</td>
                  <td>{item.fechaingreso}</td>
                  <td>{item.estado}</td>
                  <td>
                    <Link
                      to={`/putEmpleado/${item.id}`}
                      className="btn btn-info"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => {
                        deleteEmpleado(item.id);
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

export default GestionEmpleado;
