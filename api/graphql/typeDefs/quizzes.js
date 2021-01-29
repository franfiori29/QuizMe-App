const { gql } = require('apollo-server');

module.exports = gql`
	type Quiz {
		_id: ID!
		title: String!
		description: String!
		image: String!
		likes: Int!
		categoryId: Category!
		questions: [Question!]!
		time: Int!
		creatorId: ID!
	}

	type Question {
		_id: ID!
		title: String!
		options: [Option!]!
		image: String
		score: Int!
	}

	type Option {
		title: String!
		result: Boolean!
	}

	type Category {
		_id: ID!
		description_en: String
		description_es: String
	}

	input InputCategory {
		description_en: String!
		description_es: String!
	}

	input InputOption {
		title: String!
		result: Boolean!
	}

	input InputQuestion {
		title: String!
		options: [InputOption!]!
		image: String
		score: Int!
	}

	input QuizInput {
		title: String!
		description: String!
		image: String!
		likes: Int
		time: Int
		categoryId: String!
		questions: [InputQuestion!]!
	}

	extend type Query {
		getQuiz(id: ID!): Quiz
		getQuizzes: [Quiz!]!
		getCategories: [Category!]!
		getQuizByCategory(catId: ID!): [Quiz!]!
		getRandomQuiz: Quiz!
		getUserQuizzes(userId: ID!): [Quiz]
		getNQuizzesPerPage: [Quiz]
		getQuizzesByInputSearch(input: String!): [Quiz]!
		searchByPopularity: [Quiz!]!
	}

	extend type Mutation {
		createQuiz(quiz: QuizInput): Quiz
		destroyQuiz(quizId: ID!): Boolean!
		updateLike(quizId: ID!, giveLike: Boolean): Quiz
		createCategory(category: InputCategory): Category
		updateHighscore(quizId: ID!, score: Int!): Boolean
	}
`;
