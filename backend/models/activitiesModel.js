import db from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize';
const ActivityModel = db.define("activities", {
    id_activity: {
        type: DataTypes.INTEGER, autoIncrement: true,
        primaryKey: true,
        allowNull: true,
    },
    activity_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title_activity:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    category_activity:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    act_description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price_activity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    opinion_activity: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    stock_activity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    activityDetails: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},{
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});
export default ActivityModel
;