import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postLogin = async (req, res) => {
  const { email, user_password } = req.body;
  const user = await UserModel.findOne({ where: { email } });

  if (!user) {
    return res.json({ message: "Email or password does not match!" });
  }

  const match = await bcrypt.compare(user_password, user.user_password);

  if (!match) {
    return res.json({ message: "Email or password does not match!" });
  }

  const jwtToken = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET
  );

  res.json({ message: "Welcome back!", token: jwtToken });
};
