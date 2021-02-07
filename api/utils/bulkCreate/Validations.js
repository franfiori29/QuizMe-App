const mongoose = require('mongoose');

const validations = [
	{
		userId: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
		fullName: 'Nacho Contreras',
		description: 'Por Favor Aceptame wey!',
	},
	{
		userId: mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
		fullName: 'Emi Alfonso',
		description: 'Nadie quiere estar en tu grupo de validaciones',
	},
	{
		userId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
		fullName: 'Fran Fiori',
		description: 'Que falopa!',
	},
	{
		userId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
		fullName: 'Piojo Ortiz',
		description: 'Te prometo no mas componentes :P',
	},
];

module.exports = validations;
