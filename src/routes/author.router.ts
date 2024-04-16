 import { Router } from 'express';
 import { getAllAuthors,
         getAuthorById, 
         updateAuthor, 
         createAuthor, 
         deleteAuthor } from '../controllers/author.controller';

 const authorRouter = Router();

 authorRouter.get('/', getAllAuthors);
 authorRouter.get('/:id', getAuthorById);
 authorRouter.post('/', createAuthor);
 authorRouter.put('/:id', updateAuthor);
 authorRouter.delete('/:id', deleteAuthor);



 export default authorRouter;