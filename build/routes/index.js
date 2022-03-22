"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("./api/image"));
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.redirect('/api/image');
});
routes.use('/image', image_1.default.image);
exports.default = routes;
