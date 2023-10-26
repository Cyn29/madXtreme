import UserModel from "../models/userModel.js";
import { Sequelize } from "sequelize";
import { validateUser } from "../validations/userValidations.js";

export const getUsers = async (_req, res) => {
    try {
        const users = await UserModel.findAll();
        const usersWithUUID = users.map((user) => {
            return {
                id: user.id ? Buffer.from(user.id).toString("hex") : null,
                email: user.email,
                user_password: user.user_password,
            };
        });
        res.json(usersWithUUID);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = Buffer.from(req.params.id, "hex");
        const user = await UserModel.findByPk(id);
        const userWithHexId = {
            id: user.id ? user.id.toString("hex") : null,
            email: user.email,
            user_password: user.user_password,
        };
        res.json(userWithHexId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const validationResult = validateUser(req.body);
    if (validationResult.success) {
        const userData = validationResult.data; 
        const uuid = Sequelize.fn("uuid");
        const binaryUuid = Sequelize.fn("UUID_TO_BIN", uuid);
        try {
            const newUser = await UserModel.create({
                id: binaryUuid,
                email: userData.email,
                user_password: userData.user_password,
            });
            res.status(201).json({
                message: "The user has been created successfully!",
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

export const updateUser = async (req, res) => {
    try {
        const bufferedId = Buffer.from(req.params.id, "hex");
        const existingUser = await UserModel.findOne({
            where: { id: bufferedId },
        })
        if(!existingUser) {
            return res.status(400).json({message: "User not found"});
        }
        const updatedUser = await UserModel.update(req.body, {
            where: { id: bufferedId },
        });
        if (updatedUser) {
            return res.status(200).json({ message: "User updated successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const bufferedId = Buffer.from(req.params.id, "hex");
        const deletedUser = await UserModel.destroy({
            where: { id: bufferedId },
        });
        if (deletedUser) {
            return res.status(200).json({ message: "User deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

