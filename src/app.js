const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const pingRoute = require('./routes/pingRoute');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv').config();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/ping', pingRoute);
app.use('/user', userRoutes);

module.exports = app;