const server = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { SECRET, FRONT } = process.env;

server.get('/me', async (req, res, next) => {
	try {
		const { _id } = req.user;
		const result = await User.findById(
			_id,
			'_id firstName lastName email countryCode roleId updatedAt'
		);
		if (req.user.updatedAt === result.updatedAt.toISOString()) {
			return res.json(result);
		} else {
			const {
				_id,
				firstName,
				lastName,
				email: userEmail,
				profile_pic,
				countryCode,
				roleId,
				updatedAt,
			} = result;
			result.jwt = jwt.sign(
				{
					_id,
					firstName,
					lastName,
					profile_pic,
					email: userEmail,
					countryCode,
					roleId,
					updatedAt,
				},
				SECRET
			);
			return res.json(result);
		}
	} catch (error) {
		next(error);
	}
});

server.post('/register', async function (req, res, next) {
	try {
		const user = await User.create(req.body);
		const {
			_id,
			firstName,
			lastName,
			profile_pic,
			email,
			countryCode,
			roleId,
			updatedAt,
		} = user;
		return res.send(
			jwt.sign(
				{
					_id,
					firstName,
					lastName,
					profile_pic,
					email,
					countryCode,
					roleId,
					updatedAt,
				},
				SECRET
			)
		);
	} catch (error) {
		if (error.message === 'Input valid password' )
			return res.status(400).json({ message: 'Invalid password' +error });
		if (error.message.includes('unique'))
			return res.status(400).json({ message: 'email must be unique' +error });
		return res.status(500).json({ message: 'Internal Server Error' +error });
	}
});

server.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, user) {
		if (err) return next(err);
		else if (!user) return res.sendStatus(401);
		else return res.send(jwt.sign(user, SECRET));
	})(req, res, next);
});

server.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

server.get(
	'/googleCallback',
	passport.authenticate('google'),
	function (req, res) {
		const {
			id,
			first_name,
			last_name,
			profile_pic,
			email,
			is_admin,
			updatedAt,
		} = req.user.dataValues;
		const token = jwt.sign(
			{
				id,
				first_name,
				last_name,
				profile_pic,
				email,
				is_admin,
				updatedAt,
			},
			SECRET
		);
		res.redirect(`${FRONT}/?jwt=${token}`);
	}
);

server.get(
	'/facebook',
	passport.authenticate('facebook', {
		scope: ['email', 'user_photos'],
	})
);

server.get(
	'/facebookCallback',
	passport.authenticate('facebook'),
	function (req, res) {
		const {
			id,
			first_name,
			last_name,
			profile_pic,
			email,
			is_admin,
			updatedAt,
		} = req.user.dataValues;
		const token = jwt.sign(
			{
				id,
				first_name,
				last_name,
				profile_pic,
				email,
				is_admin,
				updatedAt,
			},
			SECRET
		);
		res.redirect(`${FRONT}/?jwt=${token}`);
	}
);

module.exports = server;
