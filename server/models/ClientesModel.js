import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const ClientesModel = db.define('clientes', {
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
    
    tarjetacr: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    limitecr: 
    {
        type: DataTypes.DECIMAL
    }, 
    
    tipopersona: 
    {
        type: DataTypes.STRING, 
        allowNull: false
    }, 

    Estado: {
        type: DataTypes.STRING
    }
});


export default ClientesModel;