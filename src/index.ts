import express from 'express';
import routes from './routes/.';
import path from 'path';

const app = express();
const port = 3030;

app.use(express.static('website'));

app.listen(port, () => {
    console.log(`Server is ready and running on port ${port}`);
    console.log(`http://localhost:${port}`);
});


app.use('/api', routes);



app.get('/', async (req, res) =>{
})
