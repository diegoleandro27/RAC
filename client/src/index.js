import * as React from "react";
import { createRoot } from "react-dom/client";
import {GestionCombustible, Home, GestionClientes, GestionTipoVehiculo, GestionEmpleado, GestionVehiculo, GestionRenta, GestionMarcas, GestionModelos} from "./pages"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import "./components/sidebar.css"; 



const AppLayout = () => (
  <> 
    <Sidebar/> 
    <Outlet /> 
  </>
)

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout/>}>
    <Route path="/" element={<Home />}/> 
    <Route path="/gestionRenta" element={<GestionRenta />}/> 
    <Route path="/gestionVehiculo" element={<GestionVehiculo />}/> 
    <Route path="/gestionTipoVehiculo" element={<GestionTipoVehiculo />}/> 
    <Route path="/gestionCombustible" element={<GestionCombustible />}/> 
    <Route path="/gestionMarcas" element={<GestionMarcas />}/> 
    <Route path="/gestionModelos" element={<GestionModelos />}/> 
    <Route path="/gestionClientes" element={<GestionClientes />}/> 
    <Route path="/gestionEmpleado" element={<GestionEmpleado />}/> 
  </Route>
))


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);