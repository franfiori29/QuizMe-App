const User = require('./../../models/User.js');

module.exports = {
	Query: {
		sayHi: () => 'Hi',
		getUsers: async () => {
			const users = await User.find();
			return users;
		},
	},
	Mutation: {
		createUser: async (_, { input }) => {
			const newUser = await User.create(input);
			newUser.save();
			return newUser;
		},
	},
};
