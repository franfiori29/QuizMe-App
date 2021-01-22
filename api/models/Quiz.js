const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const quizSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		likes: { type: Number, default: 0 },
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		questions: [
			{ type: Schema.Types.ObjectId, ref: 'Question', required: true },
		],
	},
	{ timestamps: true },
);

module.exports = model('Quiz', quizSchema);
