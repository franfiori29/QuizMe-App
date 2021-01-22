const { gql } = require('apollo-server');

module.exports = gql`
	enum Role {
		USER
		ORG
		ADMIN
	}
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
		description_en: String
		description_es: String
	}

	type User {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		profilePic: String!
		accountId: String
		socialAccount: String
		countryCode: Int!
		role: Role!
		correctQuiz: [Quiz]
	}

	input UserInput {
		_id: ID!
		firstName: String!
		lastName: String!
		email: String!
		password: String
		profilePic: String!
		accountId: String
		socialAccount: String
		countryCode: Int!
		role: Role!
	}

	type Query {
		getUsers: [User]!
		getCompleteQuiz: [ID]
	}

	type Mutation {
		updateUser(user: UserInput): User!
	}
`;
