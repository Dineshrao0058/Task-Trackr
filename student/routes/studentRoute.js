const express = require("express");
const Routes = express.Router();
const controller = require("../controllers/studentController");
const cors = require("cors");
let corsOptions = {
  origin: ["http://localhost:4000"],
};
Routes.post("/addstudent", cors(corsOptions), controller.addStudent);
Routes.post("/studentlogin", cors(corsOptions), controller.studentLogin);
Routes.get("/getstudents", cors(corsOptions), controller.getStudent);
Routes.put("/updatestudent/:id", cors(corsOptions), controller.updateStudent);
Routes.delete(
  "/deletestudent/:id",
  cors(corsOptions),
  controller.deleteStudent
);

module.exports = Routes;
