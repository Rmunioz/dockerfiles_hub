'use strict';

const express = require('express');
const config = require('./config.js');
// Constants
const PORT = config.PORT;
const HOST = config.HOST;

// App
const app = express();
app.get('/', (req, res)=> {
  res.send ('Welcome to the beginning of the todo app *! ');
});

if (app.settings.env === "production") {
  db.sequelize.sync().then(() => {
      app.listen(PORT, () => {
          console.log("App listening on PORT " + PORT);
      });
  });
} else {
  db.sequelize.sync({
      force: true
  }).then(() => {
      app.listen(PORT, () => {
          console.log("App listening on PORT " + PORT);
      });
  });
}

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);