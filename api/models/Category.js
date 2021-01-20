const { model, Schema } = require('mongoose');

const categorySchema = new Schema({
    description: { type: String, required: true },
}, { timestamps: true });

module.exports = model('Category', categorySchema);