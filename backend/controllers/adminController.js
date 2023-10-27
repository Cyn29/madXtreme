import AdminModel from "../models/adminModel.js";
import { Sequelize } from "sequelize";
import { validateAdmin } from "../validations/adminValidations.js"

export const getAdmins = async (req, res) => {
    try {
        const admins = await AdminModel.findAll();
        const adminsWithUUID = admins.map((admin) => {
            return {
                id: admin.id ? Buffer.from(admin.id).toString("hex") : null,
                email: admin.email,
                admin_password: admin.admin_password
            };
        });
        res.json(adminsWithUUID);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAdminById = async (req, res) => {
    try {
        const id = Buffer.from(req.params.id, "hex");
        const admin = await AdminModel.findByPk(id);
        const adminWithHexId = {
            id: admin.id ? admin.id.toString("hex") : null,
            email: admin.email,
            admin_password: admin.admin_password,
        };
        res.json(adminWithHexId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createAdmin = async (req, res) => {
    const validationResult = validateAdmin(req.body);
    if (validationResult.success) {
        const adminData = validationResult.data; 
        const uuid = Sequelize.fn("uuid");
        const binaryUuid = Sequelize.fn("UUID_TO_BIN", uuid);
        try {
            const newAdmin = await AdminModel.create({
                id: binaryUuid,
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
    try {
        const bufferedId = Buffer.from(req.params.id, "hex");
        const existingAdmin = await AdminModel.findOne({
            where: { id: bufferedId },
        })
        if(!existingAdmin) {
            return res.status(400).json({message: "Admin not found"});
        }
        const updatedAdmin = await AdminModel.update(req.body, {
            where: { id: req.params.id },
        });
        if (updatedAdmin) {
            return res.status(200).json({ message: "Admin updated successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const bufferedId = Buffer.from(req.params.id, "hex");
        const deletedAdmin = await AdminModel.destroy({
            where: { id: bufferedId },
        });
        if (deletedAdmin) {
            return res.status(200).json({ message: "Admin deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

