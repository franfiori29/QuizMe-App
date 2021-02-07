const Validation = require('../../models/Validation.js');

module.exports = {
	Query: {
		getValidations: async (_, __, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			const foundValidations = await Validation.find().populate('userId');
			return foundValidations;
		},
	},
	Mutation: {
		createValidation: async (_, { validation }, { user }) => {
			await Validation.create({
				...validation,
				userId: user._id,
			});
			return 'Created Succesfully';
		},
		deleteValidation: async (_, { validationId }, { user }) => {
			if (user.role !== 'ADMIN') throw new Error('Not authorized');
			await Validation.deleteOne({ _id: validationId });
			return 'Deleted Succesfully';
		},
	},
};
