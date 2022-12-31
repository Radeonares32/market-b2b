"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSign = exports.postLogin = exports.getLogout = exports.getLogin = exports.getSign = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
// Controllers
const controllers_1 = require("../controllers/controllers");
//Get
exports.getSign = app.get('/sign', controllers_1.user.getSign);
exports.getLogin = app.get('/login', controllers_1.user.getLogin);
exports.getLogout = app.get('/logout', controllers_1.user.getLogout);
//Post
exports.postLogin = app.post('/login', controllers_1.user.postLogin);
exports.postSign = app.post('/sign', controllers_1.user.postSign);
