import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
config();

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});

async function checkDatabaseConnection() {
    try {
        await db.authenticate();
        console.log('Connection to the database established correctly.');
    } catch (error) {
        console.error('Could not connect to database:', error);
    }
}
checkDatabaseConnection();

export default db;