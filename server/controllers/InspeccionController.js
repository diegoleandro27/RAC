import { where } from 'sequelize';
import InspeccionModel from '../models/InspeccionModel.js'; 
import EmpleadosModel from '../models/EmpleadosModel.js';
import VehiculoModel from '../models/VehiculosModel.js';
import ClientesModel from '../models/ClientesModel.js';



// Mostrar todas las modelos
export const getAllInspeccion = async (req, res) =>{
    try {
        const Inspeccion= await InspeccionModel.findAll({
            include: [
            { model: EmpleadosModel, as: 'empleado' }, 
            { model: VehiculoModel, as: 'vehiculo'}, 
            { model: ClientesModel, as: 'cliente'}
        ]})
        res.json(Inspeccion)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una Renta
export const getInspeccion = async (req, res) => {
    try {
        const Inspeccion = await InspeccionModel.findAll({
            where:{ id:req.params.id }
        })
        res.json(Renta[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una Renta 
export const createInspeccion = async (req, res) => {
    try {
       await InspeccionModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una Modelos
export const putInspeccion = async (req, res) => {
    try {
        await InspeccionModel.update(req.body, {
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
export const deleteInspeccion = async (req, res) => {
    try {
        await InspeccionModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}