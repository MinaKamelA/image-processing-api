import express from 'express';
import sharp from 'sharp';
import path from 'path';
import nodeCache from 'node-cache';

const image = express.Router();

const cache = new nodeCache();

const resizeImage = async (
    inFilePath: string,
    outFilePath: string,
    width: number,
    height: number
): Promise<Buffer> => {
    let result: Promise<Buffer>;
    let resizedImage: sharp.Sharp;
    const sharpObject = sharp(inFilePath);
    if (Number.isNaN(width)) {
        if (Number.isNaN(height)) {
            result = sharpObject.toBuffer();
        } else {
            resizedImage = sharpObject.resize({ height: height });
            await resizedImage.toFile(outFilePath);
            result = resizedImage.toBuffer();
        }
    } else {
        if (Number.isNaN(height)) {
            resizedImage = sharpObject.resize({ width: width });
        } else {
            resizedImage = sharpObject.resize(width, height);
        }
        await resizedImage.toFile(outFilePath);
        result = resizedImage.toBuffer();
    }
    return await result;
};

image.get('/', async (req: express.Request, res: express.Response): Promise <void> => {
    if (cache.has(req.originalUrl)) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
        }).end(cache.get(req.originalUrl));
    } else {
        const width = parseInt(req.query.width as string);
        const height = parseInt(req.query.height as string);
        const imageName = req.query.name;
        const inPath = path.resolve(`assets/full/${imageName}.jpg`);
        const outPath = path.resolve(`assets/thumbs/${imageName}-thumb.jpg`);
        try {
            const imageBuffer = await resizeImage(
                inPath,
                outPath,
                width,
                height
            );
            cache.set(req.originalUrl, imageBuffer);
            res.writeHead(200, {
                'Content-Type': 'image/jpg',
            }).end(imageBuffer);
        } catch (err) {
            res.send(`The image you are looking for doesn't exist`);
        }
    }
});

export default {
    image,
    resizeImage,
};
