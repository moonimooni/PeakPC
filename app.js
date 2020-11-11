const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const { sequelize } = require('./models/database');
sequelize.sync();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/contacts', (req, res, next) => {
  res.render('contacts');
});
app.use('/recipe/add', (req,res,next) => {
  res.render('recipe/recipe_add')
});
app.use('/recipe', (req,res,next) => {
  res.render('recipe/recipe')
});
app.use((req, res, next) => {
  res.render('index');
});

app.listen(8080, () => console.log('8080 on'));