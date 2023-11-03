import AdminModel from "../models/adminModel.js";
import { Sequelize } from "sequelize";
import { validateAdmin } from "../validations/adminValidations.js";

export const getAdmins = async (_req, res) => {
    try {
        const admins = await AdminModel.findAll();
        const adminsWithUUID = admins.map((admin) => {
            return {
                id: admin.id,
                email: admin.email,
                user_password: admin.admin_password,
            };
        });
        res.json(adminsWithUUID);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const id = req.params.id;
        const admin = await AdminModel.findByPk(id);
        const adminWithId = {
            id: admin.id,
            email: admin.email,
            user_password: admin.user_password,
        };
        res.json(adminWithId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAdmin = async (req, res) => {
    const validationResult = validateAdmin(req.body);

    if (validationResult.success) {
        const adminData = validationResult.data;

        try {
            const newUUID = AdminModel.sequelize.literal("uuid()");

            const newAdmin = await AdminModel.create({
                id: newUUID,
                email: adminData.email,
                admin_password: adminData.admin_password,
            });

            res.status(201).json({
                message: "The admin has been created successfully!",
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({
            message: "Invalid data in the request body",
            errors: validationResult.error,
        });
    }
};

export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const updated = await AdminModel.update(req.body, {
            where: { id: id },
        });
        if (updated) {
            const updatedAdmin = await AdminModel.findOne({ where: { id: id } });
            res.json({ message: "Admin updated successfully" });
        } else {
            res.status(404).json({ message: "Admin not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await AdminModel.destroy({
            where: { id: req.params.id },
        });
        if (deletedAdmin) {
            return res
                .status(200)
                .json({ message: "Admin deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
