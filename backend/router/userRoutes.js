import {Router} from 'express'
import {getUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/userController.js'

const userRoutes = Router()

userRoutes.get("/", getUsers)
userRoutes.get("/:id", getUserById)
userRoutes.post("/", createUser)
userRoutes.patch("/:id", updateUser)
userRoutes.delete("/:id", deleteUser)

export default userRoutes