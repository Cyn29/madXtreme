import db from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize';

const UserModel = db.define("users", {
    id: {
        type: DataTypes.BLOB(16),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    email: { type: DataTypes.STRING },
    user_password: { type: DataTypes.STRING }
},
    {
        timestamps: false
    })

    db.sync()
    .then(() => {
        console.log('Modelo sincronizado correctamente');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo:', error);
    });

export default UserModel;