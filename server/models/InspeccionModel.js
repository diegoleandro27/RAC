import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const InspeccionModel = db.define('inspeccion', {
    vehiculoid: 
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    clienteid: 
    {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    ralladuras: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    cantidadcombustible: 
    {
        type: DataTypes.BIGINT,
        allowNull: false
    }, 
    
    gomarespuesta: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 

    gato: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    roturascristal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    goma1: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    goma2: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    goma3: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    goma4: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fecha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    empleadoid: {
        type: DataTypes.INTEGER
    }
});


export default RentaModel;