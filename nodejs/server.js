'use strict';

const express = require('express');
const config = require('./config.js');
// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of the todo app!!',
}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);