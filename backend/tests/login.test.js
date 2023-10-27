import request from "supertest";
import { app, server } from "../app.js";
import db from "../database/db.js";
import UserModel from "../models/userModel.js";

describe("test POST login", () => {
  describe("POST /login", () => {
    const newLogin = {
      email: "login@gmail.com",
      user_password: "login",
    };

    beforeAll(async () => {
      await UserModel.destroy({ where: { email: "login@gmail.com" } });
    });

    test("should return a response with status 200 and type json", async () => {
      const response = await request(app).post("/login").send(newLogin);
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    afterAll(async () => {
      await UserModel.destroy({ where: { email: "login@gmail.com" } });
      server.close();
      db.close();
    });
  });
});
