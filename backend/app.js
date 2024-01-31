//app.js
const express= require("express")
const cookieParser = require('cookie-parser')
const userRouter=require('./Routes/UserRouter')
const mongoose = require("mongoose");

require('dotenv').config();
require('./connection')
require('./connection')
const router = require('./Routes/TaskRouter');
// const swaggerDocs =  require('./Docs/Swagger.js'); 

const app=express()
app.use(express.json());
app.use(cookieParser())




//json middleware
app.use(express.json())

app.use('/users', userRouter);
app.use(express.json());
 
// swaggerDocs(app, 3000);
app.use('/', router);



app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
     
})
