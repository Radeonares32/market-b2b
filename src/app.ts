import express from 'express'
import http from 'http'
import chalk from 'chalk'
import path from 'path'
import bodyParser from 'body-parser'
import session from 'express-session'

import { UserModel } from './models/models'
//? Database
import { mongoConnect } from './database/database'

const app = express()
const server = http.createServer(app)

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve('./src'), '/views'))


app.use(session({
    secret: "radeonres",
    resave: false,
    saveUninitialized: true,
}))
app.use(express.static(path.join(path.resolve('./src'), '/public')))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
// Routes
import { homeRoutes, userRoutes, adminRoutes } from './routes/routes'

app.use('/',
    homeRoutes.getHome,
    userRoutes.getSign,
    userRoutes.getLogin,
    userRoutes.postLogin,
    userRoutes.getLogout
)
app.use('/admin',
    adminRoutes.getHome,
    adminRoutes.getSign
)

UserModel.find({ email: "admin@gmail.com", password: "123" }).then(user => {
    if (user.length > 0) {
        console.log(chalk.red('admin user already'))
    }
    else {
        UserModel.create({ email: "admin@gmail.com", password: "123" }).then(() => {
            console.log(chalk.gray('admin user created'))
        })
    }
})

server.listen(3000, () => {
    mongoConnect()
    console.log(chalk.green("Server running"))
})