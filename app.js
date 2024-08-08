const express = require("express");
const mongoose = require("mongoose");
const adminroutes = require("./admin/routes/adminRoute");
const teamleadroutes = require("./admin/routes/teamleadRoute");
const trainerroutes = require("./admin/routes/trainerRoute");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
port = 4000;
app.listen(port, () => {
    console.log("port is working", port)
});

const dataBaseUrl = "mongodb://localhost:27017/task-tracker";
mongoose.connect(dataBaseUrl).then(() => {
    console.log('database is connected');
}).catch((e) => {

    console.log("connection is lost");
    console.log(e);

})
app.use("/admin", adminroutes);
app.use("/teamlead",teamleadroutes);
app.use("/trainer",trainerroutes);



