const User = require('./../../models/User.js');

module.exports = {
    Query: {
        sayHi: () => 'Hi',
        getUsers: async() => {
            const users = await User.find();
            return users;
        },
    },
    Mutation: {
        createUser: async(_, { input }) => {
            const newUser = await User.create(input);
            return newUser;
        },
        compareUser: async(_, { password }) => {
            const user = await User.find({
                email: 'nc.devwa@gmail.com',
            });
            return user[0];
        },
    },
};