import { Router } from "express";
import { createTipoVehiculos, deleteTipoVehiculos, getAllTipoVehiculos, getTipoVehiculos, putTipoVehiculos } from "../controllers/TipoVehiculoController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllTipoVehiculos); 
router.get('/:id', getTipoVehiculos); 
router.post('/', createTipoVehiculos); 
router.put('/:id', putTipoVehiculos); 
router.delete('/:id', deleteTipoVehiculos);


export default router; 