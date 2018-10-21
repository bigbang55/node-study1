// prod.js - production keys, commit this!!
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	facebookAppID: process.env.FACEBOOK_APP_ID,
	facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
	mongoURI: process.env.MONGO_URI,
	mongoUser: process.env.MONGO_USER,
	mongoPass: process.env.MONGO_PASS,
	cookieKey: process.env.COOKIE_KEY
};
