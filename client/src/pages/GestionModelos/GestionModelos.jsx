import React, { useEffect, useState } from "react";
import axios from "axios";
import "../gestionAll.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import vkw from "../";

const URI = "http://localhost:3001/modelos";

const GestionModelo = () => {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    getModelos();
  }, []);

  const getModelos = async () => {
    try {
      const res = await axios.get(URI);
      setModelos(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteModelo = async (id) => {
    try {
      Swal.fire("Eliminado", "Tu Modelo ha sido eliminado", "success");
      await axios.delete(`${URI}/${id}`);
      getModelos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="title">Gestion de Modelo</h1>
          <Link to={"/createModelo"} className="btn btn-primary mb-2 btn-left">
            Crear Modelo
          </Link>
          <div className="row">
            {modelos.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card mb-3 l">
                  <img
                    src={item.imageURL} // Replace with the actual image URL
                    className="card-img-top"
                    alt={item.nombreModelo}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.nombreModelo}</h5>
                    <p className="card-text">{item.marca.descripcion}</p>
                    <Link to={`/putModelo/${item.id}`} className="btn btn-info">
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteModelo(item.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GestionModelo;
