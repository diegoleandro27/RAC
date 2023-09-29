import { Router } from "express";
import { deleteMarcas, createMarcas, getAllMarcas, getMarcas, putMarcas } from "../controllers/MarcaController.js";
const router = Router();

// Enrutamiento Marcas 
router.get('/', getAllMarcas); 
router.get('/:id', getMarcas); 
router.post('/', createMarcas); 
router.put('/:id', putMarcas); 
router.delete('/:id', deleteMarcas);

export default router; 