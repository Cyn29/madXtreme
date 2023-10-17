import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bcryptjs from 'bcryptjs'
import session from 'express-session'
import connection from './database/db.js';
import userRoutes from './router/userRoutes.js';
import adminRoutes from './router/adminRoutes.js';

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(cors())
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use("/admins", adminRoutes)
app.use("/users", userRoutes)

const PORT = process.env.PORT ?? 3000 //default port 3000
app.listen(PORT, () =>
console.log(`listening port ${PORT}`))