import {Router} from 'express';
import { borrowItem, returnItem } from '../controllers/loanController.js';

const loanRouter = Router();

loanRouter.post('/loan', borrowItem);
loanRouter.post('/return', returnItem)

export default loanRouter;