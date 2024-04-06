const express = require('express');
const  Mongoose = require('mongoose');
const server = express();
const port = 3000;


Mongoose.connect("MONGODB_URI = mongodb+srv://cfuser:1234567890@cluster0.myyxuoc.mongodb.net/?retryWrites=true&w=majority&SkincareStore=Cluster0");