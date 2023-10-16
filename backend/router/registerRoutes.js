import {Router} from 'express'
import {postRegistration} from '../controllers/authController.js'

const registerRoutes = Router()
registerRoutes.post("/", postRegistration)

export default registerRoutes
