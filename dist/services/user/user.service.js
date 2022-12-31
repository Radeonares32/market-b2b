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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const models_1 = require("../../models/models");
const middleware_1 = require("../../middlewares/middleware");
class UserService {
    constructor(name, surname, email, password, image, isAdmin, cardName, cardLastName, cardNumber, cardCvv) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._password = password;
        this._image = image;
        this._isAdmin = isAdmin;
        this._cardName = cardName;
        this._cardLastName = cardLastName;
        this._cardNumber = cardNumber;
        this._cardCvv = cardCvv;
    }
    find() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.UserModel.find({ email: this._email });
        });
    }
    sign(hash) {
        return __awaiter(this, void 0, void 0, function* () {
            const decData = yield (0, middleware_1.decrypt)(this._password, hash);
            if (decData) {
                return yield models_1.UserModel.find({ email: this._email, password: hash });
            }
            else {
                return [];
            }
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const encData = yield (0, middleware_1.encrypt)(this._password);
            yield models_1.UserModel.create({ name: this._name, surname: this._surname, email: this._email, password: encData });
        });
    }
}
exports.UserService = UserService;
