"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loadStream_1 = __importDefault(require("../loadStream"));
jest.mock('ytdl-core');
describe('loadStream function', () => {
    it('should return a stream when ytdl call is successful', () => {
        const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        const bitrate = 128;
        const mockStream = {};
        const result = (0, loadStream_1.default)({ url, bitrate });
        expect(result).toBe(mockStream);
    });
});
//# sourceMappingURL=convertToMp3.test.js.map