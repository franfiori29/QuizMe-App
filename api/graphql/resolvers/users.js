const User = require('./../../models/User.js');

module.exports = {
	Query: {
		getUsers: async () => {
			const users = await User.find();
			return users;
		},
	},
	Mutation: {},
};
