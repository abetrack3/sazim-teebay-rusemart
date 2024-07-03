import express, { Application, Request, Response } from 'express';
import exampleRoutes from './routes/exampleRoutes';

const app: Application = express();
const port: number = 3000;

app.use(express.json());
app.use('/api', exampleRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
