const express = require("express");
const adminController = require("../controllers/adminController")
const teamleadController = require('../controllers/teamleadController')
const trainerController = require('../controllers/trainerController')
const routes = express.Router();
const cors = require("cors")

let corsOptions = {
    origin: ["http://localhost:4000"]
}

routes.post("/addAdmin", cors(corsOptions), adminController.addAdmin);
routes.get("/getAdmin", cors(corsOptions), adminController.getAdmin);
routes.post("/adminlogin", cors(corsOptions), adminController.adminlogin);
routes.put("/adminUpdate/:id", cors(corsOptions), adminController.adminUpdate);
routes.post("/addTeamlead", cors(corsOptions), teamleadController.addTeamlead);
routes.get("/getTeamlead", cors(corsOptions), teamleadController.getTeamlead);
routes.post("/teamleadlogin", cors(corsOptions), teamleadController.teamleadlogin);
routes.put("/updateTeamlead/:id", cors(corsOptions), teamleadController.updateTeamlead);
routes.delete("/deleteTeamlead/:id", cors(corsOptions), teamleadController.deleteTeamlead);
routes.post("/addTrainer", cors(corsOptions), trainerController.addTrainer);
routes.get("/getTrainer",cors(corsOptions),trainerController.viewTrainer);
routes.post("/trainerlogin", cors(corsOptions), trainerController.trainerlogin);
routes.put("/updateTrainer/:id", cors(corsOptions), trainerController.updateTrainer);
routes.delete("/deleteTrainer/:id", cors(corsOptions), trainerController.deleteTrainer);
module.exports = routes;