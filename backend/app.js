import express from 'express';
import { json } from 'express';
import cors from 'cors';
import session from 'express-session'
import registerRoutes from './router/registerRoutes.js'
import loginRoutes from './router/loginRoutes.js';
import userRoutes from './router/userRoutes.js';
import adminRoutes from './router/adminRoutes.js';
import activityRoutes from './router/activityRoutes.js';

dotenv.config();

const app = express();
app.disable('x-powered-by');
app.use(json());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET',
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Habilita las cookies y encabezados de autorización
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

app.use("/register", registerRoutes)
app.use("/login", loginRoutes)
app.use("/users", userRoutes)
app.use("/admins", adminRoutes)
app.use("/activities", activityRoutes)


const PORT = process.env.PORT ?? 3000 
app.listen(PORT, () =>
console.log(`listening port ${PORT}`))