import express from 'express';
import getAllActivitiesData from "../controler/AtivityControler.js";

const router = express.Router();

router.get('/', getAllActivitiesData);

export default router;


