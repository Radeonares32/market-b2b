"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const models_1 = require("./models/models");
//? Database
const database_1 = require("./database/database");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(path_1.default.resolve('./src'), '/views'));
app.use((0, express_session_1.default)({
    secret: "radeonres",
    resave: false,
    saveUninitialized: true,
}));
app.use(express_1.default.static(path_1.default.join(path_1.default.resolve('./src'), '/public')));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// Routes
const routes_1 = require("./routes/routes");
app.use('/', routes_1.homeRoutes.getHome, routes_1.userRoutes.getSign, routes_1.userRoutes.getLogin, routes_1.userRoutes.postLogin, routes_1.userRoutes.getLogout);
app.use('/admin', routes_1.adminRoutes.getHome, routes_1.adminRoutes.getSign, routes_1.adminRoutes.postSign, routes_1.adminRoutes.getLogout);
models_1.UserModel.find({ email: "admin@gmail.com", password: "123" }).then(user => {
    if (user.length > 0) {
        console.log(chalk_1.default.red('admin user already'));
    }
    else {
        models_1.UserModel.create({ email: "admin@gmail.com", password: "123" }).then(() => {
            console.log(chalk_1.default.gray('admin user created'));
        });
    }
});
server.listen(3000, () => {
    (0, database_1.mongoConnect)();
    console.log(chalk_1.default.green("Server running"));
});
