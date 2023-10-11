import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 
import ModeloModels from "./ModelosModel.js";
import MarcaModels from "./MarcaModel.js";
import CombustibleModel from "./CombustibleModel.js";
import TipoVehiculoModel from "./TipoVehiculosModel.js";

const VehiculoModel = db.define('vehiculos', {
    descripcion: 
    {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 

    vin: 
    {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    nmotor: {
        type: DataTypes.BIGINT, 
        allowNull: false
    }, 
    
    nplaca: 
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

VehiculoModel.belongsTo(MarcaModels, { foreignKey: 'marcaid', as: 'marca' });
VehiculoModel.belongsTo(ModeloModels, { foreignKey: 'modeloid', as: 'modelo' });
VehiculoModel.belongsTo(TipoVehiculoModel, { foreignKey: 'tipovehiculoid', as: 'tipovehiculo' });
VehiculoModel.belongsTo(CombustibleModel, { foreignKey: 'tipocombustibleid', as: 'combustible' });



export default VehiculoModel;