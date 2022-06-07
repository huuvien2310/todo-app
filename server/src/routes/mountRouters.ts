import express from 'express';
import todo_endpoints from '../endpoints/todo_endpoints';

const router = express.Router();

router.get('/todos', todo_endpoints.getTodos);
router.post('/todos', todo_endpoints.postTodos);
router.put('/todos/:userId/:id', todo_endpoints.putTodos);

export default router;