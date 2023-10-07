import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 
import MarcaModels from "./MarcaModel.js";

const ModeloModels = db.define('modelos', {
    idmarcas: {
        type: DataTypes.INTEGER,
        references: {
            table: 'marcas',
            column: 'id'
        }//Llave foranea de tabla marcas 
    }, 
    nombreModelo: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
});


ModeloModels.belongsTo(MarcaModels, { foreignKey: 'idmarcas', as: 'marca' });


export default ModeloModels;