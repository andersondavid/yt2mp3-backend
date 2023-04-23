"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ytdl_core_1 = __importDefault(require("ytdl-core"));
function loadStream(options) {
    try {
        const stream = (0, ytdl_core_1.default)(options.url, {
            quality: 'highest',
            filter: 'audioonly',
        });
        console.log('Stream carregada');
        return stream;
    }
    catch (error) {
        return error;
    }
}
exports.default = loadStream;
//# sourceMappingURL=loadStream.js.map