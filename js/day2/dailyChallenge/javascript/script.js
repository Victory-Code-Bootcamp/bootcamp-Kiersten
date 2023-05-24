const express = require("express");
const welcomeModule = require("./modulePractice");

const app = express();
const port = 3000;

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the Express app!");
});

router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

router.get("/welcome/:name", (req, res) => {
  const username = req.params.name;
  const welcomeMessage = welcomeModule(username);
  res.send(welcomeMessage);
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
