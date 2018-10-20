const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User'); // one argument loads, two saves

// googlestrategy has a internal identifier named 'google'
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			new User({ googleId: profile.id }).save(); // create user on the database
		}
	)
);

passport.use(
	new FacebookStrategy(
		{
			clientID: keys.facebookAppID,
			clientSecret: keys.facebookAppSecret,
			callbackURL: '/auth/facebook/callback'
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log('access token', accessToken);
			console.log('refresh token', refreshToken);
			console.log('profile', profile);
		}
	)
);
