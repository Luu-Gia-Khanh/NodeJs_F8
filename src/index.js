const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// http logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

//set Static folder
app.use(express.static(path.join(__dirname, 'public')));

// set view
app.set('views', path.join(__dirname, 'resources/views'));

// ROUTE
app.get('/trang-chu', (req, res) => {
  res.render('home');
});
app.get('/tin-tuc', (req, res) => {
  res.render('news');
});

// port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})