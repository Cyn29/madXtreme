import {Router} from 'express'
import {postLogin} from '../controllers/authController.js'

const loginRoutes = Router()
loginRoutes.post("/", postLogin)

export default loginRoutes
