import express, { Express } from 'express';
import cors from 'cors';
import router from './routes/mountRouters';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
}) 

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});