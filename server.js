// Importing required modules
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Importing additional routers
const bodyParser = require('body-parser');
const registerRouter = require('./router/register');
const dashboardRouter = require('./router/dashboard')
const editRouter = require('./router/edit')
const deleteRouter = require('./router/delete')

// Setting the view engine to EJS
app.set('view engine', 'ejs');

// Parsing request bodies using middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling the root route and rendering the 'index' view
app.get('/', (req, res) => {
res.render('index');
})

// Mounting routers on specified paths
app.use('/', registerRouter);
app.use('/', dashboardRouter);
app.use('/', editRouter);
app.use('/',deleteRouter);

// Handling undefined routes with a 404 status code
app.all('*', (req,res)=>{
res.sendStatus(404)
})

// Starting the server and listening on port 3000
const server = app.listen(3000, () => {
console.log('Server listening on port 3000');
});


// Assigning the server instance to the app object
app.server = server;