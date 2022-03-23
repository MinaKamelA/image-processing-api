import express, { NextFunction } from 'express';
import path from 'path';
import sharp from 'sharp';

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

const resizer = async (
    req: express.Request,
    res: express.Response,
    next: NextFunction
) => {
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const imageName = req.query.name;
    const inPath = path.resolve(`assets/full/${imageName}.jpg`);
    const outPath = path.resolve(`assets/thumbs/${imageName}-thumb.jpg`);
    try {
        const resizedImageBuffer = await resizeImage(
            inPath,
            outPath,
            width,
            height
        );
        req.imageBuffer = resizedImageBuffer;
        next();
    } catch (err) {
        res.status(404).send(`The image you are looking for doesn't exist`);
    }
};

export default { resizer, resizeImage };
