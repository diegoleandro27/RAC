import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 

const InspeccionModel = db.define('inspeccion', {
    vehiculoid: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            table: 'vehiculos',
            column: 'id'
        }
    }, 

    clienteid: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            table: 'clientes',
            column: 'id'
        }
    }, 
    
    ralladuras: {
        type: DataTypes.BOOLEAN, 
        allowNull: false,
        
    }, 
    
    cantcombustible: 
    {
        type: DataTypes.BIGINT,
        allowNull: false
    }, 
    
    gomaresp: 
    {
        type: DataTypes.BOOLEAN, 
        allowNull: false
    }, 

    gato: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    rotcristal: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    goma1: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    goma2: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    goma3: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    goma4: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },

    empleadoid: {
        type: DataTypes.INTEGER,
        references: {
            table: 'empleados',
            column: 'id'
        }
    }
});


export default InspeccionModel;