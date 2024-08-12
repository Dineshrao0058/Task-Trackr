const express = require("express");
const mongoose = require("mongoose");
const app = express();
<<<<<<< HEAD
const dotenv = require("dotenv")
app.use(cors());
app.use(express.json());
dotenv.config();
// port = 4000;
app.listen(process.env.port, () => {
    console.log("port is working", process.env.port)
});

// const dataBaseUrl = "mongodb://localhost:27017/task-tracker";
mongoose.connect(process.env.mongoDbUrl).then(() => {
    console.log('database is connected');
}).catch((e) => {

    console.log("connection is lost");
    console.log(e);

})
app.use("/admin", adminroutes);
app.use("/teamlead",teamleadroutes);
app.use("/trainer",trainerroutes);
=======
const env = require("dotenv");
const cors = require("cors");
const trainerroutes = require("./trainer/routes/trainerRoute");
const teamleadRoutes = require("./teamlead/routes/projectRoute");
const adminRoutes = require("./admin/routes/adminRoute");
const studentRoutes = require("./student/routes/studentRoute");
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

app.use("/admin", adminRoutes);
app.use("/trainer", trainerroutes);
app.use("/teamlead", teamleadRoutes);
app.use("/student", studentRoutes);
>>>>>>> 0cbeda99b4d61c0eba5fa766e2feedd2590270f4
