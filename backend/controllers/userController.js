import UserModel from '../models/userModel.js'

class UserController {
    static async getUsers(req, res) {
        const users = await UserModel.getUsers
        res.json(users)
    }
}

export default UserController