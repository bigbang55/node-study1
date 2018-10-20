const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport'); //because its not returning anything

mongoose.connect(
	keys.mongoURI,
	{ user: keys.mongoUser, pass: keys.mongoPass } //used options because pass has special chars
);

const app = express();

require('./routes/authRouters')(app); //no need for const var, imediatelly calls the function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
