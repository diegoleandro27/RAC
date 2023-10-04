import db from "../database/db.js"; //Importing databse 
import { DataTypes, fn } from "sequelize"; //Importing Sequelize 

const EmpleadosModel = db.define('empleados', {
    nombre: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    cedula: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    tandalabor: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    comisionpr: 
    {
        type: DataTypes.INTEGER
    }, 
    fechaingreso: {
        type: DataTypes.DATE, 
        allowNull:false
    }, 
    Estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default EmpleadosModel;