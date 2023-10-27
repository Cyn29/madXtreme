import request from "supertest";
import { app, server } from "../app.js";
import db from "../database/db.js";
import UserModel from "../models/userModel.js";

describe("test POST register", () => {
  describe("POST /register", () => {
    const newRegister = {
      fullName: "register",
      email: "register@gmail.com",
      user_password: "register",
    };

    beforeAll(async () => {
      await UserModel.destroy({ where: { email: "register@gmail.com" } });
    });

    test("should return a response with status 200 and type json", async () => {
      const response = await request(app).post("/register").send(newRegister);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    test("should return a message 'Thanks for registering'", async () => {
      const response = await request(app).post("/register").send(newRegister);
      expect(response.status).toBe(409);
      expect(response.body.message).toContain(
        "Check that all fields are correct"
      );
    });

    afterAll(async () => {
      await UserModel.destroy({ where: { email: "register@gmail.com" } });
      server.close();
      db.close();
    });
  });
});
