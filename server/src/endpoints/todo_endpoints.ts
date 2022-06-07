import Todo from "../models/todo";
import sql from "../utils/sql";

async function getTodos(req: any, res: any): Promise<void> {
    try{
        const todos: Todo[] = await sql<Todo[]>
            `SELECT * FROM todo`;
        res.status(200).json(todos);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function postTodos(req: any, res: any): Promise<void>{
    try {
        const { userId, id, title, completed } = req.body;
        const result: any = await sql `
            INSERT INTO todo (userId, id, title, completed)
            VALUES (${userId}, ${id}, ${title}, ${completed})`;
        res.status(201).json(result);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function putTodos(req: any, res: any): Promise<void> {
    try {
        const userId = req.params.userId;
        const id = req.params.id;
        const { title, completed } = req.body;
        const result: any = await sql `
            UPDATE todo
            SET title = ${title}, completed = ${completed}
            WHERE userId = ${userId} AND id = ${id}`;
        res.status(201).json(result);
    } catch(err) {
        const userId = req.params.userId;
        console.log(userId);
        res.status(500).json(err);
    }
}

export default {
    getTodos,
    postTodos,
    putTodos,
};