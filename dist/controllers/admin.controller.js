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
exports.getLogout = exports.postSign = exports.getSign = exports.getHome = void 0;
//Models for testing
const models_1 = require("../models/models");
const getHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const admin = req.session.admin;
    if (admin) {
        const users = yield models_1.UserModel.find();
        res.render('admin/index', { admin, users });
    }
    else {
        res.redirect('/admin/sign?message=reqSign');
    }
});
exports.getHome = getHome;
const getSign = (req, res) => {
    res.render('admin/sign');
};
exports.getSign = getSign;
const postSign = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // testing
    const admin = yield models_1.UserModel.find({ email, password });
    if (admin.length > 0) {
        //@ts-ignore
        req.session.admin = admin[0].email;
        res.redirect('/admin');
    }
    else {
        res.redirect('/admin?message=noUser');
    }
});
exports.postSign = postSign;
const getLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy(() => {
        res.redirect('/admin/sign?message=sLogout');
    });
});
exports.getLogout = getLogout;
