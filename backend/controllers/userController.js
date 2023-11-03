import UserModel from "../models/userModel.js";
import { Sequelize } from "sequelize";
import { validateUser } from "../validations/userValidations.js";
import bcrypt from 'bcryptjs';

export const getUsers = async (_req, res) => {
  try {
    const users = await UserModel.findAll();
    const usersWithUUID = users.map((user) => {
      return {
        id: user.id,
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
    const id = req.params.id;
    const user = await UserModel.findByPk(id);
    const userWithHexId = {
      id: user.id,
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

    try {
      const newUUID = UserModel.sequelize.literal('uuid()');

      const newUser = await UserModel.create({
        id: newUUID,
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
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (req.body.user_password) {
      req.body.user_password = await bcrypt.hash(req.body.user_password, 10);
    }
    const [updatedCount] = await UserModel.update(req.body, {
      where: { id: id }
    });

    if (updatedCount > 0) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await UserModel.destroy({
      where: { id: req.params.id },
    });
    if (deletedUser) {
      return res.status(200).json({ message: "User deleted successfully!" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
