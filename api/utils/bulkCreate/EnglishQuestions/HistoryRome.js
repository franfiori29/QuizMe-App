const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0242'),
		title:
			'Who were the twins that the roman legend says founded the city of Rome?',
		options: [
			{ title: 'Cain and Abel', result: false },
			{ title: 'Diana and Apollo', result: false },
			{ title: 'Romulus and Remus', result: true },
			{ title: 'Spartacus and Caesar', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0243'),
		title: 'What was the armor that the Roman soldiers wore made of?',
		options: [
			{ title: 'Strips of iron', result: false },
			{ title: 'Bones from oxen', result: false },
			{ title: 'Toughened leather', result: false },
			{ title: 'Hardened steel', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0244'),
		title: 'Where did the colosseum get its name?',
		options: [
			{
				title: 'From the most famous gladiator of the day',
				result: false,
			},
			{ title: 'From the emperor who built it', result: false },
			{ title: 'From the architect who designed it', result: false },
			{
				title: 'From the large statue of Nero that stood nearby',
				result: true,
			},
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0245'),
		title: 'What year did Mount Vesuvius erupt?',
		options: [
			{ title: '231 BC', result: false },
			{ title: '52 BC', result: false },
			{ title: '79 AD', result: true },
			{ title: '167 AD', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0246'),
		title: 'How did the Romans get water supplied to the city?',
		options: [
			{ title: 'Tunnels', result: false },
			{ title: 'Aqueducts', result: true },
			{ title: 'Directly from the river Tiber', result: false },
			{ title: 'Plumbing', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0247'),
		title:
			'What two major crops were grown in the rich soil near the city of Pompeii?',
		options: [
			{ title: 'Oranges and peaches', result: false },
			{ title: 'Corn and wheat', result: false },
			{ title: 'Squash and beans', result: false },
			{ title: 'Grapes and olive treees', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0248'),
		title:
			'Before Rome converted to Christianity what frequently happened to Christians?',
		options: [
			{
				title: "They were not liked, but we're tolerated",
				result: false,
			},
			{ title: 'They were well thought of', result: false },
			{ title: 'They were persecuted and killed', result: true },
			{ title: 'All of the above', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0249'),
		title:
			'What architectural feature did the Romans use to make their constructions such as bridges and the colosseum strong?',
		options: [
			{ title: 'The dome', result: false },
			{ title: 'The arch', result: true },
			{ title: 'The gable', result: false },
			{ title: 'The colonnade', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0250'),
		title:
			'The Romans built the most advanced society in the ancient world and famously invented the following:',
		options: [
			{ title: 'Concrete', result: false },
			{ title: 'Roads', result: false },
			{ title: 'Plumbing (known as Aquaducts)', result: false },
			{ title: 'All and more.', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0251'),
		title: 'In what way was Pompeii like many other major Roman cities?',
		options: [
			{ title: 'There were public baths', result: false },
			{
				title: 'It had temples to Roman Gods such as Apollo',
				result: false,
			},
			{
				title:
					'It had a forum where politics and business were carried out',
				result: false,
			},
			{ title: 'All of them', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0252'),
		title:
			'What work of Roman engineering was important in allowing the Roman Army to protect such a large Empire?',
		options: [
			{ title: 'Miles of Aqueducts leading into Rome', result: false },
			{ title: 'The arch', result: false },
			{ title: 'A paved network of roads', result: true },
			{ title: 'The Colosseum', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0253'),
		title: 'From what Roman God of fire do we get the word volcano?',
		options: [
			{ title: 'Jupiter', result: false },
			{ title: 'Vulcan', result: true },
			{ title: 'Mercury', result: false },
			{ title: 'Ceres', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0254'),
		title:
			'The main division of the Roman army was around 5400 soldiers. What was this division called?',
		options: [
			{ title: 'Troop', result: false },
			{ title: 'Legion', result: true },
			{ title: 'Platoon', result: false },
			{ title: 'Brigade', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0255'),
		title:
			'What civilization did the Romans borrow many of their Gods such as Jupiter from?',
		options: [
			{ title: 'Chinese', result: false },
			{ title: 'Egyptian', result: false },
			{ title: 'Greek', result: true },
			{ title: 'Persia', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0256'),
		title: 'How did the ancient Roman army use tortoises?',
		options: [
			{
				title:
					"The 'tortoise' was a name for the way they used their shields.",
				result: false,
			},
			{ title: 'For throwing at enemies.', result: false },
			{
				title: 'They used the shells as soup bowls. For eating.',
				result: false,
			},
			{ title: 'As pets.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0257'),
		title: 'Around what year was the city of Rome founded?',
		options: [
			{ title: '467 AD', result: false },
			{ title: '753 BC', result: true },
			{ title: '500 AD', result: false },
			{ title: '58 BC', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0258'),
		title:
			'What type of entertainment did the Romans attend at the Colosseum?',
		options: [
			{ title: 'Gladiator games', result: false },
			{ title: 'Chariot races', result: false },
			{ title: 'Opera', result: false },
			{ title: 'All of the above', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0259'),
		title:
			'What was the name of the large stadium in the city of Rome where chariot races were held?',
		options: [
			{ title: 'Arena Maximus', result: false },
			{ title: 'Colosseum', result: false },
			{ title: 'Circus Maximus', result: true },
			{ title: 'Roman speedway', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0260'),
		title:
			'Who often paid for the games and entertainment in Ancient Rome?',
		options: [
			{
				title:
					'The poor people did in order to try and impress the rich',
				result: false,
			},
			{
				title: 'The government did with taxes from the poor',
				result: false,
			},
			{
				title:
					'The wealthy citizens of Rome, so they would be popular with the people.',
				result: true,
			},
			{ title: 'All of the above', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0261'),
		title:
			'In the Colosseum, who had to sit or stand at the back, near the top of the stadium?',
		options: [
			{ title: 'Senators', result: false },
			{ title: 'Men', result: false },
			{ title: 'Women', result: true },
			{ title: 'Important officials', result: false },
		],
	},
];
