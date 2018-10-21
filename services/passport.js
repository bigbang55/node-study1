const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User'); // one argument loads, two saves

passport.serializeUser((user, done) => {
	done(null, user.id); // user.id is the _id from the mongoDB user record
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	})
});

// googlestrategy has a internal identifier named 'google'
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					// profile id exists
					done(null, existingUser);
				} else {
					// create user on the database
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
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
