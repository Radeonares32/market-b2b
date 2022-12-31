"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHome = void 0;
const getHome = (req, res) => {
    //@ts-ignore
    const user = req.session.user;
    if (user) {
        res.render('home/index', { user });
    }
    else {
        res.render('home/index', { user });
    }
};
exports.getHome = getHome;
