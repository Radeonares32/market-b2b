import { Handler } from 'express'

export const getSign:Handler = (req,res) => {
    res.render('home/signin')
}
export const getLogin:Handler = (req,res) => {
    res.render('home/login')
}