import express, { json } from 'express';
import cors from 'cors';
import session from 'express-session'
import registerRoutes from './router/registerRoutes.js'
import loginRoutes from './router/loginRoutes.js';
import userRoutes from './router/userRoutes.js';
import adminRoutes from './router/adminRoutes.js';
import bodyParser from 'body-parser'

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(bodyParser.json());
app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Habilita las cookies y encabezados de autorización
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/users", userRoutes)
app.use("/admins", adminRoutes)

const PORT = process.env.PORT ?? 3000 //default port 3000
app.listen(PORT, () =>
console.log(`listening port ${PORT}`))