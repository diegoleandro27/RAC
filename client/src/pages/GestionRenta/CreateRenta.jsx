import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../gestionAll.css";

const URI = "http://localhost:3001/renta";
const VEHICULOS_URI = "http://localhost:3001/vehiculos";
const Empleados_URI = "http://localhost:3001/empleados";
const Clientes_URI = "http://localhost:3001/clientes";
const INSPEC_URI = "http://localhost:3001/inspeccion";
const CreateRenta = () => {
  const [renta, setRenta] = useState([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

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

  const getRenta = async () => {
    try {
      const res = await axios.get(URI);
      setRenta(res.data);
    } catch (error) {
      console.error(error);
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

  // const checkVehicleAvailability = async () => {
  //   try {
  //     // Hacer una solicitud para obtener el estado de la renta del vehículo seleccionado
  //     const res = await axios.get(`${VEHICULOS_URI}?vehiculoid=${vehiculoid}`);

  //     // Verificar el estado de la renta del vehículo seleccionado
  //     if (res.data.length > 0) {
  //       const rental = res.data; // Assuming there's only one matching rental
  //       if (rental.estado === "Rentado") {
  //         return true; // El vehículo está rentado
  //       }
  //     }
  //     return false; // El vehículo no está rentado
  //   } catch (error) {
  //     console.error(
  //       "Error al verificar la disponibilidad del vehículo:",
  //       error
  //     );
  //     return false; // En caso de error, considera que el vehículo no está rentado
  //   }
  // };

  const navigate = useNavigate();
  const storeRentas = async (e) => {
    e.preventDefault();

    // Verificar si la fecha de devolución es anterior a la fecha de alquiler
    if (new Date(fechadevolucion) <= new Date(fecharenta)) {
      Swal.fire(
        "Error",
        "La fecha de devolución debe ser posterior a la fecha de alquiler",
        "error"
      );
      return;
    }

    if (montodia <= 0 || cantidadia <= 0) {
      Swal.fire(
        "Error",
        "El monto por día y la cantidad de días deben ser mayores que cero",
        "error"
      );
      return;
    }
    // Verificar si el vehículo ya está rentado
    try {
      const res = await axios.get(`${VEHICULOS_URI}/${vehiculoid}`);
      const vehiculo = res.data;

      if (vehiculo.estado === "Rentado") {
        Swal.fire("Error", "Este vehículo ya está alquilado.", "error");
        return;
      }
    } catch (error) {
      console.error(
        "Error al verificar la disponibilidad del vehículo:",
        error
      );
      Swal.fire(
        "Error",
        "Ha ocurrido un error al verificar la disponibilidad del vehículo.",
        "error"
      );
    }

    // Si el vehículo no está rentado, procede con la renta
    try {
      await axios.post(URI, {
        empleadoid: empleadoid,
        vehiculoid: vehiculoid,
        clienteid: clienteid,
        fecharenta: fecharenta,
        fechadevolucion: fechadevolucion,
        montodia: montodia,
        cantidadia: cantidadia,
        comentario: comentario,
        estado: estado,
      });

      //inspeccion post
      axios.post(INSPEC_URI, {
        empleadoid: empleadoid,
        vehiculoid: vehiculoid,
        clienteid: clienteid,
        fecha: fecha,
        ralladura: ralladura,
        cantcombustible: cantcombustible,
        gomaresp: gomaresp,
        gato: gato,
        rotcristal: rotcristal,
        estadogomas: estadogomas,
      });

      axios.post(VEHICULOS_URI, {
        estado: estado,
      });

      Swal.fire("Agregado", "Tu Renta ha sido agregada", "success");
      navigate("/gestionRenta");
    } catch (error) {
      console.error("Error al realizar la renta:", error);
      Swal.fire("Error", "Ha ocurrido un error al agregar la renta", "error");
    }
  };

  useEffect(() => {
    getVehiculos();
    getClientes();
    getEmpleados();
    getRenta();
  }, []);

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

  return (
    <div className="container w-75 align-items-center">
      <h3>Crear Rentas</h3>
      <form onSubmit={storeRentas} className="row g-3">
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
            <option>Libre</option>
          </select>
        </div>

        {/*form inspeccion*/}
        <h3>Inspeccion del vehiculo </h3>
        <div className="col-md-6">
          <label htmlFor="inputRalladura" className="form-label">
            Tiene Ralladuras
          </label>
          <select
            id="inputRalladura"
            className="form-select"
            value={ralladura}
            onChange={(e) => setRalladura(e.target.value)}
            required
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCantCombustible" className="form-label">
            Cantidad Combustible
          </label>
          <input
            type="text"
            id="inputCantCombustible"
            className="form-control"
            value={cantcombustible}
            onChange={(e) => setCantCombustible(e.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputGomaResp" className="form-label">
            Tiene Goma de Repuesto
          </label>
          <select
            id="inputGomaResp"
            className="form-select"
            value={gomaresp}
            onChange={(e) => setGomaResp(e.target.value)}
            required
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputGato" className="form-label">
            Tiene Gato
          </label>
          <select
            id="inputGato"
            className="form-select"
            value={gato}
            onChange={(e) => setGato(e.target.value)}
            required
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputRotCristal" className="form-label">
            Tiene Roturas de Cristal
          </label>
          <select
            id="inputRotCristal"
            className="form-select"
            value={rotcristal}
            onChange={(e) => setRotCristal(e.target.value)}
            required
          >
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEstadoGomas" className="form-label">
            Estado de las Gomas
          </label>
          <select
            id="inputEstadoGomas"
            className="form-select"
            value={estadogomas}
            onChange={(e) => setEstadoGomas(e.target.value)}
            required
          >
            <option value="Bueno">Bueno</option>
            <option value="Regular">Regular</option>
            <option value="Malo">Malo</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputFecha" className="form-label">
            Fecha de Inspección
          </label>
          <input
            type="date"
            id="inputFecha"
            className="form-control"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
            required
          />
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

export default CreateRenta;
