import { Router } from "express";
import { createClientes, deleteClientes, getAllClientes, getClientes, putClientes } from "../controllers/ClientesController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllClientes); 
router.get('/:id', getClientes); 
router.post('/', createClientes); 
router.put('/:id', putClientes); 
router.delete('/:id', deleteClientes);


export default router; 