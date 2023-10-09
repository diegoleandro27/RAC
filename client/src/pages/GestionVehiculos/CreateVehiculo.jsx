import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/vehiculos";

const MARCAS_URI = "http://localhost:3001/marcas";
const MODELOS_URI = "http://localhost:3001/modelos";
const COMBUST_URI = "http://localhost:3001/tipocombustible";
const TIPVeh_URI = "http://localhost:3001/tipovehiculo";

const CreateVehiculo = () => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const [marcas, setMarcas] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [combustible, setCombustible] = useState([]);
  const [tipovehiculo, setTipoVehiculo] = useState([]);

  const [descripcion, setDescripcion] = useState("");
  const [vin, setVin] = useState("");
  const [nmotor, setNMotor] = useState("");
  const [nplaca, setNPlaca] = useState("");
  const [tipovehiculoid, setTipoVehiculoId] = useState(0);
  const [marcaid, setMarcaId] = useState(0);
  const [modeloid, setModeloId] = useState(0);
  const [tipocombustibleid, setTipoCombustibleId] = useState(0);

  const navigate = useNavigate();

  const storeVehiculos = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URI, {
        descripcion,
        vin,
        nmotor,
        nplaca,
        tipovehiculoid,
        marcaid,
        modeloid,
        tipocombustibleid,
      });
      console.log("Response from server:", response.data);
      Swal.fire("Agregado", "Tu Vehiculo ha sido agregado", "success");
      navigate("/gestionVehiculo");
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  useEffect(() => {
    getMarcas();
    getModelos();
    getCombustible();
    getTipoVehiculo();
  }, []);

  const getMarcas = async () => {
    try {
      const res = await axios.get(MARCAS_URI);
      setMarcas(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getModelos = async () => {
    try {
      const res = await axios.get(MODELOS_URI);
      setModelo(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getCombustible = async () => {
    try {
      const res = await axios.get(COMBUST_URI);
      setCombustible(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTipoVehiculo = async () => {
    try {
      const res = await axios.get(TIPVeh_URI);
      setTipoVehiculo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Crear Vehiculos </h3>
      <form onSubmit={storeVehiculos} className="form row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNombre" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputVin" className="form-label">
            VIN
          </label>
          <input
            type="text"
            maxLength={17}
            className="form-control"
            id="inputVin"
            value={vin}
            onChange={(e) => {
              setVin(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputNMotor" className="form-label">
            Numero de Motor
          </label>
          <input
            type="text"
            className="form-control"
            maxLength={17}
            id="inputMotor"
            value={nmotor}
            onChange={(e) => {
              setNMotor(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPlaca" className="form-label">
            Numero de Placa
          </label>
          <input
            type="text"
            maxLength={7}
            className="form-control"
            id="inputPlaca"
            value={nplaca}
            onChange={(e) => {
              setNPlaca(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-5">
          <label htmlFor="marcaSelect" className="form-label">
            Marca
          </label>
          <select
            id="marcaSelect" // Unique ID
            className="form-select"
            value={marcaid}
            onChange={(e) => {
              setMarcaId(e.target.value);
              setSelectedBrand(e.target.value);
            }}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {marcas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>

        <div className="col-7">
          <label htmlFor="modeloSelect" className="form-label">
            Modelo
          </label>
          <select
            id="modeloSelect" // Unique ID
            className="form-select"
            value={modeloid}
            onChange={(e) => {
              setModeloId(e.target.value);
            }}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {modelo
              .filter((item) => item.idmarcas === parseInt(selectedBrand))
              .map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nombreModelo}
                </option>
              ))}
          </select>
        </div>

        <div className="col-7">
          <label htmlFor="combustibleSelect" className="form-label">
            Tipo de Combustible
          </label>
          <select
            id="combustibleSelect" // Unique ID
            className="form-select"
            value={tipocombustibleid}
            onChange={(e) => {
              setTipoCombustibleId(e.target.value);
            }}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {combustible.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>

        <div className="col-5">
          <label htmlFor="tipoVehiculoSelect" className="form-label">
            Tipo de Vehiculo
          </label>
          <select
            id="tipoVehiculoSelect"
            className="form-select"
            value={tipovehiculoid}
            onChange={(e) => {
              setTipoVehiculoId(e.target.value);
            }}
            required
          >
            <option disabled value="">
              Choose...
            </option>
            {tipovehiculo.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Vehiculo
        </button>
      </form>
    </div>
  );
};

export default CreateVehiculo;
