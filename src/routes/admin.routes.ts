import express from 'express'
const app = express.Router()

// Controllers
import { admin } from '../controllers/controllers'

export const getHome = app.get('/',admin.getHome)
export const getSign = app.get('/sign',admin.getSign)