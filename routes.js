const express = require("express");
const userModel = require("./models");
const Collection_1 = require("./models")
const Collection_2 = require("./models")
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await Collection_2.find({}).populate("userId", null, "collection_1").exec();
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = app;