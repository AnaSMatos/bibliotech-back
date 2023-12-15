import {Router} from 'express';
import { borrowItem, returnItem, getLoansByUser, renewLoan } from '../controllers/loanController.js';
import tokenValidator from '../middlewares/tokenValidator.js';

const loanRouter = Router();

loanRouter.post('/loan', tokenValidator, borrowItem);
loanRouter.post('/return',tokenValidator, returnItem)
loanRouter.post('/renew',tokenValidator, renewLoan)
loanRouter.get('/loans', tokenValidator, getLoansByUser)

export default loanRouter;