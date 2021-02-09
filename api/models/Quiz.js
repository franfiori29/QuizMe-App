const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const quizSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		language: { type: String, required: true, default: 'es' },
		likes: { type: Number, default: 0 },
		creatorId: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		categoryId: {
			type: Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		questions: [
			{ type: Schema.Types.ObjectId, ref: 'Question', required: true },
		],
		time: { type: Number, default: 15 },
		highScores: [
			{
				user: {
					type: Schema.Types.ObjectId,
					ref: 'User',
					required: true,
				},
				score: { type: Number, required: true },
			},
		],
		type: {
			type: String,
			enum: ['classic', 'boolean', 'image'],
			default: 'classic',
		},
	},
	{ timestamps: true }
);

quizSchema.plugin(mongoosePaginate);

module.exports = model('Quiz', quizSchema);
