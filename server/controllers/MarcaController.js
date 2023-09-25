import { where } from 'sequelize';
import MarcaModel from '../models/MarcaModel.js'; 


// Mostrar todas las marcas 
export const getAllMarcas = async (req, res) =>{
    try {
        const marcas = await MarcaModel.findAll()
        res.json(marcas)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una marca 
export const getMarcas = async (req, res) => {
    try {
        const marcas = await MarcaModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(marcas[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una marca 
export const createMarcas = async (req, res) => {
    try {
       await MarcaModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una marca
export const putMarcas = async (req, res) => {
    try {
        await MarcaModel.update(req.body, {
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
export const deleteMarcas = async (req, res) => {
    try {
        await MarcaModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}