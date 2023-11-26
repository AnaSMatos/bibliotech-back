import {Router} from 'express';
import {signUp, signIn} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);

export default authRouter;