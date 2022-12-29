import express from 'express'
import http from 'http'
import chalk from 'chalk'
import path from 'path'

const app = express()
const server = http.createServer(app)

app.set('view engine','ejs')
app.set('views',path.join(path.resolve('./src'),'/views'))

app.get('/',(req,res)=>{
    res.render('index')
})


server.listen(3000,()=>{
    console.log(chalk.green("Server running"))
})