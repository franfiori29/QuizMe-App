const { gql } = require('apollo-server');

module.exports = gql`
	type Validation {
		_id: ID!
		fullName: String
		description: String
		userId: User
	}

	input ValidationInput {
		fullName: String
		description: String
		userId: ID
	}

	extend type Query {
		getValidations: [Validation]
	}

	extend type Mutation {
		createValidation(validation: ValidationInput): String
		deleteValidation(validationId: ID!): String
	}
`;
