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
        allowNull: false,
        references: {
            table: 'tipovehiculos',
            column: 'id'
        }
    }, 

    marcaid: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
            table: 'marcas',
            column: 'id'
        }
    },

    modeloid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            table: 'modelos',
            column: 'id'
        }
    },

    tipocombustibleid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            table: 'tipocombustibles',
            column: 'id'
        }
    },

    estado: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


export default RentaModel;