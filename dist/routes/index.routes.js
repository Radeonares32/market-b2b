"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
// Controllers
const controllers_1 = require("../controllers/controllers");
exports.getHome = app.get('/', controllers_1.home.getHome);
