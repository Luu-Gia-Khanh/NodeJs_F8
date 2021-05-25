const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const { urlencoded } = require('express');
const route = require('./routes');
const db = require('./config/db');

const app= express();
const port = 3000;

// Connect DB
db.connect();

// get Value Method [POST]
app.use(express.urlencoded({
  extended:true,
}));
app.use(express.json());

// http logger
//app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// set view
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

// port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});