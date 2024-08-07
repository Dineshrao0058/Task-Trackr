const express = require('express');
const route = express.Router();
const controller = require('../controllers/trainerController');

route.put('/updateTrainerProfile/:id', controller.updateProfile);
route.post('/task', controller.taskAssign);
route.get('/viewTask', controller.viewTask);
route.get('/studntsList', controller.studentsList);
// route.post('/createTrainer', controller.createTrainer);

module.exports = route; 