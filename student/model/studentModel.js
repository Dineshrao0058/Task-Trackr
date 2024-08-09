const mongoose = require("mongoose");
const studentDetail = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("student", studentDetail);
