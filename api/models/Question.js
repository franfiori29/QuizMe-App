const { model, Schema } = require('mongoose');

const questionSchema = new Schema(
	{
		title: { type: String, required: true },
		options: [
			{
				title: { type: String, required: true },
				result: { type: Boolean, required: true },
			},
		],
		image: String,
		score: { type: Number, required: false },
	},
	{ timestamps: true }
);

module.exports = model('Question', questionSchema);
