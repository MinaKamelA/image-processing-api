"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resizeImage = (inFilePath, outFilePath, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    let resizedImage;
    const sharpObject = (0, sharp_1.default)(inFilePath);
    if (Number.isNaN(width)) {
        if (Number.isNaN(height)) {
            result = sharpObject.toBuffer();
        }
        else {
            resizedImage = sharpObject.resize({ height: height });
            yield resizedImage.toFile(outFilePath);
            result = resizedImage.toBuffer();
        }
    }
    else {
        if (Number.isNaN(height)) {
            resizedImage = sharpObject.resize({ width: width });
        }
        else {
            resizedImage = sharpObject.resize(width, height);
        }
        yield resizedImage.toFile(outFilePath);
        result = resizedImage.toBuffer();
    }
    return yield result;
});
const resizer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const imageName = req.query.name;
    const inPath = path_1.default.resolve(`assets/full/${imageName}.jpg`);
    const outPath = path_1.default.resolve(`assets/thumbs/${imageName}-thumb.jpg`);
    try {
        const resizedImageBuffer = yield resizeImage(inPath, outPath, width, height);
        req.imageBuffer = resizedImageBuffer;
        next();
    }
    catch (err) {
        res.status(404).send(`The image you are looking for doesn't exist`);
    }
});
exports.default = { resizer, resizeImage };
