if(process.env.NODE_ENV !=='production'){
	require('dotenv').config();
}
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', indexRouter);

mongoose.connect(process.env.DATABASE_URL)
.then(console.log('Successfully connected to MongoDB'))
.catch(err=>console.log(err));

app.listen(process.env.PORT || 3000);