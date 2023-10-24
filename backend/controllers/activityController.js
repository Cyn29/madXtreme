import activitiesModel from "../models/activitiesModel.js";
import { validateActivity } from "../validations/activitiesValidations.js";

export const getActivities = async (_req, res) => {
    try {
        const activities = await activitiesModel.findAll();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const getActivityById = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const activity = await activitiesModel.findByPk(id_activity);
        if (!activity) {
            res.status(404).json({ message: "activity not found" });
            return;
        }
        res.status(200).json(activity);
       /* res.json(activityId);*/
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getActivitiesByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const activities = await activitiesModel.findAll({
            where: {
                category_activity: category,
            },
        });

        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: "Error getting activities by category" });
    }
};

export const createActivity = async (req, res) => {
    try {
        const validationResult = validateActivity(req.body);
        if (validationResult.success) {
            const newActivity = await activitiesModel.create(validationResult.data);
            res.status(201).json({  
                message: "Activity created succesfully!",
                id_activity: newActivity.id_activity
            });
        } else {
            res.status(400).json({
                message: "Invalid data in the request body",
                errors: validationResult.error
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

export const updateActivity = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const existingActivity = await activitiesModel.findByPk(id_activity);
        if (!existingActivity) {
            return res.status(404).json({ message: "Activity not found" });
        }
        const updatedActivity = await existingActivity.update(req.body);
        res.status(200).json(updatedActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteActivity = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const deletedRows = await activitiesModel.destroy({
            where: {
                id_activity: id_activity,
            },
        });
        if (deletedRows > 0) {
            res.status(200).json({ message: "Activity deleted successfully" });
        } else {
            res.status(404).json({ message: "Activity not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};