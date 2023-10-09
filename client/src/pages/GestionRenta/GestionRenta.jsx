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
      setFilteredRentas(res.data);
    } catch (error) {
      console.error(error);
    }
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

  return (
    <div className="container">
      <h1 className="title">Gestion de Renta</h1>
      <div className=" d-flex">
        <Link
          to={"/createRenta"}
          className="btn btn-primary mb-2 d-flex width-c"
        >
          Crear Renta
        </Link>
        <button className="btn btn-danger mb-2 " onClick={GenerarPDF}>
          PDF
        </button>
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
