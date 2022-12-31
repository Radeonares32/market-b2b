import express from 'express'
const app = express.Router()

// Controllers
import { user } from '../controllers/controllers'

export const getSign = app.get('/sign',user.getSign)
export const getLogin = app.get('/login',user.getLogin)