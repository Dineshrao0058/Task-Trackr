const express = require('express')
const trainerProfile = require('../Models/trainerModel');
const assignmentModel = require('../Models/assignmentModel');
const studentsModel = require('../Models/studentModel');
// update profile
exports.updateProfile = async (res, req) => {
    try {
        trainerProfile = await updateProfileModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(trainerProfile);
        if (!trainerProfile) {
            res.status(404).json('Trainer Not Found');
        }
    } catch (e) {
        console.log(e);
        res.status(500).json('Internal Server Error');
    }
}

// assignment

exports.taskAssign = async (req, res) => {
    try {
        const task = new assignmentModel(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json('Failed to Assign Task');
        
    }
}

//view Task

exports.viewTask = async (req, res) => {
    try {
        const task = await assignmentModel.find();
        res.status(200).json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json('Failed to get task details')
        
    }
}

// students list

exports.studentsList = async (res, req) => {
    try {
        const students = await studentsModel.find();
        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status.json('Failed to get students data')
        
    }
}

// create trainer
// const Trainer = require('../models/viewTask');

// // Create a new trainer
// exports.createTrainer = async (req, res) => {
//     try {
//         const trainer = new Trainer(req.body);
//         await trainer.save();
//         res.status(201).json(trainer);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('Failed to create trainer');
//     }
// };
