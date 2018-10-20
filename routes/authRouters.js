const passport = require('passport');

//export the function
module.exports = (app) => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));
};