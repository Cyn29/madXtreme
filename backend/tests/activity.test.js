import request from 'supertest';
import { app, server } from '../app.js';
import ActivityModel from '../models/activityModel.js';
import db from '../database/db.js';

describe('Activities Controller', () => {
    describe('GET /activities', () => {
        it('should get all activities', (done) => {
            request(app)
                .get('/activities')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
        it('should get an activity by ID', (done) => {
            request(app)
                .get('/activities/1')
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
    describe('PATCH /activities', () => {
        let newActivity = null;

        beforeAll(async () => {
            await ActivityModel.destroy({ where: { title: 'Updated Activity test' } });
        });
        beforeEach(async () => {
            try {
                newActivity = await ActivityModel.create({
                    activity_image: 'exampletest.jpg',
                    title: 'Updated Activity test',
                    act_description: 'Updated description test',
                    price: 20,
                    opinion: 'Updated opinion test',
                });
            } catch (error) {
                console.error('Error creating activity:', error);
            }
        });
        afterEach(async () => {
            if (newActivity) {
                await newActivity.destroy();
            }
        });
        it('should return a response with status 200 and update successfully', async () => {
            if (!newActivity) {
                console.error('Activity not found in the database.');
                return;
            }
            const updatedData = {
                activity_image: 'exampletest.jpg',
                title: 'Updated Activity test',
                act_description: 'Updated description test',
                price: 20,
                opinion: 'Updated opinion test',
            };
            const response = await request(app)
                .patch(`/activities/${newActivity.id_activity}`)
                .send(updatedData);
            expect(response.status).toBe(200);
            expect(response.body.message).toContain('Activity updated successfully!');
        });
    });
    describe('DELETE /activities', () => {
        let deletedActivity = null;
        beforeEach(async () => {
            try {
                deletedActivity = await ActivityModel.create({
                    activity_image: 'exampletest.jpg',
                    title: 'Updated Activity test',
                    act_description: 'Updated description test',
                    price: 20,
                    opinion: 'Updated opinion test',
                });
            } catch (error) {
                console.error('Error creating activity:', error);
            }
        });
        afterEach(async () => {
            if (deletedActivity) {
                await deletedActivity.destroy();
            }
        });
        it('should return a response with status 200 and delete successfully', async () => {
            if (!deletedActivity) {
                console.error('Activity not found in the database.');
                return;
            }
            const response = await request(app)
                .delete(`/activities/${deletedActivity.id_activity}`)
                .expect(200);
            expect(response.body.message).toContain('Activity deleted successfully!');
        });
    });
    afterAll(async () => {
        try {
            await ActivityModel.destroy({ where: { title: 'Updated Activity test' } });
        } catch (error) {
            console.error('Error destroying activity:', error);
        }

        try {
            server.close();
        } catch (error) {
            console.error('Error closing server:', error);
        }

        try {
            db.close();
        } catch (error) {
            console.error('Error closing database connection:', error);
        }
    })
});