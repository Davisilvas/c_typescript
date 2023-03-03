import { Router } from 'express';
import { createTodo, getTodos, updateTodo, delTodo } from '../controllers/todo_controller';


const router = Router();

router.post('/', createTodo)

router.get('/', getTodos)

router.patch('/:id', updateTodo)

router.delete('/:id', delTodo)

export default router;