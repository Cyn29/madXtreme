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
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
}
checkDatabaseConnection();

export default db;