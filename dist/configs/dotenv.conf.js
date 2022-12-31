"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotenvConf = void 0;
const dotenv_1 = require("dotenv");
const dotenvConf = () => {
    (0, dotenv_1.config)();
};
exports.dotenvConf = dotenvConf;
