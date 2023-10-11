import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="containers">
      <body className="d-flex h-100 text-center text-bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="mb-auto"></header>

          <main className="px-3">
            <h1 className="colors">RAC</h1>
            <p className="lead">
              Bienvenido a RAC, tu sistema gestor de rentas/alquileres de
              vehiculos. <br />
              Aquí tendras total manejo de tu empresa, desde el manejo de rentas
              hasta el manejo de tus clientes.
            </p>
          </main>

          <footer className="mt-auto text-white-50"></footer>
        </div>
        <script
          src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossorigin="anonymous"
        ></script>
      </body>
    </div>
  );
};

export default Home;
