const projectModel = require("../models/projectModel");

exports.project = async (req, res) => {
  try {
    const task = new projectModel(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal Server Error!");
  }
};

exports.viewProject = async (req, res) => {
  try {
    const task = await projectModel.find();
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server Error");
  }
};
