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
exports.UserController = void 0;
const handleUsers_1 = __importDefault(require("../utils/handleUsers"));
exports.UserController = {
    socket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = req.params.uid;
            if (handleUsers_1.default.checkUser({ uid })) {
                res.json({ status: 'REQUEST_STATUS_OK', userStatus: 'ALREADY_CONN' });
            }
            else {
                handleUsers_1.default.addUser({
                    uid,
                });
                res.json({ status: 'REQUEST_STATUS_OK', userStatus: 'NEW_CONN' });
            }
        });
    },
};
//# sourceMappingURL=UserController.js.map