import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const RentaModel = db.define('renta', {
    empleadoid: 
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    vehiculoid: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    
    clienteid: {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    
    fecharenta: 
    {
        type: DataTypes.DATEONLY
    }, 
    
    fechadevolucion: 
    {
        type: DataTypes.DATEONLY, 
        allowNull: false
    }, 

    montodia: {
        type: DataTypes.INTEGER
    },

    cantidaddia: {
        type: DataTypes.INTEGER
    },

    comentario: {
        type: DataTypes.STRING
    }
});


export default RentaModel;