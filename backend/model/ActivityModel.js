import connection from "../database/db.js";

// GET
export async function getAllActivities() {
  try {
    const results = await new Promise((resolve, reject) => {
      connection.query('SELECT * FROM activities', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    return results;
  } catch (error) {
    throw error; 
  }
}
