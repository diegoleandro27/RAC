import { where } from 'sequelize';
import VehiculosModel from '../models/VehiculosModel.js';
import MarcaModels from '../models/MarcaModel.js';
import ModeloModels from '../models/ModelosModel.js';
import CombustibleModel from '../models/CombustibleModel.js';
import TipoVehiculoModel from '../models/TipoVehiculosModel.js';

// Mostrar todas las marcas 
export const getAllVehiculos = async (req, res) =>{
    try {
        const Vehiculos = await VehiculosModel.findAll({
            include: [
            { model: MarcaModels, as: 'marca' }, 
            { model: ModeloModels, as: 'modelo'}, 
            { model: CombustibleModel, as: 'combustible'},
            { model: TipoVehiculoModel, as: 'tipovehiculo'}
        ]})
        res.json(Vehiculos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una marca 
export const getVehiculos = async (req, res) => {
    try {
        const Vehiculos = await VehiculosModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Vehiculos[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una marca 
export const createVehiculos = async (req, res) => {
    try {
       await VehiculosModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una marca
export const putVehiculos = async (req, res) => {
    try {
        await VehiculosModel.update(req.body, {
            where: {
                id: req.params.id 
            }
        })
        res.json({
            "message": "Vehiculo actualizado correctamente"
        }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
 } 

//Eliminar una marca
export const deleteVehiculos = async (req, res) => {
    try {
        await TipoVehiculoModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}