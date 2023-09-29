import { Router } from "express";
import { createInspeccion, deleteInspeccion, getAllInspeccion, getInspeccion, putInspeccion } from "../controllers/InspeccionController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllInspeccion); 
router.get('/:id', getInspeccion); 
router.post('/', createInspeccion); 
router.put('/:id', putInspeccion); 
router.delete('/:id', deleteInspeccion);


export default router; 