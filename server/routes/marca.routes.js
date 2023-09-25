import { Router } from "express";
import { deleteMarcas, createMarcas, getAllMarcas, getMarcas, putMarcas } from "../controllers/MarcaController.js";
import { createTipoVehiculos, deleteTipoVehiculos, getAllTipoVehiculos, getTipoVehiculos, putTipoVehiculos } from "../controllers/TipoVehiculoController.js";
const router = Router();

// Enrutamiento Marcas 
router.get('/', getAllMarcas); 
router.get('/:id', getMarcas); 
router.post('/', createMarcas); 
router.put('/:id', putMarcas); 
router.delete('/:id', deleteMarcas);




//Enrutamiento Tipo de Vehiculos
router.get('/', getAllTipoVehiculos); 
router.get('/:id', getTipoVehiculos); 
router.post('/', createTipoVehiculos); 
router.put('/:id', putTipoVehiculos); 
router.delete('/:id', deleteTipoVehiculos);


export default router; 