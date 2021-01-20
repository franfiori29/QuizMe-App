const { model, Schema } = require('mongoose');

const questionSchema = new Schema({
    title: { type: String, required: true },
    options: [{ type: String, required: true }],
    image: String,
    time: Number,
    score: { type: Number, required: true },
}, { timestamps: true });

module.exports = model('Question', questionSchema);