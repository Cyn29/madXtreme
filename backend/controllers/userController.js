import UserModel from '../models/userModel.js'

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.findAll();
        const usersWithUUID = users.map(user => {
            return {
                id: user.id ? Buffer.from(user.id).toString('hex') : null,
                email: user.email,
                user_password: user.user_password
            };
        });
        res.json(usersWithUUID);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = Buffer.from(req.params.id, 'hex');
        const user = await UserModel.findByPk(id);
        const userWithHexId = {
            id: user.id ? user.id.toString('hex') : null,
            email: user.email,
            user_password: user.user_password
        };
        res.json(userWithHexId);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
