import {Router} from 'express';
import { registerBook, getBooks, updateBook, deleteBook } from '../controllers/booksController.js';
import tokenValidator from '../middlewares/tokenValidator.js';

const booksRouter = Router();

booksRouter.get('/books', getBooks);
booksRouter.post('/books', tokenValidator, registerBook);
booksRouter.put('/books', tokenValidator, updateBook);
booksRouter.delete('/books', tokenValidator, deleteBook);

export default booksRouter;