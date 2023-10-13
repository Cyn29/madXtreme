import createPool from '../database/db.js';

class UserModel {
  static async getUsers() {
    try {
      const pool = createPool();
      const users = await pool.query("SELECT * FROM users");
      return users;
    } catch (error) {
      console.error("Error al consultar la base de datos:", error);
      throw error;
    }
  }
}

export default UserModel;