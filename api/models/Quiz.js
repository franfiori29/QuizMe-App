const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const quizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    likes: { type: String, default: 0 },
    categoryId: { type: String, required: true },
}, { timestamps: true });

module.exports = model('Quiz', quizSchema);