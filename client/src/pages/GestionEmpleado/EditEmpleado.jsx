import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";
const URI = "http://localhost:3001/tipocombustible";

const EditCombustible = () => {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState();
  const [tandlabor, setTandlabor] = useState();
  const [comision, setComision] = useState();
  const [fechaingreso, setFechaIngreso] = useState();
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getCombustibleById();
  }, [id]);

  const getCombustibleById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setNombre(res.data.descripcion);
      setCedula(res.data.descripcion);
      setTandlabor(res.data.descripcion);
      setComision(res.data.descripcion);
      setFechaIngreso(res.data.descripcion);
      setEstado(res.data.descripcion);
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error fetching combustible:", error);
    }
  };

  const updateEmpleado = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        nombre: nombre,
        cedula: cedula,
        tandlabor: tandlabor,
        comision: comision,
        fechaingreso: fechaingreso,
        estado: estado,
      });
      Swal.fire("Actualizado", "Tu combustible ha sido Actualizado", "success");

      navigate("/gestionEmpleado  ");
    } catch (error) {
      // Handle errors here (e.g., show an error message)
      console.error("Error updating combustible:", error);
    }
  };

  return (
    <div className="container">
      <h3>Crear Empleado</h3>
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
            value={tandlabor}
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
        <div className="col-3">
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
          />
        </div>
        <div className="col-md-7">
          <label for="inputState" className="form-label">
            Tipo de persona
          </label>
          <input
            type="date"
            name="fechaIngreso"
            id=""
            value={fechaingreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
          />
        </div>
        <div className="col-md-5">
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary col-md-5">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCombustible;
