import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Sequelize } from "sequelize";

export const postRegistration = async (req, res) => {
    const { email, user_password } = req.body;
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

export const postLogin = async (req, res) => {
    const { email, user_password } = req.body;
    const userWithEmail = await UserModel.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    if (!userWithEmail)
        return res.json({ message: "Email or password does not match!" });
    const match = await bcrypt.compare(
        user_password,
        userWithEmail.user_password
    );

    if (!match) {
        return res.status(401).json({ message: "Email or password does not match!" });
    }

    const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },
        process.env.JWT_SECRET
    );
    res.json({ message: "Welcome back!", token: jwtToken });
};
