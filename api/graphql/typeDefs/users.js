const { gql } = require('apollo-server');

module.exports = gql`
	enum Role {
		USER
		ORG
		ADMIN
	}

	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		profilePic: String
		accountId: String
		socialAccount: String
		countryCode: String
		role: Role
		completedQuiz: [Quiz]
		likedQuiz: [Quiz]
		isActive: Boolean
		premium: Boolean
		validated: Boolean
	}

	input UserInput {
		_id: ID
		firstName: String
		lastName: String
		email: String
		password: String
		profilePic: String
		accountId: String
		socialAccount: String
		countryCode: String
		role: Role
	}

	type Query {
		getUsers: [User]!
		getCompletedQuizzes: [Quiz]
	}

	type Mutation {
		updateUser(userBody: UserInput): User!
		completeQuiz(quizId: ID!): User!
		changePassword(newPass: String!, currPass: String!): String
		changeEmail(newMail: String!, currPass: String!): String
		activateUser(userId: ID!, isActive: Boolean!): String
		validateUser(userId: ID!): String!
		premiumUser: String!
		setNotificationToken(token: String!): String!
		sendNotification(message: String!): String!
	}
`;
