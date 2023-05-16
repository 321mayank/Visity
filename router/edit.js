const express = require('express');


const editRouter = express.Router();

const {
 edit
} = require('../controller/edit');



editRouter.put('/:docID/edit',edit,);


module.exports = editRouter;
