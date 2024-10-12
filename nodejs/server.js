'use strict';

const express = require('express');
const config = require('./config.js');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./ORM/models');

// App
const app = express();

const port = process.env.PORT || 8000;
const HOST = config.HOST;

//Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Require routes into app
//require('./routes')(app);

app.get('/', (req, res)=> {
  res.send ('Welcome to the beginning of the todo app *! ');
});

if (app.settings.env === "production") {
  db.sequelize.sync().then(() => {
      app.listen(port, () => {
          console.log("App listening on PORT " + port);
      });
  }).catch(err => {
    console.log(err);
  });
  
} else {
  db.sequelize.sync({
      force: true
  }).then(() => {
      console.log("hola")
      app.listen(port, () => {
        console.log("App listening on PORT " + port);
      })
  }).catch(err => {
    console.log(err);
  });
}