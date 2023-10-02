import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  GestionCombustible, Home, GestionClientes, GestionTipoVehiculo, 
  GestionEmpleado, GestionVehiculo, GestionRenta, GestionMarcas, GestionModelos, 
  CreateCombustible, EditCombustible, CreateRenta, EditRenta, CreateVehiculo, EditVehiculo,
  CreateTipoVehiculo, EditTipoVehiculo,  CreateMarcas, EditMarcas, EditModelos, EditClientes,
  EditEmpleado, CreateModelos, CreateClientes,  CreateEmpleado
} from "./pages"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import "./components/sidebar.css"; 
import "bootstrap/dist/css/bootstrap.css"




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
    <Route path="/createRenta" element={<CreateRenta />}/> 
    <Route path="/putRenta/:id" element={<EditRenta />}/> 

    <Route path="/gestionVehiculo" element={<GestionVehiculo />}/> 
    <Route path="/createVehiculo" element={<CreateVehiculo />}/> 
    <Route path="/putVehiculo/:id" element={<EditVehiculo />}/> 

    <Route path="/gestionTipoVehiculo" element={<GestionTipoVehiculo />}/> 
    <Route path="/createTipoVehiculo" element={<CreateTipoVehiculo />}/> 
    <Route path="/putTipoVehiculo/:id" element={<EditTipoVehiculo/>}/> 

    <Route path="/gestionCombustible" element={<GestionCombustible />}/> 
    <Route path="/createCombustible" element={<CreateCombustible/>}/> 
    <Route path="/putCombustible/:id" element={<EditCombustible />}/> 

    <Route path="/gestionMarcas" element={<GestionMarcas />}/>
    <Route path="/createMarcas" element={<CreateMarcas />}/>
    <Route path="/putMarcas/:id" element={<EditMarcas />}/>

    <Route path="/gestionModelos" element={<GestionModelos />}/>
    <Route path="/createModelos" element={<CreateModelos />}/>
    <Route path="/putModelos/:id" element={<EditModelos />}/>

    <Route path="/gestionClientes" element={<GestionClientes />}/> 
    <Route path="/createClientes" element={<CreateClientes />}/> 
    <Route path="/putClientes/:id" element={<EditClientes />}/> 

    <Route path="/gestionEmpleado" element={<GestionEmpleado />}/> 
    <Route path="/createEmpleado" element={<CreateEmpleado />}/> 
    <Route path="/putEmpleado/:id" element={<EditEmpleado />}/> 
  </Route>
))




const root = createRoot(document.getElementById("root"))

root.render(
  <RouterProvider router={router} />
); 
  