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
    userRoutes.getSignup,
    userRoutes.postSignup,
    userRoutes.getLogout
)
app.use('/admin',
    adminRoutes.getHome,
    adminRoutes.getSign,
    adminRoutes.postSign,
    adminRoutes.getLogout
)

server.listen(3000, () => {
    mongoConnect()
    console.log(chalk.green("Server running"))
})