const express = require("express");
const mongoose = require("mongoose");
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