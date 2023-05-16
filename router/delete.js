const express = require('express');

const deleteRouter = express.Router();

const { deleteUserById } = require('../controller/delete');


deleteRouter.delete('/:docID/delete', deleteUserById);

module.exports = deleteRouter