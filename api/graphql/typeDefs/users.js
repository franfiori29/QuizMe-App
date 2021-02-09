const { gql } = require('apollo-server');

module.exports = gql`
	enum Role {
		USER
		ORG
		ADMIN
	}

	type Ids {
		_id: ID
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
		resetCode: String
		createdQuizzes: [Ids]
		totalScore: Int
		followers: Int
		following: [ID]
	}

	type MinUser {
		_id: ID
		firstName: String
		lastName: String
		email: String
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
		resetCode: String
	}

	type Query {
		getUsers: [User]!
		getCompletedQuizzes: [Quiz]
		getUser(userId: ID!): User
		getUsersByInput(input: String): [User]!
		getFollowing: [MinUser]!
		getFollowers: Int
	}

	type Mutation {
		updateUser(userBody: UserInput): User!
		completeQuiz(quizId: ID!): User!
		changePassword(newPass: String!, currPass: String!): String
		changeEmail(newMail: String!, currPass: String!): String
		activateUser(userId: ID!, isActive: Boolean!): [User]!
		validateUser(userId: ID!, validationId: ID!): String!
		promoteUser(userId: ID!, role: String!): String!
		premiumUser: String!
		setNotificationToken(token: String!): String!
		sendNotification(message: String!, title: String!): String!
		followUser(userId: ID!): [MinUser]!
		unfollowUser(userId: ID!): [ID]!
	}
`;
