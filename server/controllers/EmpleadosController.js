import EmpleadosModel from '../models/EmpleadosModel.js';
import { where } from 'sequelize';

// Mostrar todas las Empleados
export const getAllEmpleados = async (req, res) =>{
    try {
        const Empleados = await EmpleadosModel.findAll()
        res.json(Empleados)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar unaEmpleados
export const getEmpleados = async (req, res) => {
    try {
        const Empleados = await EmpleadosModel.findAll({
            where: { id:req.params.id }
        })
        res.json(Empleados[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una Empleado
export const createEmpleados = async (req, res) => {
    try {
       await EmpleadosModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar un empleado
export const putEmpleados = async (req, res) => {
    try {
        await EmpleadosModel.update(req.body, {
            where: {
                id: req.params.id 
            }
        })
        res.json({
            "message": "Empleados actualizada correctamente"
        }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
 } 

//Eliminar un Empleado
export const deleteEmpleados = async (req, res) => {
    try {
        await EmpleadosModel.destroy({
            where: {id: req.params.id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}