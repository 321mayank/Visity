const express = require('express');


const dashboardRouter = express.Router();

const {
    handleGetAllUsers
} = require('../controller/dashboard');



dashboardRouter.get('/dashboard', handleGetAllUsers);


module.exports = dashboardRouter;
