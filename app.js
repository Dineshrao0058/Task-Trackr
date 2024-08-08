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



const router = require("./student/routes/studentRoute")
const app = express();
app.use(express.json());
port = 4000;
app.listen(port, () => {
    console.log("port succes", port)
});
const url = "mongodb://localhost:27017/Tracker-Backend";
mongoose.connect(url)
.then(() => console.log("DB is Connected"))
.catch((error)=>{console.log(error)});
app.use("/student",router);
const env = require("dotenv");
const cors = require("cors");
const trainerroutes = require("./trainer/routes/trainerRoute");
const teamleadRoutes = require("./teamlead/routes/projectRoute");

const app = express();
app.use(express.json());
env.config();

app.use(cors());

app.listen(process.env.port, () => {
  console.log("port is connected", process.env.port);
});

mongoose
  .connect(process.env.mongoDbUrl)
  .then(() => {
    console.log("Data-Base is connected");
  })
  .catch((error) => {
    console.log("Unable to connect", error);
  });

app.use("/trainer", trainerroutes);
app.use("/teamlead", teamleadRoutes);
