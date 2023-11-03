import db from "../database/db.js";
import { DataTypes, Sequelize } from "sequelize";

const AdminModel = db.define(
  "admins",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    email: { type: DataTypes.STRING },
    admin_password: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

export default AdminModel;
