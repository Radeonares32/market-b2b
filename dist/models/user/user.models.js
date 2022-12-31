"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    image: {
        type: String,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    cardLastName: {
        type: String,
        default: ""
    },
    cardName: {
        type: String,
        default: ""
    },
    cardNumber: {
        type: Number,
        default: 0
    },
    cardCvv: {
        type: Number,
        default: 0
    }
});
exports.UserModel = (0, mongoose_1.model)('User', UserSchema);
