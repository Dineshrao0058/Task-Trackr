const assignmentModel = require("../models/trainerModel");

exports.assignment = async (req, res) => {
  try {
    const task = new assignmentModel(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal Server Error!");
  }
};

exports.viewAssignment = async (req, res) => {
  try {
    const task = await assignmentModel.find();
    res.status(200).json(task);
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal server Error");
  }
};

exports.updateAssignment = async (req, res) => {
    try {
        const task = await assignmentModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json('Unable to update please try again!');
        
    }
};

exports.deleteAssignment = async (req, res) => {
    try {
        const task = await assignmentModel.findByIdAndDelete(req.params.id, req.body);
        res.status(200).json(task);
    } catch (e) {
        console.log(e);
        res.status(500).json('Unable to delete please try again!')
        
    }
};
