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
	}

	type Question {
		_id: ID!
		title: String!
		options: [Option!]!
		image: String
		time: Int!
		score: Int!
	}

	type Option {
		title: String!
		result: Boolean!
	}

	type Category {
		_id: ID!
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
		time: Int
		score: Int!
	}

	input QuizInput {
		title: String!
		description: String!
		img: String!
		likes: Int
		categoryId: String!
		questions: [InputQuestion!]!
	}

	extend type Query {
		getQuiz(id: ID!): Quiz
		getQuizzes: [Quiz!]!
	}

	extend type Mutation {
		createQuiz(quiz: QuizInput): Quiz
	}
`;
