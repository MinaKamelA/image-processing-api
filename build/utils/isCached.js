"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cache_1 = __importDefault(require("node-cache"));
const cache = new node_cache_1.default();
const isCached = (req, res, next) => {
    if (cache.has(req.originalUrl)) {
        res.writeHead(200, {
            'Content-Type': 'image/jpg',
        }).end(cache.get(req.originalUrl));
    }
    else {
        next();
    }
};
exports.default = isCached;
