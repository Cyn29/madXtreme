import UserModel from '../models/userModel.js';

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await UserModel.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener usuarios' });
    }
  }
}

export default UserController;