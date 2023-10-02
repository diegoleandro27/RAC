import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";

const SideBarData = [
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Gestion Rentas",
    path: "/gestionRenta",
    icons: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-text",
  },
  {
    title: "Gestion Vehiculo",
    path: "/gestionVehiculo",
    icons: <AiIcons.AiOutlineShoppingCart />,
    cName: "nav-text",
  },
  {
    title: "Gestion Tipo de Vehiculos ",
    path: "/gestionTipoVehiculo",
    icons: <FaIcons.FaTruckMoving />,
    cName: "nav-text",
  },
  {
    title: "Gestion Combustible",
    path: "/gestionCombustible",
    icons: <FaIcons.FaGasPump />,
    cName: "nav-text",
  },
  {
    title: "Gestion Marcas",
    path: "/gestionMarcas",
    icons: <SiIcons.SiHonda />,
    cName: "nav-text",
  },
  {
    title: "Gestion Modelos",
    path: "/gestionModelos",
    icons: <IoIcons.IoLogoModelS />,
    cName: "nav-text",
  },
  {
    title: "Gestion Clientes",
    path: "/gestionClientes",
    icons: <FaIcons.FaUser />,
    cName: "nav-text",
  },
  {
    title: "Gestion Empleados",
    path: "/gestionEmpleado",
    icons: <FaIcons.FaUserTie />,
    cName: "nav-text",
  },
];

export default SideBarData;
