const mongoose = require("mongoose");
const teamleadSchema = new mongoose.Schema(
  {
    teamLeadId:{
      type:String

    },
    name: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    city: {
      type: String,
    },
    role: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("teamlead", teamleadSchema);
