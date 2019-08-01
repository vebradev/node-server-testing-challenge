const server = require("./server");
const request = require("supertest");

describe("SERVER ENDPOINTS:", () => {
  it("[GET] / - works", () => {
    return request(server)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).toEqual({
          message: "✅"
        });
      });
  });

  it("[GET] /api/users - works", () => {
    return request(server)
      .get("/api/users")
      .expect(200)
      .expect("Content-Type", /json/)
      .then(res => {
        expect(res.body).toBeInstanceOf(Array);
      });
  });
});
