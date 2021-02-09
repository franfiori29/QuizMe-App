const { gql } = require('apollo-server');

module.exports = gql`
	type Quiz {
		_id: ID!
		title: String!
		description: String!
		image: String!
		language: String!
		likes: Int!
		categoryId: Category
		questions: [Question!]!
		time: Int!
		creatorId: UserSnippet
		highScores: [Highscore]
	}

	type QuizCard {
		_id: ID!
		title: String!
		description: String!
		image: String!
		likes: Int!
		language: String
		categoryId: ID
	}

	type UserSnippet {
		_id: ID!
		firstName: String
		lastName: String
		profilePic: String
	}

	type UserScore {
		_id: ID
		firstName: String
		lastName: String
	}

	type Highscore {
		_id: ID
		user: UserScore
		score: Int
	}

	type Question {
		_id: ID!
		title: String!
		options: [Option!]!
		image: String
		score: Int
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

	type QueryInfo {
		quizzes: [QuizCard]!
		hasNextPage: Boolean
		totalPages: Int
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
		language: String!
		likes: Int
		time: Int
		categoryId: String!
		questions: [InputQuestion!]!
	}

	extend type Query {
		getQuiz(id: ID!): Quiz
		getQuizzes: [QuizCard!]!
		getCategories: [Category!]!
		getQuizByCategory(catId: ID!): [QuizCard!]!
		getRandomQuiz: Quiz!
		getUserQuizzes(userId: ID!): [Quiz]
		getNQuizzesPerPage: [QuizCard]
		getQuizzesByInputSearch(
			input: String!
			cat: String
			page: Int
		): QueryInfo
		searchByPopularity(english: Boolean): [QuizCard!]!
		getSuggestedQuizzes(english: Boolean): [QuizCard!]!
		getFollowingQuizzes(english: Boolean): [QuizCard!]!
		getCategoriesByInput(input: String): [Category]!
	}

	extend type Mutation {
		createQuiz(quiz: QuizInput): Quiz
		destroyQuiz(quizId: ID!): Boolean!
		updateLike(quizId: ID!, giveLike: Boolean): Quiz
		createCategory(category: InputCategory): Category
		updateCategory(catId: ID!, category: InputCategory): String!
		destroyCategory(catId: ID!): Boolean!
		updateHighscore(quizId: ID!, score: Int!): Boolean
	}
`;
