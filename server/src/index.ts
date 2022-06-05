import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});