import express from 'express';
import cors from 'cors';
// const express = require('express');

// const mongoose = require('mongoose');
import helloController from "./controllers/hello-controller.js"
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';
import mongoose from 'mongoose';


// SET UP DATABASE CONNECTION
// LOCAL DEVELOPMENT
// mongoose.connect('mongodb://localhost:27017/webdev');

// Mongo Cloud Deployment
const PROTOCOL = "mongodb+srv";
const DB_USERNAME = "Georgian"
const DB_PASSWORD = "987654321"
const HOST = "cluster0.itxlc.mongodb.net";
const DB_NAME = "myFirstDatabase";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
mongoose.connect(connectionString);



// SET UP APP
const app = express();

app.use(cors());
app.use(express.json());                            // parse JSON from HTTP request body

helloController(app)
userController(app)
tuitsController(app)

app.listen(process.env.PORT || 4000);