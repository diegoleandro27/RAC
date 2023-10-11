import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/vehiculos";
const MARCAS_URI = "http://localhost:3001/marcas"; // Añadiendo el acceso a la api de marcas para adquirir sus datos
const MODELOS_URI = "http://localhost:3001/modelos";
const COMBUST_URI = "http://localhost:3001/tipocombustible";
const TIPVeh_URI = "http://localhost:3001/tipovehiculo";
const EditVehiculo = () => {
  // const [selectedBrand, setSelectedBrand] = useState("");

  const [descripcion, setDescripcion] = useState("");
  const [vin, setVin] = useState("");
  const [nmotor, setNMotor] = useState("");
  const [nplaca, setNPlaca] = useState("");
  const [tipovehiculoid, setTipoVehiculoId] = useState("");
  const [marcaid, setMarcaId] = useState("");
  const [modeloid, setModeloId] = useState("");
  const [tipocombustibleid, setTipoCombustibleId] = useState("");

  const [marcas, setMarcas] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [combustible, setCombustible] = useState([]);
  const [tipovehiculo, setTipoVehiculo] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getVehiculoById();
    getMarcas();
    getModelos();
    getCombustible();
    getTipoVehiculo();
  }, [id]);

  const getVehiculoById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      setDescripcion(res.data.descripcion);
      setVin(res.data.vin);
      setNMotor(res.data.nmotor);
      setNPlaca(res.data.nplaca);
      setTipoVehiculoId(res.data.tipovehiculoid);
      setMarcaId(res.data.marcaid);
      setModeloId(res.data.modeloid);
      setTipoCombustibleId(res.data.tipocombustibleid);
    } catch (error) {
      console.error("Error fetching Vehiculo:", error);
    }
  };

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

  const updateVehiculo = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        descripcion,
        vin,
        nmotor,
        nplaca,
        tipovehiculoid,
        marcaid,
        modeloid,
        tipocombustibleid,
      });
      Swal.fire("Actualizado", "Tu Vehiculo ha sido Actualizado", "success");
      navigate("/gestionVehiculo");
    } catch (error) {
      console.error("Error updating Vehiculo:", error);
    }
  };

  return (
    <div className="container w-50 align-items-center">
      <h3> Crear Vehiculos </h3>
      <form onSubmit={updateVehiculo} className="form row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
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
          <label htmlFor="inputNombre" className="form-label">
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
          <label htmlFor="inputPLaca" className="form-label">
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
          <label htmlFor="Input" className="form-label">
            Marca
          </label>
          <select
            id="Input"
            className="form-select"
            value={marcaid}
            onChange={(e) => {
              setMarcaId(e.target.value);
              // setSelectedBrand(e.target.value);
            }}
            required
          >
            <option value="">Choose...</option>
            {marcas.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>

        <div className="col-7">
          <label htmlFor="Input" className="form-label">
            Modelo
          </label>
          <select
            id="Input"
            className="form-select"
            value={modeloid}
            onChange={(e) => {
              setModeloId(e.target.value);
            }}
            required
          >
            <option disabled selected value="">
              Choose...
            </option>
            {modelo.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombreModelo}
              </option>
            ))}
          </select>
        </div>

        <div className="col-7">
          <label htmlFor="Input" className="form-label">
            Tipo de Combustible
          </label>
          <select
            id="Input"
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
          <label htmlFor="InputTipoVehiculo" className="form-label">
            Tipo de Vehiculo
          </label>
          <select
            id="InputTipoVehiculo"
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

export default EditVehiculo;
