import activitiesModel from "../models/activitiesModel.js";
import { validateActivity } from "../validations/activitiesValidations.js";

export const getActivities = async (_req, res) => {
    try {
        const activities = await activitiesModel.findAll();
        const activitiesWithId = activities.map(activityToResponse);
        res.json(activitiesWithId);
    } catch (error) {
        handleServerError(res, error);
    }
};

export const getActivityById = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const Activity = await activitiesModel.findByPk(id_activity);
        if (!Activity) {
            return handleNotFound(res, "Activity not found");
        }
        const ActivityId = activityToResponse(Activity);
        res.json(ActivityId);
    } catch (error) {
        handleServerError(res, error);
    }
};

export const createActivity = async (req, res) => {
    try {
        const validationResult = validateActivity(req.body);
        if (validationResult.success) {
            const newActivity = await activitiesModel.create(validationResult.data);
            res.status(201).json({
                message: "Activity created successfully!",
                id_activity: newActivity.id_activity
            });
        } else {
            handleBadRequest(res, "Invalid data in the request body", validationResult.error);
        }
    } catch (error) {
        handleServerError(res, error);
    }
};

export const updateActivity = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const existingactivity = await activitiesModel.findOne({
            where: { id_activity: id_activity },
        });
        if (!existingactivity) {
            return handleBadRequest(res, "Activity not found");
        }
        const updatedactivity = await activitiesModel.update(req.body, {
            where: { id_activity: req.params.id_activity },
        });
        if (updatedactivity) {
            res.status(200).json({ message: "Activity updated successfully!" });
        }
    } catch (error) {
        handleServerError(res, error);
    }
};

export const deleteActivity = async (req, res) => {
    try {
        const { id_activity } = req.params;
        const deletedactivity = await activitiesModel.destroy({
            where: { id_activity: id_activity },
        });
        if (deletedactivity) {
            res.status(200).json({ message: "Activity deleted successfully!" });
        }
    } catch (error) {
        handleServerError(res, error);
    }
};

function activityToResponse(Activity) {
    return {
        id_activity: Activity.id_activity,
        activity_image: Activity.activity_image,
        title: Activity.title,
        act_description: Activity.act_description,
        price: Activity.price,
        opinion: Activity.opinion,
    };
}

function handleNotFound(res, message) {
    res.status(404).json({ message });
}

function handleBadRequest(res, message, errors) {
    res.status(400).json({ message, errors });
}

function handleServerError(res, error) {
    res.status(500).json({ message: error.message });
}
