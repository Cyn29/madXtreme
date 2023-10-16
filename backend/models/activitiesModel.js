import db from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize';

const ActivityModel = db.define("activities", {
    id_activity: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },

    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    user_id: {  
        type: DataTypes.UUID,
    },

    act_description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});

export default ActivityModel;