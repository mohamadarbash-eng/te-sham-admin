// Dep
const express = require('express');
const bodyParser = require('body-parser');
const courseRouters = require('./routes/course-route');
const mongoose = require('mongoose');
const path = require('path');
// TODO  -> separate file
mongoose.connect('mongodb+srv://mohamad:PO8S3a9aUU41M7Bq@cluster0-6cpqt.mongodb.net/tesham-database?retryWrites=true')
    .then(() => {
        console.log('connected to atlas');
    }).catch((error) => {
    console.log(error)
});

// App
const app = express();
// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    next();
});

app.use(courseRouters);

module.exports = app;
