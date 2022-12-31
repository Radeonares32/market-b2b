"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSign = exports.getLogout = exports.getSign = exports.getHome = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
// Controllers
const controllers_1 = require("../controllers/controllers");
exports.getHome = app.get('/', controllers_1.admin.getHome);
exports.getSign = app.get('/sign', controllers_1.admin.getSign);
exports.getLogout = app.get('/logout', controllers_1.admin.getLogout);
exports.postSign = app.post('/sign', controllers_1.admin.postSign);
