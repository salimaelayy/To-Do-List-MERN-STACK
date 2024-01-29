require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to the database
mongoose.connect("mongodb://localhost:27017/ToDoListDB")
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Not connected to the database " + err);
  });
  



