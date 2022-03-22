import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req, res) => {
    res.redirect('/api/image');
});

routes.use('/image', image.image);

export default routes;
