import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const TipoVehiculoModel = db.define('tipovehiculo', {
    descripcion: {type: DataTypes.STRING},
    
}, {timestamps: false});


export default TipoVehiculoModel;