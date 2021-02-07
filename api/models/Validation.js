const { model, Schema } = require('mongoose');

const validationSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		fullName: { type: String, required: true },
		description: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = model('Validation', validationSchema);
