const mongoose = require('mongoose');

const users = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
		email: 'nc.devw@gmail.com',
		password: '!Qwerty123',
		firstName: 'Nacho',
		lastName: 'Contreras',
		countryCode: 'AR',
		role: 'ADMIN',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0000')],
		notificationToken: 'ExponentPushToken[QobVLNO-iGjoP2_3Ey-Alx]',
		following: [mongoose.Types.ObjectId('5959e34adf833e1451aa0001')],
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0000.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
		email: 'emi@mail.com',
		password: '!Qwerty123',
		firstName: 'Emiliano',
		lastName: 'Alfonso',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0001')],
		followers: 1,
		following: [
			mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
			mongoose.Types.ObjectId('5959e34adf833e1451aa0007'),
			mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
		],
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0008.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
		email: 'fran@mail.com',
		password: '!Qwerty123',
		firstName: 'Fran',
		lastName: 'Fiori',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		followers: 1,
		following: [
			mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
			mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
			mongoose.Types.ObjectId('5959e34adf833e1451aa0005'),
		],
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0002.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
		email: 'paco@mail.com',
		password: '!Qwerty123',
		firstName: 'Paco',
		lastName: 'Ortiz',
		countryCode: 'AR',
		role: 'ADMIN',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		followers: 3,
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0003.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0004'),
		email: 'tincho@mail.com',
		password: '!Qwerty123',
		firstName: 'Tincho',
		lastName: 'Sanchez',
		countryCode: 'AR',
		validated: true,
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		followers: 1,
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0004.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0005'),
		email: 'bruno@mail.com',
		password: '!Qwerty123',
		firstName: 'Bruno',
		lastName: 'Gallardo',
		countryCode: 'AR',
		validated: true,
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		followers: 2,
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0005.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0006'),
		email: 'c.ttiago7@gmail.com',
		password: '!Qwerty123',
		firstName: 'Santi',
		lastName: 'Calisaya',
		countryCode: 'AR',
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0006.svg',
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451aa0007'),
		email: 'ailin.nakaganeku@gmail.com',
		password: '!Qwerty123',
		firstName: 'Ailin',
		lastName: 'Nakaganeku',
		countryCode: 'AR',
		role: 'ADMIN',
		validated: true,
		completedQuiz: [mongoose.Types.ObjectId('5959e34adf833e1451ac0002')],
		followers: 1,
		profilePic:
			'https://avatars.dicebear.com/4.5/api/avataaars/5959e34adf833e1451aa0007.svg',
	},
];

module.exports = users;
