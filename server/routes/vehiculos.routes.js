import { Router } from "express";
import { createVehiculos, deleteVehiculos, getAllVehiculos, getVehiculos, putVehiculos } from "../controllers/VehiculosController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllVehiculos); 
router.get('/:id', getVehiculos); 
router.post('/', createVehiculos); 
router.put('/:id', putVehiculos); 
router.delete('/:id', deleteVehiculos);


export default router; 