const usersResolvers = require('./users');
const quizResolvers = require('./quizzes');

module.exports = {
	Query: {
		...usersResolvers.Query,
		...quizResolvers.Query,
	},
	Mutation: {
		...usersResolvers.Mutation,
		...quizResolvers.Mutation,
	},
};
