const { gql } = require('apollo-server');

module.exports = gql `
	type User {
		firstName: String!
		lastName: String!
		email: String
		password: String
		accountId: String
		socialAccount: String
		countryCode: Int!
		roleId: Int
	}

	input UserInput {
		firstName: String!
		lastName: String!
		email: String
		password: String
		accountId: String
		socialAccount: String
		countryCode: Int!
		roleId: Int
	}

	type Query {
		sayHi: String!
		getUsers: [User]!
	}

	type Mutation {
		createUser(input: UserInput): User!
		compareUser(password: String): User
	}
`;