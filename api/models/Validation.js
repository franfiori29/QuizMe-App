const { model, Schema } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const validationSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
			unique: true,
		},
		fullName: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamps: true }
);

validationSchema.plugin(uniqueValidator, {
	message: 'Error, expected {PATH} to be unique.',
});

module.exports = model('Validation', validationSchema);
