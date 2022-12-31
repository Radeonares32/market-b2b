import express from 'express'
import http from 'http'
import chalk from 'chalk'
import path from 'path'
import bodyParser from 'body-parser'

//? Database
import {mongoConnect } from './database/database'

const app = express()
const server = http.createServer(app)

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve('./src'), '/views'))

app.use(express.static(path.join(path.resolve('./src'), '/public')))
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
// Routes
import { homeRoutes,userRoutes } from './routes/routes'

app.use('/',
homeRoutes.getHome,
userRoutes.getSign
,userRoutes.getLogin,
userRoutes.postLogin
)



server.listen(3000, () => {
    mongoConnect()
    console.log(chalk.green("Server running"))
})