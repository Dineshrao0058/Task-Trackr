const express = require("express");
const mongoose = require("mongoose");
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
