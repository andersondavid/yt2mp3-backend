"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
router.get('/io/', UserController_1.UserController.socket);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map