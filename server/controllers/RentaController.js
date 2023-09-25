import { where } from 'sequelize';
import RentaModel from '../models/RentaModel.js'; 



// Mostrar todas las modelos
export const getAllRenta = async (req, res) =>{
    try {
        const Renta = await RentaModel.findAll()
        res.json(Renta)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una Renta
export const getRenta = async (req, res) => {
    try {
        const Renta = await RentaModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Renta[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una Renta 
export const createRenta = async (req, res) => {
    try {
       await RentaModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una Modelos
export const putRenta = async (req, res) => {
    try {
        await RentaModel.update(req.body, {
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
export const deleteRenta = async (req, res) => {
    try {
        await RentaModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}