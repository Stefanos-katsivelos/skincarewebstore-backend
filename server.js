const express = require('express');
const  Mongoose = require('mongoose');
const server = express();
const port = 3000;
const mongoose = require('mongoose')


mongoose.connect("process.env.MONGODB_URI")
  .then( 
    () => {console.log("Connection to mognoDB established")},
    err => {console.log("Failed to connect to mongoDB", err)}
  );