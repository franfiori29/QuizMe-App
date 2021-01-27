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
		getQuizzes: async () => {
			const quizzes = await Quiz.find()
				.populate('categoryId')
				.populate('questions');
			return quizzes;
		},
		getCategories: async () => {
			const categories = await Category.find();
			return categories;
		},
		getQuizByCategory: async (_, { catId }) => {
			const foundQuizzes = await Quiz.find({
				categoryId: catId,
			})
				.populate('questions')
				.populate('categoryId');
			return foundQuizzes;
		},
		getQuizzesByInputSearch: async (_, { input }) => {
			const regex = new RegExp(input, 'i');
			const foundQuizzes = await Quiz.find({
				$or: [{ title: regex }, { description: regex }],
			})
				.populate('questions')
				.populate('categoryId');
			return foundQuizzes;
		},
		getRandomQuiz: async () => {
			const count = await Quiz.countDocuments();
			var random = Math.floor(Math.random() * count);
			const quiz = await Quiz.findOne()
				.populate('categoryId')
				.populate('questions')
				.skip(random);
			return quiz;
		},
		getNQuizzesPerPage: async (_, { pageNumber, nPerPage }) => {
			const quizzes = await Quiz.find()
				.sort({ _id: 1 })
				.skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0)
				.limit(nPerPage);
			return quizzes;
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
