import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
        return res
            .status(401)
            .json({ message: "Email or password does not match!" });
    }

    const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },
        process.env.JWT_SECRET
    );
    res.json({ message: "Welcome back!", token: jwtToken });
};
