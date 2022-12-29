import express from 'express'
import http from 'http'
import chalk from 'chalk'
import path from 'path'

const app = express()
const server = http.createServer(app)

app.set('view engine','ejs')
app.set('views',path.join(path.resolve('./src'),'/views'))

app.use(express.static(path.join(path.resolve('./src'),'/public')))

// Routes
import { homeRoutes } from './routes/routes'

app.use('/',homeRoutes.getHome)

server.listen(3000,()=>{
    console.log(chalk.green("Server running"))
})