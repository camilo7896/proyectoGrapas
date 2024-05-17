import express from 'express';
import Tools from './models/tools.model.js';
import getDataProduction from '../controllers/dataProduction.controller.js';

const router =express.Router();

router.get('/', getDataProduction)

router.get('/:id', getDataProductionById)

router.post('/', createDataProduction)

router.put('/:id', updateData)

router.delete('/:id', deleteData)
  
export default router;