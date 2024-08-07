const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      require: true,
    },
    projectTitle: {
      type: String,
      require: true,
    },
    projectDescription: {
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
    collection: "project",
  }
);

module.exports = mongoose.model("Project", projectSchema);
