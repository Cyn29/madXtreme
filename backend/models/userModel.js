import { v4 as uuidv4 } from 'uuid';
import createPool from '../database/db.js';

class UserModel {
    static async getUsers() {
        try {
            const pool = createPool();
            const [rows] = await pool.query("SELECT * FROM users");
            const usersWithUUID = rows.map(user => {
                return {
                    ...user,
                    id: user.id ? uuidv4({ slug: Buffer.from(user.id).toString('hex') }) : null
                };
            });

            return usersWithUUID;
        } catch (error) {
            console.error("Error al consultar la base de datos:", error);
            throw error;
        }
    }
}

export default UserModel;
