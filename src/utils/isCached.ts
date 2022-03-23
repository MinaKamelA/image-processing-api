import express, { NextFunction } from 'express';
import nodecache from 'node-cache';

const cache = new nodecache();

const isCached = (
    req: express.Request,
    res: express.Response,
    next: NextFunction
): void => {
    if (cache.has(req.originalUrl)) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
        }).end(cache.get(req.originalUrl));
    } else {
        next();
    }
};

export default isCached;
