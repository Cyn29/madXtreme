import activitiesModel from "../models/activitiesModel.js";
import { Sequelize } from "sequelize";

export const getActivities = async (req, res) => {
    try {
        const activities = await activitiesModel.findAll();
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getActivityById = async (req, res) => {
    try {
        const activityId = req.params.id;
        const activity = await activitiesModel.findByPk(activityId);
        if (activity) {
            res.json(activity);
        } else {
            res.status(404).json({ message: 'Activity not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createActivity = async (req, res) => {
    const result = (req.body);
    if (result.success) {
        const activityData = result.data; 
        const uuid = Sequelize.fn("uuid");
        const binaryUuid = Sequelize.fn("UUID_TO_BIN", uuid);
        try {
            const newactivity = await activitiesModel.create({
                id: binaryUuid,
                email: activityData.email,
                activity_password: activityData.activity_password,
            });
            res.status(201).json({
                message: "The activity has been created successfully!",
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(400).json({
            message: "Invalid data in the request body",
            errors: result.error,
        });
    }
};

export const updateActivity = async (req, res) => {
    try {
        const bufferedId = Buffer.from(req.params.id, "hex");
        const existingactivity = await activitiesModel.findOne({
            where: { id: bufferedId },
        })
        if(!existingactivity) {
            return res.status(400).json({message: "activity not found"});
        }
        const updatedactivity = await activitiesModel.update(req.body, {
            where: { id: req.params.id },
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
        const bufferedId = Buffer.from(req.params.id, "hex");
        const deletedactivity = await activitiesModel.destroy({
            where: { id: bufferedId },
        });
        if (deletedactivity) {
            return res.status(200).json({ message: "activity deleted successfully!" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

