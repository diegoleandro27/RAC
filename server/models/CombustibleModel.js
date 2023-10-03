import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const CombustibleModel = db.define('tipocombustible', {
    descripcion: {type: DataTypes.STRING},
}, );


export default CombustibleModel;