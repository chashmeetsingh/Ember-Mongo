//app.js

const express = require('express');
const bodyParser = require('body-parser');

const post = require('./routes/post.route');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://test:test123@ds147125.mlab.com:47125/ember-mongo';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/posts', post);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

