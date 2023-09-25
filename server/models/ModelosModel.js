import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const TipoVehiculoModel = db.define('modelos', {
    idmarcas: {
        type: DataTypes.INTEGER.UNSIGNED //Llave foranea de tabla marcas 
    }, 
    descripcion: {
        type: DataTypes.STRING, 
        allowNull: false 
    }
});


export default TipoVehiculoModel;