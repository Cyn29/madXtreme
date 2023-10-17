import {Router} from 'express'
import {postLogin} from '../controllers/loginController.js'

const loginRoutes = Router()
loginRoutes.post("/", postLogin)

export default loginRoutes
