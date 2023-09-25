import { Router } from "express";
import { createCombustibles, deleteCombustibles, getAllCombustibles, getCombustibles, putCombustibles } from "../controllers/CombustibleController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllCombustibles); 
router.get('/:id', getCombustibles); 
router.post('/', createCombustibles); 
router.put('/:id', putCombustibles); 
router.delete('/:id', deleteCombustibles);


export default router; 