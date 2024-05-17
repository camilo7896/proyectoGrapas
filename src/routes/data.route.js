import express from 'express';
const router =express.Router();
import Tools from '../models/data.model.js';
import { getDataProduction, getDataProductionById, createDataProduction, updateData, deleteData } from "../controllers/dataProduction.controller.js";

//Obtener datos
router.get("/",getDataProduction);

//Obtener datos por id
router.get("/:id",getDataProductionById);

//Crear datos
router.post("/",createDataProduction);

//Actualizar datos
router.patch("/:id",updateData);

//Eliminar dato por id
router.delete("/:id",deleteData);

export default router;