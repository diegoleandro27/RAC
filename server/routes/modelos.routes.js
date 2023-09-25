import { Router } from "express";
import { createModelos, deleteModelos, getAllModelos, getModelos, putModelos } from "../controllers/ModelosController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllModelos); 
router.get('/:id', getModelos); 
router.post('/', createModelos); 
router.put('/:id', putModelos); 
router.delete('/:id', deleteModelos);


export default router; 