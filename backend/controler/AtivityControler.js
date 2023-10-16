import { getAllActivities } from '../model/ActivityModel.js';

// GET
async function getAllActivitiesData(_req, res) {
  try {
    const activities = await getAllActivities();
    const activitiesWithUuid = activities.map((activity) => ({
      uuid: activity.uuid,
      title: activity.title,
      act_description: activity.act_description,
      price: activity.price,
      stock: activity.stock,
      createdAt: activity.createdAt,
      updatedAt: activity.updatedAt,
    }));
    res.json(activitiesWithUuid);
  } catch (error) {
    console.error('Error to obtain activities:', error);
    res.status(500).json({ error: 'Error to obtain activities' });
  }
}

export default getAllActivitiesData;

