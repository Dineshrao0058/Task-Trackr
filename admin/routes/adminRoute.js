const express = require("express")
const adminController = require("../controllers/adminController")
const teamleadController = require('../controllers/teamleadController')
const trainerController = require('../controllers/trainerController')
const routes = express.Router();
const cors = require("cors")

let corsOptions={
    origin:["http://localhost:4000"]
}

routes.post("/addAdmin",cors(corsOptions), adminController.addAdmin);
routes.post("/adminlogin",cors(corsOptions),adminController.adminlogin);
routes.put("/adminUpdate/:id", cors(corsOptions), adminController.adminUpdate);
routes.post("/addTeamlead",cors(corsOptions),teamleadController.addTeamlead);
routes.put("/updateTeamlead/:id",cors(corsOptions),teamleadController.updateTeamlead);
routes.delete("/deleteTeamlead/:id", cors(corsOptions), teamleadController.deleteTeamlead);
routes.post("/addTrainer",cors(corsOptions),trainerController.addTrainer);
routes.put("/updateTrainer/:id",cors(corsOptions),trainerController.updateTrainer);
routes.delete("/deleteTrainer/:id",cors(corsOptions),trainerController.deleteTrainer);
module.exports=routes;