const { getAllUsers } = require('../services/services'); // Importing the getAllUsers function from the '../services/services' module

async function handleGetAllUsers(req, res) {
  const allUsers = await getAllUsers(); // Asynchronously calling getAllUsers function and storing the result in 'allUsers' variable
  
  res.render('dashboard', { users: allUsers }); // Rendering the 'dashboard' view/template and passing 'allUsers' data to it
}

module.exports = { handleGetAllUsers }; // Exporting the handleGetAllUsers function to make it accessible to other modules
