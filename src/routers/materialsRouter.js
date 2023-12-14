import {Router} from 'express';
import { registerMaterial, getMaterials, deleteMaterial, updateMaterial } from '../controllers/materialsController.js';
import tokenValidator from '../middlewares/tokenValidator.js';

const materialsRouter = Router();

materialsRouter.get('/materials', getMaterials);
materialsRouter.post('/materials', tokenValidator,registerMaterial);
materialsRouter.put('/materials', tokenValidator, updateMaterial);
materialsRouter.delete('/materials', tokenValidator, deleteMaterial);

export default materialsRouter;