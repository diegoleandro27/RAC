import { where } from 'sequelize';
import VehiculosModel from '../models/VehiculosModel.js';

// Mostrar todas las marcas 
export const getAllVehiculos = async (req, res) =>{
    try {
        const Vehiculos = await VehiculosModel.findAll()
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
            "message": "Marca actualizada correctamente"
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