const Quiz = require('../../models/Quiz.js');
const Question = require('../../models/Question.js');
const Category = require('../../models/Category.js');
const User = require('../../models/User.js');

module.exports = {
	Query: {
		getQuiz: async (_, { id }) => {
			const foundQuiz = await Quiz.findById(id)
				.populate('categoryId')
				.populate('questions');
			if (!foundQuiz) throw new Error('Could not find quiz');
			return foundQuiz;
		},
		getQuizzes: async (_, __, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;

			const quizzes = await Quiz.find({
				_id: { $nin: completed },
			})
				.populate('categoryId')
				.populate('questions');
			return quizzes;
		},
		getCategories: async () => {
			const categories = await Category.find();
			return categories;
		},
		getQuizByCategory: async (_, { catId }, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;

			const foundQuizzes = await Quiz.find({
				_id: { $nin: completed },
				categoryId: catId,
			})
				.populate('questions')
				.populate('categoryId');
			return foundQuizzes;
		},
		getQuizzesByInputSearch: async (_, { input }, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;
			const regex = new RegExp(input, 'i');
			const foundQuizzes = await Quiz.find({
				_id: { $nin: completed },
				$or: [{ title: regex }, { description: regex }],
			})
				.populate('questions')
				.populate('categoryId');
			return foundQuizzes;
		},
		getRandomQuiz: async (_, __, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;
			const count = await Quiz.countDocuments();
			let random = Math.abs(
				Math.floor(Math.random() * count - completed.length)
			);
			const quiz = await Quiz.findOne({
				_id: { $nin: completed },
			})
				.populate('categoryId')
				.populate('questions')
				.skip(random);
			return quiz;
		},
		getNQuizzesPerPage: async (_, { pageNumber, nPerPage }, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;
			const quizzes = await Quiz.find({
				_id: { $nin: completed },
			})
				.sort({ _id: 1 })
				.skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
				.limit(nPerPage);
			return quizzes;
		},
		searchByPopularity: async (_, __, { user }) => {
			const completed = (await User.findById(user._id)).completedQuiz;

			const quizzesByPopularity = await Quiz.find(
				{
					_id: { $nin: completed },
				},
				null,
				{
					sort: { likes: -1 },
				}
			)
				.populate('categoryId')
				.populate('questions');
			return quizzesByPopularity;
		},
	},
	Mutation: {
		createQuiz: async (_, { quiz }) => {
			quiz.questions = (await Question.create(quiz.questions)).map(
				(q) => q._id
			);
			const newQuiz = (await Quiz.create(quiz))
				.populate('questions')
				.populate('categoryId')
				.execPopulate();
			return newQuiz;
		},
		updateLike: async (_, { quizId, giveLike }, { user }) => {
			const quizfind = await Quiz.findOneAndUpdate(
				{ _id: quizId },
				{ $inc: { likes: giveLike ? 1 : -1 } },
				{ new: true }
			);
			const userfind = await User.findOneAndUpdate(
				{ _id: user._id },
				{ [giveLike ? '$push' : '$pull']: { LikedQuiz: quizId } }
			);
			return quizfind;
		},
		createCategory: async (_, { category }) => {
			const newCategory = await Category.create(category);
			return newCategory;
		},
		updateHighscore: async (_, { quizId, score }, { user }) => {
			const foundQuiz = await Quiz.findById(quizId);
			let highScores = foundQuiz.highScores || [];
			let newScore = { user: user._id, score };
			highScores.push(newScore);
			highScores = highScores
				.sort((a, b) => (a.score <= b.score ? 1 : -1))
				.splice(0, 3);
			foundQuiz.highScores = highScores;
			await foundQuiz.save();

			return highScores.some(
				(each) =>
					each.score === newScore.score &&
					each.user.toString() === newScore.user
			);
		},
	},
};
