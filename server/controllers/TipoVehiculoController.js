import { where } from 'sequelize';
import TipoVehiculoModel from '../models/TipoVehiculosModel.js';

// Mostrar todas las marcas 
export const getAllTipoVehiculos = async (req, res) =>{
    try {
        const tipoVehiculo = await TipoVehiculoModel.findAll()
        res.json(tipoVehiculo)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una marca 
export const getTipoVehiculos = async (req, res) => {
    try {
        const tipoVehiculo = await TipoVehiculoModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(tipoVehiculo[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una marca 
export const createTipoVehiculos = async (req, res) => {
    try {
       await TipoVehiculoModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una marca
export const putTipoVehiculos = async (req, res) => {
    try {
        await TipoVehiculoModel.update(req.body, {
            where: {
                id: req.params.id 
            }
        })
        res.json({
            "message": "Marca actualizada correctamente"
        }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
 } 

//Eliminar una marca
export const deleteTipoVehiculos = async (req, res) => {
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