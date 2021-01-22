const { Schema } = require('mongoose');
const User = require('./../../models/User.js');

module.exports = {
	Query: {
		getUsers: async () => {
			const users = await User.find();
			return users;
		},
		getCompleteQuiz: async (__, _, { user }) => {
			const userfind = await User.findById(user._id);
			return userfind.correctQuiz;
		},
	},
	Mutation: {},
};
