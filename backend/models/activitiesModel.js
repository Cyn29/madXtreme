import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ActivityModel = db.define('activities', {
    id_activity: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    admin_id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    activity_image: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    title_activity: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    category_activity: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    act_description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    price_activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    opinion_activity: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    details_activity: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    date1_activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock1_activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date2_activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock2_activity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
}, {
    tableName: 'activities',
});

export default ActivityModel;
