const { Schema } = require('mongoose');
const User = require('./../../models/User.js');

module.exports = {
	Query: {
		getUsers: async () => {
			const users = await User.find();
			return users;
		},
		getCompletedQuizzes: async (__, _, { user }) => {
			const userfind = await User.findById(user._id);
			return userfind.completedQuiz;
		},
	},
	Mutation: {
		completeQuiz: async (_, { quizId }, { user }) => {
			const userfind = await User.findOneAndUpdate(
				{ _id: user._id },
				{ $push: { completedQuiz: quizId } },
				{ new: true }
			);
			return userfind;
		},
	},
};
