const passport = require('passport');

//export the function
module.exports = app => {
	// GOOGLE
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', passport.authenticate('google'));

	//FACEBOOK
	app.get(
		'/auth/facebook',
		passport.authenticate('facebook', {
			scope: ['public_profile', 'email']
		})
	);

	app.get('/auth/facebook/callback', passport.authenticate('facebook'));

	//OTHER

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
