const express = require('express');
const route = require('./routes');
const path = require('path');
const cors = require('cors');
const { handle404Error, handleDevErrors, handleClientErrors, logErrors } = require('./middlewares/error-handlers');
const { LogTheTransaction } = require('./config/logger');
const app = express();

app.disable('x-powered-by');
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
}

// log everything that pass to the router
app.use((req, res, next) => {
  LogTheTransaction(`${req.originalUrl} - ${req.method} - ${req.ip}`, 'info');
  next();
});


// add all the routes
app.use('/', route.main);
// preferences routes
app.use('/preferences', route.preferences);
// events routes
app.use('/events', route.events);
// itinerary
app.use('/itinerary', route.itinerary);
// restaurant
app.use('/restaurant', route.restaurant);
// restaurant
app.use('/touristicsites', route.touristicSites);
// editor
app.use('/editor', route.editor);

// catch 404 and forward to error handler
// triggered when a non-existent route attempts to be accessed
app.use(handle404Error);

// log the errors
app.use(logErrors);

// client error handler
app.use(handleClientErrors);

// dev error handler
app.use(handleDevErrors);

module.exports = app;
