const { updateUser } = require('../services/services');

async function edit(req, res, next) {
  const docID = req.params.docID; // Extracting 'docID' parameter from request parameters
  const { name, number, email } = req.body; // Extracting 'name', 'number', and 'email' properties from request body
  const info = { name, number, email }; // Creating 'info' object with extracted properties

  try {
    await updateUser(docID, info); // Updating user asynchronously with 'docID' and 'info'

    res.status(200).json({
      success: true,
      message: `User with Doc ID ${docID} has been updated successfully`,
    }); // Sending successful response
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while updating the user data',
      error: error.message,
    }); // Sending error response
  }

  next(); // Proceeding to next middleware or route handler
}

module.exports = { edit }; // Exporting the 'edit' function
