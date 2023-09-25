import ClientesModel from '../models/ClientesModel.js';
import { where } from 'sequelize';

// Mostrar todas las Clientes
export const getAllClientes = async (req, res) =>{
    try {
        const Clientes = await ClientesModel.findAll()
        res.json(Clientes)
    } catch (error) {
        res.json({message: error.message})
        
    }
}

//Mostrar una marca 
export const getClientes = async (req, res) => {
    try {
        const Clientes = await ClientesModel.findAll({
            where: { id:req.params.id }
        })
        res.json(Clientes[0]); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}

//Crear una marca 
export const createClientes = async (req, res) => {
    try {
       await ClientesModel.create(req.body)
       res.json({
        "message": "Registro creado correctamente"
       }); 
    } catch (error) {
        res.json({message: error.message}); 
    }
}


//Actualizar una marca
export const putClientes = async (req, res) => {
    try {
        await ClientesModel.update(req.body, {
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

//Eliminar un cliente
//Eliminar una marca
//Eliminar una marca
export const deleteClientes = async (req, res) => {
    try {
        const id = sanitizeInput(req.params.id); // Sanitize the id
        await ClientesModel.destroy({
            where: {id: id} 
        })
        res.json({
            "message":"Registro Eliminado correctamente" 
        })
    } catch (error) {
        
    }
}

function sanitizeInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Remove leading and trailing whitespace
    const sanitizedInput = input.trim();

    // Remove or replace any potentially harmful characters
    // Example: Removing HTML tags
    const sanitizedHtml = sanitizedInput.replace(/<[^>]*>/g, '');

    // You can add more sanitization logic here as needed

    return sanitizedHtml;
}
