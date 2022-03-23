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
const resizer_1 = __importDefault(require("../../utils/resizer"));
describe('Test full image resize function', () => {
    let inPath = path_1.default.resolve(`assets/full/iceland.jpg`);
    let outPath = path_1.default.resolve(`assets/thumbs/iceland-thumb.jpg`);
    it(`should throw error`, () => __awaiter(void 0, void 0, void 0, function* () {
        yield expectAsync(resizer_1.default.resizeImage(inPath, outPath, 200, 200)).toBeRejectedWithError();
    }));
    it(`should run without errors`, () => __awaiter(void 0, void 0, void 0, function* () {
        inPath = path_1.default.resolve(`assets/full/fjord.jpg`);
        outPath = path_1.default.resolve(`assets/thumbs/fjord-thumb.jpg`);
        expect(yield resizer_1.default.resizeImage(inPath, outPath, 200, 200)).toBeTruthy();
    }));
});
