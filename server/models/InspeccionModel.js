import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 
import EmpleadosModel from './EmpleadosModel.js'
import VehiculosModel from './VehiculosModel.js'
import ClientesModel from "./ClientesModel.js";

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
    
    ralladura: {
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

   estadogomas: {
        type: DataTypes.STRING,
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
}, );

InspeccionModel.belongsTo(EmpleadosModel, { foreignKey: 'empleadoid', as: 'empleado' });
InspeccionModel.belongsTo(VehiculosModel, { foreignKey: 'vehiculoid', as: 'vehiculo' });
InspeccionModel.belongsTo(ClientesModel, { foreignKey: 'clienteid', as: 'cliente' });



export default InspeccionModel; 