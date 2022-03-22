import express from 'express';
import routes from './routes/.';

const app = express();
const port = 3030;

app.use(express.static('website'));

app.get('/', (req: express.Request, res: express.Response): void =>{});

app.listen(port, (): void => {
    console.log(`Server is ready and running on port ${port}`);
    console.log(`http://localhost:${port}`);
});

app.use('/api', routes);

export default app;
