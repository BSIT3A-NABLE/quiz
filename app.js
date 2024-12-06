require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

const mongoString = process.env.MONGODB_URL

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Import routes
var indexRouter = require('./routes/index');
var fetchQuestionsRouter = require('./routes/fetch_questions');
var HomeRouter = require('./routes/Home');
var galleryRouter = require('./routes/gallery');
var quizRouter = require('./routes/quiz'); // New route for quiz
var historyRouter = require('./routes/history'); // New route for history
var aboutusRouter = require('./routes/aboutus'); // New route for About Us
var ResultRouter = require('./routes/Result');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes
app.use('/', indexRouter);
app.use('/fetch_questions', fetchQuestionsRouter);
app.use('/Home', HomeRouter);
app.use('/gallery', galleryRouter);
app.use('/quiz', quizRouter);  // This is your new route for the quiz
app.use('/history', historyRouter);  // New route for the history page
app.use('/aboutus', aboutusRouter);  // New route for About Us page
app.use('/Result', ResultRouter);  

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));

});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err.stack);  // Log the stack for debugging

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
