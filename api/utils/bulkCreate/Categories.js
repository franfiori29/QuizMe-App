const mongoose = require('mongoose');
const categories = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0001'), // COMPLETADA
		description_en: 'Math',
		description_es: 'Matemáticas',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0002'), // COMPLETADA
		description_en: 'Science',
		description_es: 'Ciencias',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0003'), // COMPLETADA
		description_en: 'Music',
		description_es: 'Música',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0004'), // COMPLETADA
		description_en: 'Sport',
		description_es: 'Deportes',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0005'), // COMPLETADA
		description_en: 'Movies',
		description_es: 'Películas',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0006'), // COMPLETADA
		description_en: 'Literature',
		description_es: 'Literatura',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0007'), // COMPLETADA
		description_en: 'Programming',
		description_es: 'Programación',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0008'), // COMPLETADA
		description_en: 'Arts',
		description_es: 'Arte',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0009'),
		description_en: 'History',
		description_es: 'Historia',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0010'),
		description_en: 'Geography',
		description_es: 'Geografía',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0011'),
		description_en: 'Natural Sciences',
		description_es: 'Ciencias Naturales',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ab0012'),
		description_en: 'Off Topic',
		description_es: 'Cambalache',
	},
];

module.exports = categories;
