import { Router } from "express";
import {
  getActivities,
  getActivityById,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../controllers/activityController.js";

const ActivityRoutes = Router();

ActivityRoutes.get("/", getActivities);
ActivityRoutes.get("/:id_activity", getActivityById);
ActivityRoutes.post("/", createActivity);
ActivityRoutes.patch("/:id_activity", updateActivity);
ActivityRoutes.delete("/:id_activity", deleteActivity);

ActivityRoutes.get("/image/:id_activity", async (req, res) => {
  try {
    const activity = await getActivityById(req.params.id);
    if (!activity) {
      return res.status(404).json({ error: "Activity not found" });
    }
    const imagePath = activity.image;
    res.sendFile(imagePath);
  } catch (error) {
    res.status(500).json({ error: "Error getting the image" });
  }
});

export default ActivityRoutes;
