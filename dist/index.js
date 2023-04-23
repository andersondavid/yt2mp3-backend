"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const port = process.env.PORT || 3000;
const app_1 = __importDefault(require("./app"));
const socket_1 = __importDefault(require("./services/socket"));
const httpServer = (0, http_1.createServer)(app_1.default);
const io = new socket_io_1.Server(httpServer, { cors: { origin: '*' } });
httpServer.listen(port, () => {
    console.log(`Server running at ${port}`);
});
(0, socket_1.default)(io);
//# sourceMappingURL=index.js.map