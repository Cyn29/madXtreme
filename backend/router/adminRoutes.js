import {Router} from 'express'
import {getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin} from '../controllers/adminController.js'

const adminRoutes = Router()

adminRoutes.get("/", getAdmins)
adminRoutes.get("/:id", getAdminById)
adminRoutes.post("/", createAdmin)
adminRoutes.patch("/:id", updateAdmin)
adminRoutes.delete("/:id", deleteAdmin)

export default adminRoutes