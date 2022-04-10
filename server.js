import express from 'express';
import cors from 'cors';
// const express = require('express');

// const mongoose = require('mongoose');
import helloController from "./controllers/hello-controller.js"
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';
import mongoose from 'mongoose';

// LOCAL DEVELOPMENT
mongoose.connect('mongodb://localhost:27017/webdev');


const app = express();

app.use(cors());
app.use(express.json());                            // parse JSON from HTTP request body

helloController(app)
userController(app)
tuitsController(app)

// app.get('/hello', (req, res) => { res.send('Hello World!') })
// app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })
// app.listen(4000);
app.listen(process.env.PORT || 4000);