const shortid = require('shortid');
const { registerData } = require('../validation/validation')
const { requestUserdataByEmail ,createUser } = require('../services/services');

// Function to render registration page
function registerRender(req,res){
  res.render('register')
}

async function register(req, res, next) {
  
  // Validate registration data
  const { error, value } = registerData.body.validate(req.body)
  if (error) {
    const errorMessage = error.details[0].message;
    console.log(errorMessage);
    res.send(errorMessage);
    return;
  } else {
    

    // Extract data from request body
    const { name, number, email } = req.body;

    // Generate user ID
    const docID = shortid.generate();

    // Store user data in info object
    const info = {
      docID,
      name,
      number,
      email
    };

    // Check if email already exists in database
    const checkResult = await requestUserdataByEmail(email)
    if (checkResult) {
      res.send('email allready exist');
    } else {
      // Create user in database and redirect to email verification page
      await createUser(info)
      res.send("data uploded")
    }
  }
}


module.exports = {
  registerRender,
  register,
};