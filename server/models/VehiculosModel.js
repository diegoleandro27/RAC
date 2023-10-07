import db from "../database/db.js"; //Importing databse 
import { DataTypes } from "sequelize"; //Importing Sequelize 
import ModeloModels from "./ModelosModel.js";
import MarcaModels from "./MarcaModel.js";
import CombustibleModel from "./CombustibleModel.js";

const VehiculoModel = db.define('vehiculos', {
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
    },
    
});

VehiculoModel.belongsTo(MarcaModels, { foreignKey: 'marcaid', as: 'marca' });
VehiculoModel.belongsTo(ModeloModels, { foreignKey: 'modeloid', as: 'modelo' });
VehiculoModel.belongsTo(CombustibleModel, { foreignKey: 'tipocombustibleid', as: 'combustible' });



export default VehiculoModel;