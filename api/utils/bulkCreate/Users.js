const mongoose = require('mongoose');

const users = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
		email: 'nc.devw@gmail.com',
		password: '!Qwerty123',
		firstName: 'Nacho',
		lastName: 'Contreras',
		countryCode: 1,
		role: 'ADMIN',
	},
	{
		email: 'emi@mail.com',
		password: '!Qwerty123',
		firstName: 'Emiliano',
		lastName: 'Alfonso',
		countryCode: 1,
	},
	{
		email: 'fran@mail.com',
		password: '!Qwerty123',
		firstName: 'Fran',
		lastName: 'Fiori',
		countryCode: 1,
	},
	{
		email: 'paco@mail.com',
		password: '!Qwerty123',
		firstName: 'Paco',
		lastName: 'Ortiz',
		countryCode: 1,
	},
	{
		email: 'tincho@mail.com',
		password: '!Qwerty123',
		firstName: 'Tincho',
		lastName: 'Sanchez',
		countryCode: 1,
	},
	{
		email: 'bruno@mail.com',
		password: '!Qwerty123',
		firstName: 'Bruno',
		lastName: 'Gallardo',
		countryCode: 1,
	},
	{
		email: 'santi@mail.com',
		password: '!Qwerty123',
		firstName: 'Santi',
		lastName: 'Calisaya',
		countryCode: 1,
	},
	{
		email: 'ailu@mail.com',
		password: '!Qwerty123',
		firstName: 'Ailin',
		lastName: 'Nakaganeku',
		countryCode: 1,
	},
];

module.exports = users;
