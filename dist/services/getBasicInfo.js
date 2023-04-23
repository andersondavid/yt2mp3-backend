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
const ytdl_core_1 = __importDefault(require("ytdl-core"));
function getBasicInfo(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { url } = options;
        try {
            const videoInfo = yield ytdl_core_1.default.getBasicInfo(url);
            console.log('Informções do video carregadas');
            return videoInfo;
        }
        catch (error) {
            console.error('ERRO: getBasicInfo');
            return error;
        }
    });
}
exports.default = getBasicInfo;
//# sourceMappingURL=getBasicInfo.js.map