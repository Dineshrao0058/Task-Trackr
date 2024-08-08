const express = require("express")
const adminController = require("../controllers/adminController")
const routes = express.Router();
const cors = require("cors")

let corsOptions={
    origin:["http://localhost:4000"]
}

routes.post("/addAdmin",cors(corsOptions), adminController.addAdmin);
routes.post("/adminlogin",cors(corsOptions),adminController.adminlogin);
routes.put("/adminUpdate/:id",cors(corsOptions),adminController.adminUpdate);
module.exports=routes;