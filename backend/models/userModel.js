import connection from "../database/db.js";

class UserModel {
    static async getUsers() {
        try {
            const users = await connection.query("SELECT * FROM users");
            return users;
        } catch (error) {
            console.error("Error al consultar la base de datos:", error);
            throw error;
        }
    }
}

export default UserModel;
