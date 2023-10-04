import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";
const URI = "http://localhost:3001/empleados";

const EditCombustible = () => {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState();
  const [tandalabor, setTandlabor] = useState("");
  const [comisionpr, setComisionpr] = useState(0);
  const [fechaingreso, setFechaIngreso] = useState(Date);
  const [Estado, setEstado] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCombustibleById();
  }, [id]);

  const getCombustibleById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      const data = res.data; // Employee data from the API
      setNombre(data.nombre);
      setCedula(data.cedula);
      setTandlabor(data.tandalabor);
      setComisionpr(data.comisionpr);
      setFechaIngreso(data.fechaingreso);
      setEstado(data.Estado);
    } catch (error) {
      console.error("Error fetching empleado:", error);
    }
  };

  const updateEmpleado = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        nombre: nombre,
        cedula: cedula,
        tandalabor: tandalabor,
        comisionpr: comisionpr,
        fechaingreso: fechaingreso,
        Estado: Estado,
      });
      Swal.fire("Actualizado", "Tu empleado ha sido Actualizado", "success");

      navigate("/gestionEmpleado");
    } catch (error) {
      console.error("Error updating empleado:", error);
    }
  };

  return (
    <div className="container">
      <h3>Actualizar Empleado</h3>
      <form onSubmit={updateEmpleado} className="form row g-3">
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
          />
        </div>
        <div className="col-md-6">
          <label for="inputCedula" className="form-label">
            Cedula
          </label>
          <input
            type="number"
            className="form-control"
            id="inputCedula"
            value={cedula}
            onChange={(e) => {
              setCedula(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <label for="inputTarjeta" className="form-label">
            Tanda Laboral
          </label>
          <select
            id="inputState"
            className="form-select"
            value={tandalabor}
            onChange={(e) => {
              setTandlabor(e.target.value);
            }}
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
            value={comisionpr}
            onChange={(e) => {
              setComisionpr(e.target.value);
            }}
          />
        </div>
        <div className="col-md-7">
          <label for="inputState" className="form-label">
            fecha de ingreso
          </label>
          <input
            type="date"
            name="fechaIngreso"
            id=""
            value={fechaingreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-12">
          <label for="inputState" className="form-label">
            Estado
          </label>
          <select
            id="inputState"
            className="form-select"
            value={Estado}
            onChange={(e) => {
              setEstado(e.target.value);
            }}
          >
            <option selected>Choose...</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary col-md-5">
            Actualizar Empleado
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCombustible;
