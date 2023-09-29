import { Router } from "express";
import { createRenta, deleteRenta, getAllRenta, getRenta, putRenta } from "../controllers/RentaController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllRenta); 
router.get('/:id', getRenta); 
router.post('/', createRenta); 
router.put('/:id', putRenta); 
router.delete('/:id', deleteRenta);


export default router; 