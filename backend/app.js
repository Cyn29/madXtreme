import express from 'express';
import { json } from 'express';
import cors from 'cors';
import session from 'express-session';
import Activity from './activityModel.js';

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
}));

// Configura la ruta para las actividades usando Sequelize
app.get('/activities', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
