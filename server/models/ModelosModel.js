import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const TipoVehiculoModel = db.define('modelos', {
    idmarcas: {
        type: DataTypes.INTEGER,
        references: {
            table: 'marcas',
            column: 'id'
        }//Llave foranea de tabla marcas 
    }, 
    descripcion: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    
},);


export default TipoVehiculoModel;