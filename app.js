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
