import request from "supertest";
import { app, server } from "../app.js";
import db from "../database/db.js";
import AdminModel from "../models/adminModel.js";

describe("test CRUD admins", () => {
    describe("GET /admins", () => {
        let response;
        beforeEach(async () => {
            response = await request(app).get("/admins").send();
        });
        test("should return a response with status 200 and type json", async () => {
            expect(response.status).toBe(200);
            expect(response.headers["content-type"]).toContain("json");
        });
        test("should return all admins", async () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    });
    describe("POST /admins", () => {
        const newAdmin = {
            email: "test@gmail.com",
            admin_password: "test",
        };
        const wrongAdmin = {
            wrong_field: "test",
        };
        beforeAll(async () => {
            await AdminModel.destroy({ where: { email: "test@gmail.com" } });
        });
        test("should return a response with status 201 and type json", async () => {
            const response = await request(app).post("/admins").send(newAdmin);
            expect(response.status).toBe(201);
            expect(response.headers["content-type"]).toContain("json");
        });
        test("should return a message product created successfully", async () => {
            const response = await request(app).post("/admins").send(newAdmin);
            expect(response.body.message).toContain(
                "The admin has been created successfully!"
            );
        });
    });
    describe("PATCH /admins", () => {
        let createdAdmin = {};
        beforeAll(async () => {
            await AdminModel.destroy({ where: { email: "test@gmail.com" } });
        });
        beforeEach(async () => {
            try {
                createdAdmin = await AdminModel.findOne({
                    where: {
                        id: "test",
                        email: "test@gmail.com",
                        admin_password: "test",
                    }
                });
            } catch (error) {
                console.error("Error seeking admin:", error);
            }
        });
    
        test("should return a response with status 200 and update successfully", async () => {
            if (!createdAdmin) {
                console.error("Admin not found in database.");
                return;
            }
    
            const updatedData = {
                id: "test",
                email: "updatedtest@gmail.com",
                admin_password: "updated",
            };
    
            const response = await request(app)
                .patch(`/admin/${createdAdmin.id}`)
                .send(updatedData);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Admin updated successfully!");
        });
    });    
    describe("DELETE /admins", () => {
        let deletedAdmin = {};
    
        beforeEach(async () => {
            try {
                deletedAdmin = await AdminModel.findOne({
                    where: {
                        id: "test",
                        email: "test@gmail.com",
                        admin_password: "test",
                    }
                });
            } catch (error) {
                console.error("Error deleting admin:", error);
            }
        });
    
        test("should return a response with status 200 and update successfully", async () => {
            if (!deletedAdmin) {
                console.error("Admin not found in database.");
                return;
            }
    
            const response = await request(app)
                .delete(`/admins/${deletedAdmin.id}`)
                .send(updatedData);
    
            expect(response.status).toBe(200);
            expect(response.body.message).toContain("Admin deleted successfully!");
        });
    });

    afterAll(async() => {
        await AdminModel.destroy({ where: { email: "test@gmail.com" }});
        server.close();
        db.close();
    });
});
