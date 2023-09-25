import CombustibleModel from '../models/CombustibleModel.js';
import { where } from 'sequelize';

// Mostrar todas las marcas 
export const getAllCombustibles = async (req, res) =>{
    try {
        const combustible = await CombustibleModel.findAll()
        res.json(combustible)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una marca 
export const getCombustibles = async (req, res) => {
    try {
        const combustible = await CombustibleModel.findAll({
            where: { id:req.params.id }
        })
        res.json(combustible[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una marca 
export const createCombustibles = async (req, res) => {
    try {
       await CombustibleModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una marca
export const putCombustibles = async (req, res) => {
    try {
        await CombustibleModel.update(req.body, {
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
export const deleteCombustibles = async (req, res) => {
    try {
        await CombustibleModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}