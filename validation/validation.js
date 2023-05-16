// Importing the Joi library for data validation
const joi = require('joi');

// Defining the validation schema for the register data
const registerData = {
body: joi.object().keys({
name: joi.string().required(),
number: joi.string().required().min(10).max(10),
email: joi.string().required().email(),
}),
};

// Exporting the registerData object for use in other modules
module.exports = {
registerData,
};