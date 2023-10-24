import db from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";

const UserModel = db.define(
    "users",
    {
        id: {
            type: DataTypes.BLOB(16),
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        email: { type: DataTypes.STRING },
        user_password: { type: DataTypes.STRING },
    },
    {
        timestamps: false,
    }
);

export default UserModel;
