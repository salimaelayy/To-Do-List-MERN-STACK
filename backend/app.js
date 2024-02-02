//app.js
const express= require("express")
const cookieParser = require('cookie-parser')
const userRouter=require('./Routes/UserRouter')
const router = require('./Routes/TaskRouter'); // Make sure to provide the correct path to your router file
const cors = require("cors")

require('dotenv').config();
require('./connection')
const app=express()
app.use(express.json());
app.use(cors("*"));
app.use(cookieParser())





//json middleware
// app.use(express.json())
app.use('/', router);

app.use('/users', userRouter);

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
     
})
