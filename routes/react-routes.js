// var UserModel = require('../models/index.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');
var User = require('../models/login');
console.log(User);


module.exports = function (app) {


	// //Setting the strategy for Passport
	// passport.use(new LocalStrategy({
	// 		passReqToCallback: true
	// 	},
	// 	function (req, username, password, done) {

	// 		//Searching the ORM for the user in the database
	// 		UserModel.findOne(username, function (err, user) {
	// 			user = user[0];
	// 			if (err) {
	// 				return done(err);
	// 			}
	// 			if (!user) {
	// 				return done(null, false);
	// 			}

	// 			//comparing user passwords - return if not a match
	// 			if (password !== user.password) {
	// 				return done(null, false);
	// 			}

	// 			return done(null, user);
	// 		});
	// 	}
	// ));

	//These two methods are required to keep the user logged in via the session
	// passport.serializeUser(function (user, done) {
	// 	done(null, user);
	// });

	// passport.deserializeUser(function (user, done) {
	// 	done(null, user);
	// });

	//GETs

	app.get('/', function (req, res) {
		res.render('index', {

		});
	});

	app.get('/signin', function (req, res) {
		res.redirect('/')
	});

	app.get('/signup', function (req, res) {
		res.render('index', {

		});
	});

	app.get('/authenticated', function (req, res) {
		if (req.isAuthenticated()) {
			res.render('authenticated', {
				username: req.user.username
			})
		} else {
			res.redirect('/')
		}
	});

	app.get('/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

	//POSTs

	app.post('/signin', passport.authenticate('local', {
		failureRedirect: '/',
		failureFlash: 'Wrong Username or Password'
	}), function (req, res) {
		res.redirect('/authenticated');
	});

	app.post('/signup', function (req, res) {
		// var user = new UserModel(req.body);
		var user = req.body;
		// console.log(UserModel);
		// console.log(User.create);
		User.create(user, function (status) {
			if (!status) {
				res.redirect('/signup')
				return false
			}
			res.redirect('/');
		});
	});

};