import express from 'express';
import nodeCache from 'node-cache';
import resizer from '../../utils/resizer';
import isCached from '../../utils/isCached';

const image = express.Router();

const cache = new nodeCache();

image.use(isCached);

image.use(resizer.resizer);

image.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        cache.set(req.originalUrl, req.imageBuffer);
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
        }).end(req.imageBuffer);
    }
);

export default {
    image,
};
