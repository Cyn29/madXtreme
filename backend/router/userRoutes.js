import {Router} from 'express'
import {getUsers, getUserById, createUser} from '../controllers/userController.js'

const userRoutes = Router()

userRoutes.get("/", getUsers)
userRoutes.get("/:id", getUserById)
userRoutes.post("/", createUser)


export default userRoutes