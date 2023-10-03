import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/empleados";

const CreateEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState();
  const [tandlabor, setTandlabor] = useState();
  const [comision, setComision] = useState();
  const [fechaingreso, setFechaIngreso] = useState();
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();

  const storeEmpleados = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      cedula: cedula,
      tandlabor: tandlabor,
      comision: comision,
      fechaingreso: fechaingreso,
      estado: estado,
    });
    Swal.fire("Agregado", "Tu Empleado ha sido agregado", "success");
    navigate("/gestionEmpleado");
  };

  return (
    <div className="container">
      <h3>Crear Empleado</h3>
      <form onSubmit={storeEmpleados} className="form row g-3">
        <div className="col-md-6">
          <label for="inputNombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label for="inputCedula" className="form-label">
            Cedula
          </label>
          <input
            maxLength={11}
            type="text"
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
          <label for="inputTarjeta" className="form-label">
            Tanda Laboral
          </label>
          <select
            id="inputState"
            className="form-select"
            value={tandlabor}
            onChange={(e) => {
              setTandlabor(e.target.value);
            }}
            required
          >
            <option selected>Choose...</option>
            <option>Matutino</option>
            <option>Vespertina</option>
            <option>Nocturna</option>
          </select>
        </div>
        <div className="col-5">
          <label for="inputLimite" className="form-label">
            Porciento de Comision
          </label>
          <input
            type="number"
            className="form-control"
            id="inputLimite"
            value={comision}
            onChange={(e) => {
              setComision(e.target.value);
            }}
            step={0.1}
          />
        </div>
        <div className="col-md-7">
          <label for="inputState" className="form-label">
            Fecha de ingreso
          </label>
          <input
            type="date"
            name="fechaIngreso"
            id=""
            value={fechaingreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className=" col-md-12">
          <label for="inputState" className="form-label">
            estado
          </label>
          <select
            id="inputState"
            className="form-select"
            value={estado}
            onChange={(e) => {
              setEstado(e.target.value);
            }}
          >
            <option selected>Choose...</option>
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
