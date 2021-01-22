const Quiz = require('../../models/Quiz.js');
const Question = require('../../models/Question.js');

module.exports = {
	Query: {
		getQuiz: async (_, { id }) => {
			const foundQuiz = await Quiz.findById(id)
				.populate('categoryId')
				.populate('questions');
			console.log('foundQuiz :>> ', foundQuiz);
			if (!foundQuiz) throw new Error('Could not find quiz');
			return foundQuiz;
		},
	},
	Mutation: {
		createQuiz: async (_, { quiz }) => {
			quiz.questions = (await Question.create(quiz.questions)).map(
				(q) => q._id,
			);
			const newQuiz = await Quiz.create(quiz);
			return newQuiz;
		},
	},
};
