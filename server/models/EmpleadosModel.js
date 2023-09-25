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
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    tandalabor: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    
    comisionpr: 
    {
        type: DataTypes.DECIMAL
    }, 
    
    Estado: {
        type: DataTypes.STRING
    }
});


export default EmpleadosModel;