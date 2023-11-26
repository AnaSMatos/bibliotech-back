import {Router} from 'express';
import { registerBook, getBooks } from '../controllers/booksController.js';

const booksRouter = Router();

booksRouter.get('/books', getBooks);
booksRouter.post('/books', registerBook);

export default booksRouter;