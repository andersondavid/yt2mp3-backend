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
const getBasicInfo_1 = __importDefault(require("./getBasicInfo"));
const loadStream_1 = __importDefault(require("./loadStream"));
const convertToMp3_1 = __importDefault(require("./convertToMp3"));
const handleUsers_1 = __importDefault(require("../utils/handleUsers"));
function socket(io) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            io.on('connection', (socket) => {
                socket.on('start_url', (options) => __awaiter(this, void 0, void 0, function* () {
                    socket.emit('send_id', socket.id);
                    handleUsers_1.default.addUser({ uid: socket.id });
                    const basicInfo = yield (0, getBasicInfo_1.default)(options);
                    socket.emit('send_info', basicInfo);
                    const stream = yield (0, loadStream_1.default)(options);
                    socket.emit('loading_audio', true);
                    const buffer = yield (0, convertToMp3_1.default)(stream, options.bitrate);
                    socket.emit('buffer', buffer);
                    socket.emit('loading_audio', false);
                }));
                socket.on('disconnect', () => {
                    socket.disconnect();
                    console.log('Usuário desconectado', socket.id);
                });
            });
        }
        catch (error) {
            console.error('Socket IO não conectado.');
        }
    });
}
exports.default = socket;
//# sourceMappingURL=socket.js.map