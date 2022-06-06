import express from 'express';
import todo_endpoints from '../endpoints/todo_endpoints';

const router = express.Router();

router.get('/todos', todo_endpoints.getTodos);
router.post('/todos', todo_endpoints.postTodos);
export default router;