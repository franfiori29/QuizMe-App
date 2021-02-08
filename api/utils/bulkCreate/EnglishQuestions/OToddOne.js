const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0274'),
		title: 'Which snake is the odd one out?',
		options: [
			{ title: 'Cobra', result: false },
			{ title: 'Viper', result: false },
			{ title: 'Python', result: true },
			{ title: 'Rattlesnake', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0275'),
		title: 'Which tree does not belong to the same family like the others?',
		options: [
			{ title: 'Cooper Beech', result: false },
			{ title: 'Weeping Willow', result: true },
			{ title: 'Oak', result: false },
			{ title: 'Chestnut', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0276'),
		title: 'Which musical instrument is the odd one out?',
		options: [
			{ title: 'Saxophone', result: false },
			{ title: 'Trumpet', result: false },
			{ title: 'Tuba', result: false },
			{ title: 'Trombone', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0277'),
		title: 'Which animal is the odd one out?',
		options: [
			{ title: 'Lion', result: false },
			{ title: 'Giraffe', result: false },
			{ title: 'Rhinoceros', result: false },
			{ title: 'Elephant', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0278'),
		title:
			'Which state was not part of the Confederacy during the Civil War?',
		options: [
			{ title: 'Massachusetts', result: false },
			{ title: 'Louisiana', result: false },
			{ title: 'Florida', result: false },
			{ title: 'Tennessee', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0279'),
		title: 'Which fish is the odd one out?',
		options: [
			{ title: 'Mackerel', result: false },
			{ title: 'Carp', result: false },
			{ title: 'Trout', result: false },
			{ title: 'Pike', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0280'),
		title: 'Which country is the odd one out?',
		options: [
			{ title: 'Jamaica', result: false },
			{ title: 'Barbados', result: false },
			{ title: 'Puerto Rico', result: false },
			{ title: 'Madeira', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0281'),
		title: 'Which part of the body is the odd one out?',
		options: [
			{ title: 'Triceps', result: false },
			{ title: 'Hamstring', result: false },
			{ title: 'Clavicle', result: true },
			{ title: 'Flexor', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0282'),
		title: 'Which of the following is not a Greek god?',
		options: [
			{ title: 'Apollo', result: false },
			{ title: 'Tartarus', result: true },
			{ title: 'Ares', result: false },
			{ title: 'Dionysus', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0283'),
		title: 'Which city is the odd one out?',
		options: [
			{ title: 'Miami', result: false },
			{ title: 'Boston', result: false },
			{ title: 'Salt Lake City', result: false },
			{ title: 'Nashville', result: false },
		],
	},
];
