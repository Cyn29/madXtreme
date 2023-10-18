import activitiesModel from "../models/activitiesModel.js";
import { Sequelize } from "sequelize";
import { validateActivity } from "../validations/activitiesValidations.js";

export const getActivities = async (_req, res) => {
    try {
        const activities = await activitiesModel.findAll();
        const activitiesWithUUID = activities.map((Activity) => {
            return {
                id_activity: Activity.id_activity,
                activity_image: Activity.activity_image,
                title: Activity.title,
                act_description: Activity.act_description,
                price: Activity.price,
                opinion: Activity.opinion,
            };
        });
        res.json(activitiesWithUUID);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getActivityById = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const Activity = await activitiesModel.findByPk(id_activity);
        if (!Activity) {
            res.status(404).json({ message: "Activity not found" });
            return;
        }
        const ActivityId = {
            id_activity: Activity.id_activity,
            activity_image: Activity.activity_image,
            title: Activity.title,
            act_description: Activity.act_description,
            price: Activity.price,
            opinion: Activity.opinion, 
        };

        res.json(ActivityId);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
        const existingactivity = await activitiesModel.findOne({
            where: { id_activity: id_activity },
        })
        if(!existingactivity) {
            return res.status(400).json({message: "activity not found"});
        }
        const updatedactivity = await activitiesModel.update(req.body, {
            where: { id_activity: req.params.id_activity },
        });
        if (updatedactivity) {
            return res.status(200).json({ message: "activity updated successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteActivity = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const deletedactivity = await activitiesModel.destroy({
            where: { id_activity: id_activity },
        });
        if (deletedactivity) {
            return res.status(200).json({ message: "activity deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

