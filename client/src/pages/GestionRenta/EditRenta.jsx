import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../gestionAll.css";
import Swal from "sweetalert2";

const URI = "http://localhost:3001/renta";
const VEHICULOS_URI = "http://localhost:3001/vehiculos";
const Empleados_URI = "http://localhost:3001/empleados";
const Clientes_URI = "http://localhost:3001/clientes";
const INSPEC_URI = "http://localhost:3001/inspeccion";
const EditRenta = () => {
  // const [selectedBrand, setSelectedBrand] = useState("");

  const [vehiculo, setVehiculo] = useState([]);
  const [cliente, setCliente] = useState([]);
  const [empleado, setEmpleado] = useState([]);

  const [empleadoid, setEmpleadoId] = useState(0);
  const [vehiculoid, setVehiculoId] = useState(0);
  const [clienteid, setClienteId] = useState(0);
  const [fecharenta, setFechaRenta] = useState(Date());
  const [fechadevolucion, setFechaDevolucion] = useState(Date());
  const [montodia, setMontoDia] = useState(0);
  const [cantidadia, setCantidadDia] = useState(0);
  const [comentario, setComentario] = useState("");
  const [estado, setEstado] = useState("");

  // estados de inspeccion
  const [ralladura, setRalladura] = useState(false);
  const [cantcombustible, setCantCombustible] = useState("");
  const [gomaresp, setGomaResp] = useState(false);
  const [gato, setGato] = useState(false);
  const [rotcristal, setRotCristal] = useState("");
  const [estadogomas, setEstadoGomas] = useState("");
  const [fecha, setFecha] = useState(Date);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getVehiculos();
    getClientes();
    getEmpleados();
    getRentaById();
  }, [id]);

  const getRentaById = async () => {
    try {
      const res = await axios.get(`${URI}/${id}`);
      const resinsp = await axios.get(`${INSPEC_URI}/${id}`);
      setEmpleadoId(res.data.empleadoid);
      setVehiculoId(res.data.vehiculoid);
      setClienteId(res.data.clienteid);
      setFechaRenta(res.data.fecharenta);
      setFechaDevolucion(res.data.fechadevolucion);
      setMontoDia(res.data.montodia);
      setCantidadDia(res.data.cantidadia);
      setComentario(res.data.comentario);
      setEstado(res.data.estado);
      //inspeccion
      setRalladura(resinsp.data.ralladura);
      setCantCombustible(resinsp.data.cantcombustible);
      setGomaResp(resinsp.data.gomaresp);
      setGato(resinsp.data.gato);
      setRotCristal(resinsp.data.rotcristal);
      setEstadoGomas(resinsp.data.estadogomas);
      setFecha(resinsp.data.fecha);
    } catch (error) {
      console.error("Error fetching Renta:", error);
    }
  };
  const getClientes = async () => {
    try {
      const res = await axios.get(Clientes_URI);
      setCliente(res.data);
    } catch (error) {
      console.error("Error fetching Clientes:", error);
    }
  };

  const getEmpleados = async () => {
    try {
      const res = await axios.get(Empleados_URI);
      setEmpleado(res.data);
    } catch (error) {
      console.error("Error fetching Empleados:", error);
    }
  };

  const getVehiculos = async () => {
    try {
      const res = await axios.get(VEHICULOS_URI);
      setVehiculo(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateRenta = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}/${id}`, {
        empleadoid,
        vehiculoid,
        clienteid,
        fecharenta,
        fechadevolucion,
        montodia,
        cantidadia,
        comentario,
        estado,
      });

      Swal.fire("Actualizado", "Tu Renta ha sido Actualizado", "success");
      navigate("/gestionRenta");
    } catch (error) {
      console.error("Error updating Renta:", error);
    }
  };

  return (
    <div className="container w-75 align-items-center">
      <h3>Crear Rentas</h3>
      <form onSubmit={updateRenta} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmpleado" className="form-label">
            Empleado
          </label>
          <select
            id="inputEmpleado"
            className="form-select"
            value={empleadoid}
            onChange={(e) => setEmpleadoId(e.target.value)}
            required
          >
            <option selected value="">
              Choose...
            </option>
            {empleado.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputVehiculo" className="form-label">
            Vehículo
          </label>
          <select
            id="inputVehiculo"
            className="form-select"
            value={vehiculoid}
            onChange={(e) => setVehiculoId(e.target.value)}
            required
          >
            <option selected value="">
              Choose...
            </option>
            {vehiculo.map((item) => (
              <option key={item.id} value={item.id}>
                {item.descripcion}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCliente" className="form-label">
            Cliente
          </label>
          <select
            id="inputCliente"
            className="form-select"
            value={clienteid}
            onChange={(e) => setClienteId(e.target.value)}
            required
          >
            <option selected value="">
              Choose...
            </option>
            {cliente.map((item) => (
              <option key={item.id} value={item.id}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputFechaRenta" className="form-label">
            Fecha de Renta
          </label>
          <input
            type="date"
            id="inputFechaRenta"
            className="form-control"
            value={fecharenta}
            onChange={(e) => {
              setFechaRenta(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputFechaDevolucion" className="form-label">
            Fecha de Devolución
          </label>
          <input
            type="date"
            id="inputFechaDevolucion"
            className="form-control"
            value={fechadevolucion}
            onChange={(e) => {
              setFechaDevolucion(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputMontoDia" className="form-label">
            Monto por Día
          </label>
          <input
            type="number"
            id="inputMontoDia"
            className="form-control"
            value={montodia}
            onChange={(e) => setMontoDia(e.target.value)}
            required
          />
        </div>
        <div className="col-md-13">
          <label htmlFor="inputCantidadDia" className="form-label">
            Cantidad de Días
          </label>
          <input
            type="number"
            id="inputCantidadDia"
            className="form-control"
            value={cantidadia}
            onChange={(e) => setCantidadDia(e.target.value)}
            required
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputComentario" className="form-label">
            Comentario
          </label>
          <textarea
            id="inputComentario"
            className="form-control"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </div>
        <div className="col-md-13">
          <label htmlFor="inputEstado" className="form-label">
            Estado
          </label>
          <select
            id="inputEstado"
            className="form-select mb-4"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option selected>Choose....</option>
            <option>Rentado</option>
            <option>En uso</option>
          </select>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-primary">
            Guardar Renta
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRenta;
