import express from 'express';
import { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bcryptjs from 'bcryptjs'
import session from 'express-session'
import connection from './database/db.js';
import userRoutes from './router/userRoutes.js';

const app = express();
app.disable('x-powered-by');
app.use(json());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET',
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use("/users", userRoutes)

const PORT = process.env.PORT ?? 3000 //default port 3000
app.listen(PORT, () =>
console.log(`listening port ${PORT}`))