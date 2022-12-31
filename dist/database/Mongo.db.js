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
exports.mongoConnect = void 0;
const chalk_1 = __importDefault(require("chalk"));
const mongoose_1 = require("mongoose");
const config_1 = require("../configs/config");
//! Dotenv Config
config_1.dotenv.dotenvConf();
const mongoConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(`mongodb+srv://admin:admin@cluster0.3gxnkct.mongodb.net/?retryWrites=true&w=majority`);
        /* await connect(`mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/?authSource=${process.env.MONGO_DB_NAME}`) */
        console.log(chalk_1.default.blue("mongodb connected !!"));
    }
    catch (err) {
        console.log(err);
    }
});
exports.mongoConnect = mongoConnect;
