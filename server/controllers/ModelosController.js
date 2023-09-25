import { where } from 'sequelize';
import ModelosModel from '../models/ModelosModel.js'; 



// Mostrar todas las modelos
export const getAllModelos = async (req, res) =>{
    try {
        const modelos = await ModelosModel.findAll()
        res.json(modelos)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una Modelos 
export const getModelos = async (req, res) => {
    try {
        const modelos = await ModelosModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(modelos[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una Modelos 
export const createModelos = async (req, res) => {
    try {
       await ModelosModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una Modelos
export const putModelos = async (req, res) => {
    try {
        await ModelosModel.update(req.body, {
            where: {
                id: req.params.id 
            }
        })
        res.json({
            "message": "Modelos actualizada correctamente"
        }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
 } 

//Eliminar una Modelos
export const deleteModelos = async (req, res) => {
    try {
        await ModelosModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}