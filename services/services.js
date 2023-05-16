// Importing the 'user' model from the '../models' module
const db = require('../models');
const user = db.user;

// Function to request user data by email
async function requestUserdataByEmail(email) {
const foundUser = await user.findOne({ where: { email } });
return foundUser;
}

// Function to create a new user
async function createUser(info) {
await user.create(info);
}

// Function to get all users
async function getAllUsers() {
const allUsers = await user.findAll();
return allUsers;
}

// Function to update a user by document ID
async function updateUser(docID, info) {
const foundUser = await user.findOne({ where: { docID: docID } });
if (!foundUser) {
throw new Error(`User with docID ${docID} not found`);
}

await foundUser.update(info);
}

// Function to delete a user by document ID
async function deleteUser(docID) {
const foundUser = await user.findOne({ where: { docID: docID } });
if (!foundUser) {
throw new Error(`User with ID ${docID} not found`);
}

await foundUser.destroy();
}

// Exporting the functions for use in other modules
module.exports = {
requestUserdataByEmail,
createUser,
getAllUsers,
updateUser,
deleteUser
};