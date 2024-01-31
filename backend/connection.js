<<<<<<< HEAD
require('dotenv').config();
const mongoose = require('mongoose');
=======
//connection.js

require('dotenv').config();
const mongoose = require('mongoose'); 
>>>>>>> cca716ebb48a7131cb6102a666c92857ab6cd542

// Connect to the database
mongoose.connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Not connected to the database " + err);
  });

<<<<<<< HEAD

=======
>>>>>>> cca716ebb48a7131cb6102a666c92857ab6cd542
