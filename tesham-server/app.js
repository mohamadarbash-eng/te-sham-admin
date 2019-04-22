// Dep
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/course-route');
const courseRoutes = require('./routes/user/user-routes');
const mongoose = require('mongoose');
const path = require('path');

// TODO  -> separate file
mongoose.connect(`mongodb+srv://mohamad:${process.env.MONGO_ATLAS_PW}@cluster0-6cpqt.mongodb.net/tesham-database?retryWrites=true`, { useNewUrlParser: true })
    .then(() => {
        console.log('connected to atlas');
    }).catch((error) => {
    console.log(error)
});

// App
const app = express();
// Middleware

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
/**
 * because I use one server, otherwise delete it
 */
app.use('/', express.static(path.join(__dirname, 'tesham-client')));

app.use(courseRoutes);
app.use(userRoutes);
/**
 * because I use one server, otherwise delete it
 */
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'tesham-client', 'index.html'));
});

module.exports = app;
