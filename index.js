const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); //because its not returning anything
require('./services/passport'); //because its not returning anything

mongoose.connect(
	keys.mongoURI,
	{ user: keys.mongoUser, pass: keys.mongoPass } //used options because pass has special chars
);

const app = express();

// tell passport and express to use cookies
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in miliseconds
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
// finish doing cookie stuff

require('./routes/authRouters')(app); //no need for const var, imediatelly calls the function

const PORT = process.env.PORT || 5000;
app.listen(PORT);
