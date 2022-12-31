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
exports.getLogout = exports.postSign = exports.postLogin = exports.getLogin = exports.getSign = void 0;
//Services
const services_1 = require("../services/services");
const getSign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render('home/signin');
});
exports.getSign = getSign;
const getLogin = (req, res) => {
    //@ts-ignore
    const user = req.session.user;
    console.log(user);
    res.render('home/login');
};
exports.getLogin = getLogin;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, surname, email, password, passwordRepeat } = req.body;
    if (password === passwordRepeat) {
        const User = new services_1.userServices.UserService(name, surname, email, password);
        yield User.create();
        res.redirect('/sign?message=lsuccess');
    }
    else {
        res.redirect('/login?message=noMatch');
    }
});
exports.postLogin = postLogin;
const postSign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const User = new services_1.userServices.UserService("", "", email, password);
    const user = yield User.find();
    const successUser = yield User.sign(user[0].password);
    if (successUser.length > 0) {
        //@ts-ignore
        req.session.user = user[0].name;
        res.redirect('/');
    }
    else {
        res.redirect('/sign?message=unknow');
    }
});
exports.postSign = postSign;
const getLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/?message=logout');
    });
};
exports.getLogout = getLogout;
