const server = require('express').Router();
const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { SECRET, FRONT } = process.env;

server.get('/me', async (req, res, next) => {
	try {
		const { _id } = req.user;
		const result = await User.findById(id);
		if (req.user.updatedAt === result.updatedAt.toISOString()) {
			return res.json(result);
		} else {
			const {
				_id,
				firstName,
				lastName,
				email: userEmail,
				countryCode,
				roleId,
				updatedAt,
			} = result;
			result.jwt = jwt.sign(
				{
					_id,
					firstName,
					lastName,
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

module.exports = server;
