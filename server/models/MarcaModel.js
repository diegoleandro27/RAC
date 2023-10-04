import { DataTypes } from "sequelize";
import db from "../database/db.js";

const MarcaModels = db.define('marcas', {
    nombreModelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Other fields for the "marca" model
});

export default MarcaModels;
