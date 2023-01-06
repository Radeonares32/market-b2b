import express from 'express'
const app = express.Router()

// Controllers
import { user } from '../controllers/controllers'


//Get
export const getSign = app.get('/sign',user.getSign)
export const getSignup = app.get('/login',user.getSignup)
export const getLogout = app.get('/logout',user.getLogout)

//Post
export const postSignup = app.post('/login',user.postSignup)
export const postSign = app.post('/sign',user.postSign)