const express = require('express');
const controller = require('../controllers/controller.js');
const rout = express.Router();

rout.get('/user', controller.getAll);

module.exports = app;
