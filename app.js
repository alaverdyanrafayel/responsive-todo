//Import Node Modules
const express         = require('express');     // Web Framework for NodeJS
const app             = express();              // Initiate Express Application
const router          = express.Router();       // Express Router
const mongoose        = require('mongoose');    // ODM for MongoDB
const config          = require('./config/db'); // Mongoose Configurations
const path            = require('path');        // NodeJS Package for File Paths
const api             = require('./routes/api')(router);
const bodyParser      = require('body-parser'); // Parse the Request Body

mongoose.connect(config.uri, function (err) {
    if (err) console.log('Could Not Connect to Database: ', err);
    else console.log('Connected to Database: ' + config.db);
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Provide Static Directory for Frontend
app.use(express.static(__dirname + '/cli/dist'));
app.use(api);

// Connect Server to REACT JS Index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/cli/dist/index.html'));
});

// Start Server: Listen on Port 8000
app.listen(8000, function () {
    console.log('Server is Listening On Port 8000');
});