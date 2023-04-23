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
const ffmpeg_1 = __importDefault(require("../utils/ffmpeg"));
function convertToMp3(stream, bitrate) {
    return __awaiter(this, void 0, void 0, function* () {
        const convertPromise = new Promise((resolve, reject) => {
            const streamConverted = (0, ffmpeg_1.default)(stream)
                .audioBitrate(bitrate)
                .format('mp3')
                .on('start', () => {
                console.log('Conversão iniciada!');
                //socket.emit('loading_audio', true)
            })
                .on('end', () => {
                console.log('Conversão do audio concluido!');
                //	socket.emit('loading_audio', false)
            })
                .on('error', (err) => {
                reject(err);
            });
            const ffstream = streamConverted.pipe();
            const buffers = [];
            ffstream.on('data', function (buf) {
                buffers.push(buf);
            });
            ffstream.on('end', function () {
                const outputBuffer = Buffer.concat(buffers);
                resolve(outputBuffer);
            });
        });
        return convertPromise
            .then((outputBuffer) => {
            console.log('Enviando buffer do audio!');
            return outputBuffer;
        })
            .catch((error) => console.error(error));
    });
}
exports.default = convertToMp3;
//# sourceMappingURL=convertToMp3.js.map