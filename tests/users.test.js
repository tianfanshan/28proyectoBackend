const request = require("supertest");
const app = require("../main.js");
const { User } = require("../models/index");
const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config.json")["development"];

describe("testing/users", () => {
  afterAll(() => {
    return User.destroy({ where: {}, truncate: true });
  });

  const user = {
    first_name: "Username",
    last_name: "test",
    email: "test@example.com",
    password: "123456",
    role: "user",
    confirmed: false,
  };
 let token;
  test("Create a user", async () => {
    const res = await request(app).post("/users").send(user).expect(201);
    const sendUser = {
      ...user,
      id: res.body.user.id,
      createdAt: res.body.user.createdAt,
      updatedAt: res.body.user.updatedAt,
    };
    console.warn(res.body);
    const newUser = res.body.user;
    expect(newUser).toEqual(sendUser);
  });
  test("Confirm a user", async () => {
    const emailToken = jwt.sign({ email: user.email }, jwt_secret, {
      expiresIn: "48h",
    });
    const res = await request(app)
      .get("/users/confirm/" + emailToken)
      .expect(201);
    expect(res.text).toBe("User confirmed");
  });
  test("Login a user", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({ email: "test@example.com", password: "123456" })
      .expect(200);

    token = res.body.token;
  });
});
