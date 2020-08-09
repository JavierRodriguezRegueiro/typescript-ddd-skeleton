import { Express } from 'express';
import container from "../dependency-injection";

export const register = (app: Express) => {
  // const getBooksController: GetBooksController = container.get('BookStore.GetBooksController');
  // app.get('/books/', getBooksController.run.bind(getBooksController));
};
