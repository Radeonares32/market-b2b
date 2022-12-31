import express from 'express'
const app = express.Router()

// Controllers
import { user } from '../controllers/controllers'


//Get
export const getSign = app.get('/sign',user.getSign)
export const getLogin = app.get('/login',user.getLogin)

//Post
export const postLogin = app.post('/login',user.postLogin)