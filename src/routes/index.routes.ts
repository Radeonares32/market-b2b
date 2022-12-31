import express from 'express'
const app = express.Router()

// Controllers
import { home } from '../controllers/controllers'

export const getHome = app.get('/',home.getHome)

