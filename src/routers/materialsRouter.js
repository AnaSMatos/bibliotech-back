import {Router} from 'express';
import { registerMaterial, getMaterials } from '../controllers/materialsController.js';

const materialsRouter = Router();

materialsRouter.get('/materials', getMaterials);
materialsRouter.post('/materials', registerMaterial);

export default materialsRouter;