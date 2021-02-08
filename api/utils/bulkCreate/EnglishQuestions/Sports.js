const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0346'),
		title: 'Which NFL team has the longest playoff drought?',
		options: [
			{ title: 'Cleveland Browns', result: false },
			{ title: 'Los Angeles Rams', result: false },
			{ title: 'New York Jets', result: false },
			{ title: 'Buffalo Bills', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0347'),
		title: 'Which 2 MLB teammates have NOT won EACH an MVP award?',
		options: [
			{ title: 'Albert Pujols and Mike Trout', result: false },
			{ title: 'Jose Altuve and Justin Verlander', result: false },
			{ title: 'Justin Morneau and Joe Mauer', result: false },
			{ title: 'Giancarlo Stanton and Aaron Judge', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0348'),
		title:
			"Which NFL running back didn't rush for 1K yards in the 2016 NFL season?",
		options: [
			{ title: 'Jay Ajayi', result: false },
			{ title: 'LeSean McCoy', result: false },
			{ title: 'Melvin Gordon', result: true },
			{ title: 'Frank Gore', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0349'),
		title: 'Which soccer team qualified for the 2018 FIFA World Cup?',
		options: [
			{ title: 'Canada', result: false },
			{ title: 'Netherlands', result: false },
			{ title: 'USA', result: false },
			{ title: 'Saudi Arabia', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0350'),
		title: 'How many goals did Wayne Gretzky score in his career?',
		options: [
			{ title: '1,963', result: false },
			{ title: '890', result: false },
			{ title: '894', result: true },
			{ title: '577', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0351'),
		title: 'Which NHL player scored the most goals in their rookie season?',
		options: [
			{ title: 'Maurice Richard', result: false },
			{ title: 'Mike Bossy', result: false },
			{ title: 'Wayne Gretzky', result: false },
			{ title: 'Teemu Selanne', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0352'),
		title: 'What is the most popular sport in France?',
		options: [
			{ title: 'Basketball', result: false },
			{ title: 'Rugby', result: false },
			{ title: 'Football', result: true },
			{ title: 'Swimming', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0353'),
		title: 'How many people are in the Tour de France bike race?',
		options: [
			{ title: '330', result: false },
			{ title: '15', result: false },
			{ title: '22', result: false },
			{ title: '198', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0354'),
		title: "What is the men's basketball league called?",
		options: [
			{ title: 'Fédération française de Basket-ball', result: false },
			{ title: 'Ligue Nationale de Basketball', result: true },
			{ title: 'NBA', result: false },
			{ title: 'Basketbol Ligue de France', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0355'),
		title: 'How long does the Tour de France take?',
		options: [
			{ title: '18 years', result: false },
			{ title: '3 weeks', result: true },
			{ title: '12 miles', result: false },
			{ title: '24 days', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0356'),
		title: 'Where in France is rugby most popular?',
		options: [
			{ title: 'Northwestern France', result: false },
			{ title: 'Paris', result: false },
			{ title: 'Western France', result: false },
			{ title: 'Southern France', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0357'),
		title:
			'Which active athlete has been drafted in multiple of the 4 major sports?',
		options: [
			{ title: 'Carl Crawford', result: false },
			{ title: 'Ryan Getzlaf', result: false },
			{ title: 'Tom Brady', result: true },
			{ title: 'Jimmy Graham', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0358'),
		title: 'Which NHL player is from Germany?',
		options: [
			{ title: 'Leon Draisaitl', result: false },
			{ title: 'Zemgus Girgensons', result: false },
			{ title: 'Mats Zuccarello', result: false },
			{ title: 'Frans Nielsen', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0359'),
		title: 'Which team did 2-Way Japanese Shohei Ohtani sign with?',
		options: [
			{ title: 'Seattle Mariners', result: false },
			{ title: 'Los Angeles Angels of Anaheim', result: true },
			{ title: 'Texas Rangers', result: false },
			{ title: 'San Francisco Giants', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0360'),
		title: 'Which NHL player has won the Hart Memorial Trophy?',
		options: [
			{ title: 'John Tavares', result: false },
			{ title: 'Steven Stamkos', result: false },
			{ title: 'Corey Perry', result: true },
			{ title: 'Erik Karlsson', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0361'),
		title: 'Which sport is Ben Crenshaw famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'Boxing', result: false },
			{ title: 'Golf', result: true },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0362'),
		title: 'Which sport is Fuzzy Zoeller famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'Boxing', result: false },
			{ title: 'Golf', result: true },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0363'),
		title: 'Which sport is Jack Nicklaus famous for?',
		options: [
			{ title: 'Golf', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Football', result: false },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0364'),
		title: 'Which sport is Lee Trevino famous for?',
		options: [
			{ title: 'Tennis', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Golf', result: true },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0365'),
		title: 'Which sport is Payne Stewart famous for?',
		options: [
			{ title: 'Basketball', result: false },
			{ title: 'Golf', result: true },
			{ title: 'Baseball', result: false },
			{ title: 'Football', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0366'),
		title: 'Which sport is Phil Mickelson famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Baseball', result: false },
			{ title: 'Golf', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0367'),
		title: 'Which sport is Curtis Strange famous for?',
		options: [
			{ title: 'Golf', result: false },
			{ title: 'Football', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0368'),
		title: 'Which sport is Arnold Palmer famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'Boxing', result: false },
			{ title: 'Baseball', result: false },
			{ title: 'Golf', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0369'),
		title: 'Which sport is Rusty Wallace famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'NASCAR', result: true },
			{ title: 'Basketball', result: false },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0370'),
		title: 'Which sport is Cale Yarborough famous for?',
		options: [
			{ title: 'Tennis', result: false },
			{ title: 'Baseball', result: false },
			{ title: 'Gymnastics', result: false },
			{ title: 'NASCAR', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0371'),
		title: 'Which sport is Willie Shoemaker famous for?',
		options: [
			{ title: 'Boxing', result: false },
			{ title: 'Horse Racing', result: true },
			{ title: 'Football', result: false },
			{ title: 'Baseball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0372'),
		title: 'Which sport is Sarah Hughes famous for?',
		options: [
			{ title: 'Football', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Baseball', result: false },
			{ title: 'Ice Skating', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0373'),
		title: 'Which sport is Michelle Kwan famous for?',
		options: [
			{ title: 'Baseball', result: false },
			{ title: 'Ice Skating', result: true },
			{ title: 'Gymnastics', result: false },
			{ title: 'Basketball', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0374'),
		title: 'Which sport is Kristi Yamaguchi famous for?',
		options: [
			{ title: 'Diving', result: false },
			{ title: 'Basketball', result: false },
			{ title: 'Boxing', result: false },
			{ title: 'Ice Skating', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0375'),
		title: 'Which sport is Nancy Kerrigan famous for?',
		options: [
			{ title: 'Baseball', result: false },
			{ title: 'Golf', result: false },
			{ title: 'Ice Skating', result: true },
			{ title: 'Basketball', result: false },
		],
	},
];
