var express = require('express');
var dotenv = require('dotenv');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');
const materialRoutes = require('./routes/materials.route')
const mattressRoutes = require('./routes/mattresses.route')
var app = express()

// Middleware

app.use(express.json())
app.use(cors());

// Routes

materialRoutes(app);
mattressRoutes(app);

// Render Engine

app.set('view engine', 'jade');

// catch 404 and forward to error handler

app.use(function(req, res, next) {
  console.log('I am here')
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const port = process.env.PORT;


module.exports = app;




