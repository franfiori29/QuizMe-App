const Quiz = require('../../models/Quiz.js');
const User = require('../../models/User.js');

module.exports = {
	Query: {
		getTotalQuiz: async (_, __, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			const totalQuiz = await Quiz.countDocuments();
			return totalQuiz;
		},
		getNewUsers: async (_, __, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			const today = new Date();
			let sevenDays = new Date();
			sevenDays.setDate(sevenDays.getDate() - 7);
			const usersMonth = await User.find({
				createdAt: { $gte: sevenDays, $lte: today },
			});
			return usersMonth.length;
		},
		getQuizzesByCategories: async (_, __, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			const quizzes = await Quiz.find().populate('categoryId');
			const quizzesbycategory = quizzes.reduce((acc, quiz) => {
				if (!quiz.categoryId) return acc;
				if (!acc[quiz.categoryId._id])
					acc[quiz.categoryId._id] = {
						value: 0,
						description_en: quiz.categoryId.description_en,
						description_es: quiz.categoryId.description_es,
					};
				acc[quiz.categoryId._id].value += 1;
				return acc;
			}, {});
			const result = Object.keys(quizzesbycategory).map((catId) => {
				return {
					id: catId,
					description_en: quizzesbycategory[catId].description_en,
					description_es: quizzesbycategory[catId].description_es,
					value: quizzesbycategory[catId].value,
				};
			});
			return result;
		},
		getUserStats: async (_, __, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			const totalUsers = await User.countDocuments();
			const validatedUsers = await User.countDocuments({
				validated: true,
			});
			return {
				validatedUsers,
				notValidatedUsers: totalUsers - validatedUsers,
			};
		},
	},
};
