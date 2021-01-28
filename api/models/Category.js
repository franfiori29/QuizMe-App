const { model, Schema } = require('mongoose');

const categorySchema = new Schema(
	{
		description_en: { type: String, required: true },
		description_es: { type: String, required: true },
	},
	{ timestamps: true },
);

module.exports = model('Category', categorySchema);
