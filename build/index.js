"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = __importDefault(require("./routes/."));
const app = (0, express_1.default)();
const port = 3030;
app.listen(port, () => {
    console.log(`Server is ready and running on port ${port}`);
    console.log(`http://localhost:${port}`);
});
app.use('/api', _1.default);
exports.default = app;
