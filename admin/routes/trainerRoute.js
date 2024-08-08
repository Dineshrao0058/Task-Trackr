const express = require("express");
const routes = express.Router();
const trainerController = require("../controllers/trainerController")
const cors = require("cors");
// const { route } = require("./adminRoute");

let corsOptions={
    origin:["http://localhost:4000"]
}

routes.post("/addTrainer",cors(corsOptions),trainerController.addTrainer);
routes.put("/updateTrainer/:id",cors(corsOptions),trainerController.updateTrainer);
routes.delete("/deleteTrainer/:id",cors(corsOptions),trainerController.deleteTrainer);
module.exports=routes;