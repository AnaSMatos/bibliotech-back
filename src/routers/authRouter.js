import {Router} from 'express';
import {signUp, signIn, deleteUser, getUsers, editUser} from '../controllers/authController.js';

const authRouter = Router();

authRouter.post('/signup', signUp);
authRouter.post('/signin', signIn);
authRouter.post('/signin', signIn);
authRouter.put('/users', editUser);
authRouter.get('/users', getUsers);
authRouter.delete('/users', deleteUser);

export default authRouter;