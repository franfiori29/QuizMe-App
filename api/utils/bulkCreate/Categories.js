const mongoose = require('mongoose');
const categories = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00001'),
		description_en: 'Math',
		description_es: 'Matemáticas',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00002'),
		description_en: 'Science',
		description_es: 'Ciencia',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00003'),
		description_en: 'Music',
		description_es: 'Música',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00004'),
		description_en: 'Sport',
		description_es: 'Deportes',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00005'),
		description_en: 'Movies',
		description_es: 'Películas',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451a00006'),
		description_en: 'Literature',
		description_es: 'Literatura',
	},
];

module.exports = categories;
