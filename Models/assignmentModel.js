const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    submissionDate: {
      type: Date,
    },
    studentIds: {
      type: [String],
      require: true,
    },
    status: {
      type: String,
      require: true,
      enum: ["pending", "submitted", "reviewed"],
    },
    feedback: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "tasks",
  }
);

const task = mongoose.model("Tasks", taskSchema);

module.exports = task;
