import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const MarcaModel = db.define('marcas', {
    descripcion: {type: DataTypes.STRING},
    
},);


export default MarcaModel;