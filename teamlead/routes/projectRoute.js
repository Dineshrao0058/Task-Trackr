const express = require("express");
const route = express.Router();
const controller = require("../controllers/projectController");
const cors = require("cors");

let corsOption = { origin: ["http://localhost:4000"] };
route.post("/projects", cors(corsOption), controller.project);
route.get("/viewProjects", cors(corsOption), controller.viewProject);

module.exports = route;
