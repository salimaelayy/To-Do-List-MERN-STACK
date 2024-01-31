//app.js
const express= require("express")
const mongoose = require("mongoose");

require('dotenv').config();
require('./connection')
const router = require('./Routes/TaskRouter');
// const swaggerDocs =  require('./Docs/Swagger.js'); 

const app=express()
app.use(express.json());
 
// swaggerDocs(app, 3000);
app.use('/', router);



app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
     
})
