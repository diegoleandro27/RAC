import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 
import EmpleadosModel from "./EmpleadosModel.js";
import VehiculoModel from "./VehiculosModel.js";
import ClientesModel from "./ClientesModel.js";

const RentaModel = db.define('renta', {
    empleadoid: 
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            table: 'empleados',
            column: 'id'
        }
    }, 

    vehiculoid: 
    {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            table: 'vehiculos',
            column: 'id'
        }
    }, 
    
    clienteid: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        references: {
            table: 'clientes',
            column: 'id'
        }
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
},);

RentaModel.belongsTo(EmpleadosModel, { foreignKey: 'empleadoid', as: 'empleado' });
RentaModel.belongsTo(VehiculoModel, { foreignKey: 'vehiculoid', as: 'vehiculo' });
RentaModel.belongsTo(ClientesModel, { foreignKey: 'clienteid', as: 'cliente' });



export default RentaModel;