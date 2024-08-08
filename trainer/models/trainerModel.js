const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    technologies: {
      type: String,
      require: false,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "assignment",
  }
);

module.exports = mongoose.model("assignment", assignmentSchema);
