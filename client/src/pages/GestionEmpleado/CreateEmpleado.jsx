import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/empleados";

const CreateEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState(0);
  const [tandalabor, setTandlabor] = useState("");
  const [comisionpr, setComisionpr] = useState(0);
  const [fechaingreso, setFechaIngreso] = useState(Date);
  const [Estado, setEstado] = useState("");
  const navigate = useNavigate();

  const storeEmpleados = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      cedula: cedula,
      tandalabor: tandalabor,
      comisionpr: comisionpr,
      fechaingreso: fechaingreso,
      Estado: Estado,
    });
    Swal.fire("Agregado", "Tu Empleado ha sido agregado", "success");
    navigate("/gestionEmpleado");
  };

  return (
    <div className="container">
      <h3>Crear Empleado</h3>
      <form onSubmit={storeEmpleados} className="form row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNombre"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCedula" className="form-label">
            cedula
          </label>
          <input
            type="text"
            maxLength={11} // You can adjust the max length as needed
            className="form-control"
            id="inputCedula"
            value={cedula}
            onChange={(e) => {
              setCedula(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputTarjeta" className="form-label">
            Tanda Laboral
          </label>
          <select
            id="inputTarjeta"
            className="form-select"
            value={tandalabor}
            onChange={(e) => {
              setTandlabor(e.target.value);
            }}
            required
          >
            <option disabled selected>
              Choose...
            </option>
            <option>Matutino</option>
            <option>Vespertina</option>
            <option>Nocturna</option>
          </select>
        </div>
        <div className="col-5">
          <label htmlFor="inputLimite" className="form-label">
            Porcentaje de Comision
          </label>
          <input
            type="number"
            className="form-control"
            id="inputLimite"
            value={comisionpr}
            onChange={(e) => {
              setComisionpr(e.target.value);
            }}
            step={0.1}
          />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputFechaIngreso" className="form-label">
            Fecha de ingreso
          </label>
          <input
            type="date"
            id="inputFechaIngreso"
            value={fechaingreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEstado" className="form-label">
            Estado
          </label>
          <select
            id="inputEstado"
            className="form-select"
            value={Estado}
            onChange={(e) => {
              setEstado(e.target.value);
            }}
            required
          >
            <option disabled selected>
              Choose...
            </option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>
        <div className="col-12 mt-5">
          <button type="submit" className="btn btn-primary col-md-5">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmpleado;
