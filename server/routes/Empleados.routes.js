import { Router } from "express";
import { createEmpleados, deleteEmpleados, getAllEmpleados, getEmpleados, putEmpleados } from "../controllers/EmpleadosController.js";
const router = Router(); 


// Enrutamiento Combustibles 
router.get('/', getAllEmpleados); 
router.get('/:id', getEmpleados); 
router.post('/', createEmpleados); 
router.put('/:id', putEmpleados); 
router.delete('/:id', deleteEmpleados);

//Exportacion de enrutador
export default router; 