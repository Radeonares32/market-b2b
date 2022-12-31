import express from 'express'
import http from 'http'
import chalk from 'chalk'
import path from 'path'

//? Database
import {mongoConnect } from './database/database'

const app = express()
const server = http.createServer(app)

app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve('./src'), '/views'))

app.use(express.static(path.join(path.resolve('./src'), '/public')))

// Routes
import { homeRoutes } from './routes/routes'

app.use('/',homeRoutes.getHome)



server.listen(3000, () => {
    mongoConnect()
    console.log(chalk.green("Server running"))
})