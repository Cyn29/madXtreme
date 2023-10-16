import {Router} from 'express'
import {getUsers, getUserById} from '../controllers/userController.js'

const userRoutes = Router()

userRoutes.get("/", getUsers)
userRoutes.get("/:id", getUserById)


export default userRoutes