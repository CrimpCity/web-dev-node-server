import express from 'express';
// const express = require('express');
import helloController from "./controllers/hello-controller.js"

const app = express();

helloController(app)
// app.get('/hello', (req, res) => { res.send('Hello World!') })
// app.get('/', (req, res) => { res.send('Welcome to Full Stack Development!') })
app.listen(4000);