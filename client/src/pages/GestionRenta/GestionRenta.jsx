import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useReactToPrint } from "react-to-print";

const URI = "http://localhost:3001/renta";

const GestionRenta = () => {
  const [filteredRentas, setFilteredRentas] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  const [renta, setRentas] = useState([]);

  const componentPDF = useRef();
  const GenerarPDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Reporte de rentas",
    onAfterPrint: () =>
      Swal.fire("Reporte Generado", "Se realizado correctamente", "success"),
  });
  useEffect(() => {
    getRentas();
  }, []);

  const getRentas = async () => {
    try {
      const res = await axios.get(URI);
      setRentas(res.data);
      filterByDate();
      setFilteredRentas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const clearDateFilters = () => {
    setFechaInicio("");
    setFechaFin("");
    filterByDate(); // Aplicar el filtro para mostrar todas las rentas nuevamente
  };

  const handleFilterChange = (e) => {
    const criteria = e.target.value;
    setFilterCriteria(criteria);

    // Filter the data based on the criteria
    const filteredData = renta.filter((item) =>
      item.cliente.nombre.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredRentas(filteredData);
  };

  const deleteRenta = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Renta ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getRentas();
    } catch (error) {
      console.error(error);
    }
  };

  const filterByDate = () => {
    // Filtra las rentas basadas en el rango de fechas
    const filteredData = renta.filter((item) => {
      const rentaDate = new Date(item.fecharenta);
      const fechaInicioDate = new Date(fechaInicio);
      const fechaFinDate = new Date(fechaFin);

      return rentaDate >= fechaInicioDate && rentaDate <= fechaFinDate;
    });

    setFilteredRentas(filteredData);
  };

  return (
    <div className="container">
      <h1 className="title">Gestion de Renta</h1>
      <div className=" d-flex">
        <Link
          to={"/createRenta"}
          className="btn btn-primary mb-2 d-flex width-c text-center"
        >
          Crear Renta
        </Link>

        <button className="btn btn-danger mb-2 " onClick={GenerarPDF}>
          PDF
        </button>

        <div className="fecha_filtro">
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de inicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de fin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
          <button className="btn btn-primary" onClick={filterByDate}>
            Filtrar por Fecha
          </button>
          <button className="btn btn-secondary" onClick={clearDateFilters}>
            Limpiar Filtros de Fecha
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <div className="mb-3 d-flex">
          <input
            className="form form-control"
            type="text"
            placeholder="Filtrar por cliente..."
            value={filterCriteria}
            onChange={handleFilterChange}
          />
        </div>
        <div ref={componentPDF}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Numero de Renta</th>
                <th>Empleado</th>
                <th>Vehiculo</th>
                <th>Cliente</th>
                <th>Fecha de renta</th>
                <th>Fecha de devolucion</th>
                <th>Monto x dia</th>
                <th>Cantidad de dias</th>
                <th>Comentario</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredRentas.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.empleado.nombre}</td>
                  <td>{item.vehiculo.descripcion}</td>
                  <td>{item.cliente.nombre}</td>
                  <td>{item.fecharenta}</td>
                  <td>{item.fechadevolucion}</td>
                  <td>{item.montodia}</td>
                  <td>{item.cantidadia}</td>
                  <td>{item.comentario}</td>
                  <td>{item.estado}</td>
                  <td>
                    <Link to={`/putRenta/${item.id}`} className="btn btn-info">
                      Editar
                    </Link>
                    <button
                      onClick={() => {
                        deleteRenta(item.id);
                      }}
                      className="btn btn-danger ml-2"
                    >
                      Eliminar
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

export default GestionRenta;
