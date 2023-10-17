import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { Sequelize } from "sequelize";
import { validateUser } from "../validations/usersValidations.js";

export const postRegistration = async (req, res) => {
    const validation = validateUser(req.body);

    if (!validation.success) {
        return res.status(400).json({ message: "Check that all fields are correct" });
    }
    
    const { email, user_password } = validation.data;
    const uuid = Sequelize.fn("uuid");
    const binaryUuid = Sequelize.fn("UUID_TO_BIN", uuid);
    const alreadyExistsUser = await UserModel.findOne({
        where: { email },
    }).catch((err) => {
        console.log("Error: ", err);
    });

    if (alreadyExistsUser) {
        return res
            .status(409)
            .json({ message: "User with email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = await UserModel.create({
        id: binaryUuid,
        email,
        user_password: hashedPassword,
    });

    if (!newUser) {
        console.log("Error: ", err);
        res.status(500).json({ error: "Cannot register user at the moment!" });
    }

    res.json({ message: "Thanks for registering" });
};