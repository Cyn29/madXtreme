import request from "supertest";
import { app, server } from "../app.js";
import db from "../database/db.js";
import UserModel from "../models/userModel.js";

describe("test CRUD users", () => {
    describe("GET /users", () => {
        let response;
        beforeEach(async () => {
            response = await request(app).get("/users").send();
        });
        test("should return a response with status 200 and type json", async () => {
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toContain("json");
        });
        test("should return all users", async () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    describe("POST /users", () => {
        const newUser = {
            email: "test@gmail.com",
            user_password: "test",
        };
        const wrongUser = {
            wrong_field: "test",
        };
        test("should return a response with status 201 and type json", async () => {
            const response = await request(app).post("/users").send(newUser);
            expect(response.status).toBe(201);
            expect(response.headers["content-type"]).toContain("json");
        });
        test("should return a message product created successfully", async () => {
            const response = await request(app).post("/users").send(newUser);
            expect(response.body.message).toContain(
                "The user has been created successfully!"
            );
        });
    });
    describe("PATCH /users", () => {
        let createdUser = {};
    
        beforeEach(async () => {
            try {
                createdUser = await UserModel.findOne({
                    where: {
                        id: "test",
                        email: "test@gmail.com",
                        user_password: "test",
                    }
                });
            } catch (error) {
                console.error("Error seeking user:", error);
            }
        });
    
        test("should return a response with status 200 and update successfully", async () => {
            if (!createdUser) {
                console.error("User not found in database.");
                return;
            }
    
            const updatedData = {
                id: "test",
                email: "updatedtest@gmail.com",
                user_password: "updated",
            };
    
            const response = await request(app)
                .patch(`/users/${createdUser.id}`)
                .send(updatedData);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("User updated successfully!");
        });
    });    
    describe("DELETE /users", () => {
        let deletedUser = {};
    
        beforeEach(async () => {
            try {
                deletedUser = await UserModel.findOne({
                    where: {
                        id: "test",
                        email: "test@gmail.com",
                        user_password: "test",
                    }
                });
            } catch (error) {
                console.error("Error deleting user:", error);
            }
        });
    
        test("should return a response with status 200 and update successfully", async () => {
            if (!deletedUser) {
                console.error("User not found in database.");
                return;
            }
    
            const response = await request(app)
                .delete(`/users/${deletedUser.id}`)
                .send(updatedData);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("User deleted successfully!");
        });
    });

    afterAll(() => {
        server.close();
        db.close();
    });
});
