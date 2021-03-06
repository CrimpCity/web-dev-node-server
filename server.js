import express from 'express';
import cors from 'cors';
// const express = require('express');
import helloController from "./controllers/hello-controller.js"
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';

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