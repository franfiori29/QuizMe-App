const usersResolvers = require('./users');
const quizResolvers = require('./quizzes');
const statsResolvers = require('./stats');

module.exports = {
	Query: {
		...usersResolvers.Query,
		...quizResolvers.Query,
		...statsResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...quizResolvers.Mutation,
	},
};
