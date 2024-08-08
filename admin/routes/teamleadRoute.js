const express = require("express");
const routes = express.Router();
const cors = require("cors");
const teamleadController = require("../controllers/teamleadController");
let corsOptions={
    origin:["http://localhost:4000"]
}

routes.post("/addTeamlead",cors(corsOptions),teamleadController.addTeamlead);
routes.put("/updateTeamlead/:id",cors(corsOptions),teamleadController.updateTeamlead);
routes.delete("/deleteTeamlead/:id",cors(corsOptions),teamleadController.deleteTeamlead);
module.exports=routes;