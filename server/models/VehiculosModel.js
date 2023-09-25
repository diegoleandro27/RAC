import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const RentaModel = db.define('vehiculos', {
    descripcion: 
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    nochasis: 
    {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    nomotor: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    noplaca: 
    {
        type: DataTypes.BIGINT,
        allowNull: false
    }, 
    
    tipovehiculoid: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 

    marcaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    modeloid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    tipocombustibleid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default RentaModel;