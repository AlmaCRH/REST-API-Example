const { checkConnection, syncModels } = require("./db/db.js");
const User = require("./api/models/user.model.js");

const express = require("express");
const morgan = require("morgan");
const port = 3000;

async function checkAndSync() {
  await checkConnection();
  await syncModels();
}

async function initializeAndListen() {
  const app = express()
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes/index.js"))
    .listen(port, () => {
      console.log(`> Listening on port: ${port}`);
    });
}

async function startAPI() {
  await checkAndSync();
  initializeAndListen();
}

startAPI();
