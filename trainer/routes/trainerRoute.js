const express = require("express");
const route = express.Router();
const controller = require("../controllers/trainerController");
const cors = require("cors");

let corsOption = { origin: ["http://localhost:4000"] };

route.post("/assignments", cors(corsOption), controller.assignment);
route.get("/viewAssignments", cors(corsOption), controller.viewAssignment);
route.put("/updateAssignment/:id", cors(corsOption), controller.updateAssignment);
route.delete("/deleteAssignment/:id", cors(corsOption), controller.deleteAssignment);

module.exports = route;
