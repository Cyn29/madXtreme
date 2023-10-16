import UserModel from "../models/userModel.js";
import { Sequelize } from "sequelize";
import { validateUser } from "../validations/usersValidations.js";

export const getUsers = async (req, res) => {
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