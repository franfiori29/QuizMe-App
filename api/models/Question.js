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
		time: { type: Number, default: 10 },
		score: { type: Number, required: true },
	},
	{ timestamps: true },
);

module.exports = model('Question', questionSchema);
