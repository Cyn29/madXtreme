import {Router} from 'express'
import UserController from '../controllers/userController.js'

const userRoutes = Router()

userRoutes.get("/", UserController.getUsers)


export default userRoutes