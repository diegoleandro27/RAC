import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./gestionClientes.css";

const URI = "http://localhost:3001/clientes";

const CreateCliente = () => {
  const [nombre, setNombre] = useState("");
  const [cedula, setCedula] = useState();
  const [tarjetacr, setTarjetacr] = useState();
  const [limitecr, setLimitecr] = useState();
  const [tipopersona, setTipoPersona] = useState("");
  const [Estado, setEstado] = useState("");
  const navigate = useNavigate();

  const storeClientes = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      nombre: nombre,
      cedula: cedula,
      tarjetacr: tarjetacr,
      limitecr: limitecr,
      tipopersona: tipopersona,
      Estado: Estado,
    });
    Swal.fire("Agregado", "Tu Cliente ha sido agregado", "success");
    navigate("/gestionClientes");
  };

  return (
    <div className="container">
      <h3>Crear Cliente</h3>
      <form onSubmit={storeClientes} className="form row g-3">
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
            Tarjeta de Credito
          </label>
          <input
            type="number"
            className="form-control"
            id="inputTarjeta"
            value={tarjetacr}
            onChange={(e) => {
              setTarjetacr(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <label for="inputLimite" className="form-label">
            Limite de credito
          </label>
          <input
            type="number"
            className="form-control"
            id="inputLimite"
            value={limitecr}
            onChange={(e) => {
              setLimitecr(e.target.value);
            }}
          />
        </div>
        <div className="col-md-7">
          <label for="inputState" className="form-label">
            Tipo de persona
          </label>
          <select
            id="inputState"
            className="form-select"
            value={tipopersona}
            onChange={(e) => {
              setTipoPersona(e.target.value);
            }}
          >
            <option selected>Choose...</option>
            <option>Fisico</option>
            <option>Juridico</option>
          </select>
        </div>
        <div className="col-md-5">
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
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCliente;
