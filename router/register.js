const express = require('express');


const registerRouter = express.Router();

const {
  registerRender,
  register
} = require('../controller/register');



registerRouter.get('/register',registerRender,);
registerRouter.post('/register', register);


module.exports = registerRouter;
