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
		getRandomQuiz: async () => {
			const quizzes = await Quiz.find()
				.populate('categoryId')
				.populate('questions');
			let random = Math.floor(Math.random() * (quizzes.length - 0)) + 0;

			return quizzes[random];
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
		createCategory: async (_, { category }) => {
			const newCategory = await Category.create(category);
			return newCategory;
		},
	},
};
