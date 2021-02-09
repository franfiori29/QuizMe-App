const server = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { SECRET, FRONT } = process.env;
var nodemailer = require('nodemailer');
const pug = require('pug');
const { MAIL, MAILPASS } = process.env;
const { generateCode } = require('../utils/utils');

server.get('/me', async (req, res, next) => {
	try {
		const { _id } = req.user;
		const result = await User.findById(
			_id,
			'_id firstName lastName email countryCode profilePic role updatedAt'
		);
		if (req.user.updatedAt === result.updatedAt.toISOString()) {
			return res.json(result);
		} else {
			const {
				_id,
				firstName,
				lastName,
				email: userEmail,
				profilePic,
				countryCode,
				role,
				updatedAt,
				premium,
			} = result;
			result.jwt = jwt.sign(
				{
					_id,
					firstName,
					lastName,
					email: userEmail,
					profilePic,
					countryCode,
					role,
					updatedAt,
					premium,
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
		await User.findOrCreate(
			{
				$or: [
					{ accountId: req.body.accountId || 'false' },
					{ email: req.body.email },
				],
			},
			req.body,
			(err, user, created) => {
				if (err) throw new Error(err);
				if (!req.body.accountId && !created)
					return res
						.status(400)
						.json({ message: 'Username already exist' });

				const newUser = {
					_id: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					profilePic: user.profilePic,
					countryCode: user.countryCode,
					role: user.role,
					updatedAt: user.updatedAt,
					premium: user.premium,
				};
				newUser.jwt = jwt.sign({ ...newUser }, SECRET);
				return res.json(newUser);
			}
		);
	} catch (error) {
		if (error.message === 'Input valid password')
			return res
				.status(400)
				.json({ message: 'Invalid password' + error });
		if (error.message.includes('unique'))
			return res
				.status(400)
				.json({ message: 'email must be unique' + error });
		return res
			.status(500)
			.json({ message: 'Internal Server Error' + error });
	}
});

server.post('/login', function (req, res, next) {
	passport.authenticate('local', function (err, user) {
		if (err) return next(err);
		else if (!user) return res.sendStatus(401);
		else {
			let loginUser = { ...user };
			loginUser.jwt = jwt.sign(user, SECRET);
			return res.json(loginUser);
		}
	})(req, res, next);
});

// Ruta para enviar notificacion por mail
server.post('/email', (req, res) => {
	//const { name, email, template, subject } = req.body;
	const params = req.body;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: MAIL,
			pass: MAILPASS,
		},
	});

	transporter
		.sendMail({
			from: '"QuizMeApp" <soyquizme@gmail.com>',
			to: params.email,
			subject: params.subject,

			html: pug.renderFile(
				__dirname + '/templates/' + params.template,
				params
			),
		})
		.then((mail) => {
			res.status(200).json({
				message: 'Mail enviado correctamente',
				info: mail,
			});
		})
		.catch((error) => {
			res.status(404).json({
				message: 'Mail no enviado ' + error,
			});
		});
});

//
server.put('/forgot', async (req, res) => {
	try {
		const { userEmail } = req.body;

		const userfind = await User.findOneAndUpdate(
			{ email: userEmail },
			{ resetCode: generateCode(6) },
			{ new: true }
		);
		if (userfind) {
			res.status(200).json({
				message: 'Code generated correctly',
				user: userfind,
			});
		} else {
			res.status(400).json({
				message: 'User not found',
			});
		}
	} catch (error) {
		res.status(400).json({
			message: 'Error: ' + error,
		});
	}
});

//
server.put('/resetPass', async (req, res) => {
	try {
		const { resetCode, userEmail, newPass } = req.body;

		const user = await User.findOne({ email: userEmail });
		if (user && user.resetCode === resetCode) {
			user.password = newPass;
			await user.save();
			res.status(200).json({
				message: 'Password Update correctly',
				user: user,
			});
		} else {
			res.status(400).json({
				message: 'User not found or reset code do not match',
			});
		}
	} catch (error) {
		res.status(400).json({
			message: 'Error: ' + error,
		});
	}
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
			_id,
			firstName,
			lastName,
			email: userEmail,
			profilePic,
			countryCode,
			role,
			updatedAt,
			premium,
		} = req.user;
		const token = jwt.sign(
			{
				_id,
				firstName,
				lastName,
				email: userEmail,
				profilePic,
				countryCode,
				role,
				updatedAt,
				premium,
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
			_id,
			firstName,
			lastName,
			email: userEmail,
			profilePic,
			countryCode,
			role,
			updatedAt,
			premium,
		} = req.user.dataValues;
		const token = jwt.sign(
			{
				_id,
				firstName,
				lastName,
				email: userEmail,
				profilePic,
				countryCode,
				role,
				updatedAt,
				premium,
			},
			SECRET
		);
		res.redirect(`${FRONT}/?jwt=${token}`);
	}
);

module.exports = server;
