const { deleteUser } = require('../services/services'); // Importing the deleteUser function from the '../services/services' module

async function deleteUserById(req, res) {
  const docID = req.params.docID; // Extracting the 'docID' parameter from the request parameters

  try {
    await deleteUser(docID); // Calling the deleteUser function asynchronously with the 'docID'

    res.status(200).json({
      success: true,
      message: `User with Doc ID ${docID} has been deleted successfully`,
    }); // Sending a successful response
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the user',
      error: error.message,
    }); // Sending an error response
  }
}

module.exports = { deleteUserById }; // Exporting the deleteUserById function
