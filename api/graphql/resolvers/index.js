const usersResolvers = require('./users');
const quizResolvers = require('./quizzes');
const statsResolvers = require('./stats');
const validationsResolvers = require('./validations');

module.exports = {
	Query: {
		...usersResolvers.Query,
		...quizResolvers.Query,
		...statsResolvers.Query,
		...validationsResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...quizResolvers.Mutation,
		...validationsResolvers.Mutation,
	},
};
