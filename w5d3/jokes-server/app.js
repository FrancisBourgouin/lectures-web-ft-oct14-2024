const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {fetchJokeById, fetchAllJokes, insertJoke} = require("./helpers/joke-helpers")
const {fetchAllAuthors} = require("./helpers/author-helpers.js")
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/jokes", (req,res) => {
  fetchAllJokes()
    .then((jokes) => {
      const templateVars = {jokes}
      return res.render("jokes", templateVars)
    })
    .catch(err => {
      return res.json(err)
    }) 

})

app.get("/jokes/new", (req,res) => {
  fetchAllAuthors()
    .then(authors => {
      const templateVars = {authors}
      res.render("joke-form", templateVars)
    })
    .catch(err => {
      return res.json(err)
    }) 

})

app.post("/jokes", (req, res) => {
  insertJoke(req.body)
    .then(joke => {
      console.log("Inserted joke succesfully")
      return res.redirect(`/jokes/${joke.id}`)
    })
    .catch(err => {
      return res.json(err)
    }) 
})

app.get("/jokes/:joke_id", (req,res) => {
  fetchJokeById(req.params.joke_id)
  .then((joke) => {
    const templateVars = {joke}
    return res.render("joke", templateVars)
  })
  .catch(err => {
    return res.json(err)
  }) 
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
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

module.exports = app;
