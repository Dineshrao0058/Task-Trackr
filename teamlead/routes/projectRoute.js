const express = require("express");
const route = express.Router();
const controller = require("../controllers/projectController");
const cors = require("cors");

let corsOption = { origin: ["http://localhost:4000"] };
route.post("/projects", cors(corsOption), controller.project);
route.get("/viewProjects", cors(corsOption), controller.viewProject);
route.put('/updateProject/:id', cors(corsOption), controller.updateProject);
route.delete('/deleteProject/:id', cors(corsOption), controller.deleteProject);

module.exports = route;
