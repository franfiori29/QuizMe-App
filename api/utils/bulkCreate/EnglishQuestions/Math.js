const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0149'),
		title:
			'What is an object measured in three dimensions of length, width, and height?',
		options: [
			{ title: 'Five-Dimensional.', result: false },
			{ title: 'Three-Dimensional.', result: true },
			{ title: 'Two-Dimensional.', result: false },
			{ title: 'One-Dimensional.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0150'),
		title: 'What is a polygon with four sides called?',
		options: [
			{ title: 'Circle.', result: false },
			{ title: 'Quadrilateral.', result: true },
			{ title: 'Pentagon.', result: false },
			{ title: 'Triangle.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0151'),
		title:
			"What is the amount left over when a number can't be divided equally?",
		options: [
			{ title: 'Whole Number.', result: false },
			{ title: 'Remainder.', result: true },
			{ title: 'Odd Number.', result: false },
			{ title: 'Divisor.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0152'),
		title: 'How many sides of the same length does a rhombus have?',
		options: [
			{ title: 'Eighteen.', result: false },
			{ title: 'One.', result: false },
			{ title: 'Four.', result: true },
			{ title: 'Three.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0153'),
		title:
			'What kind of clock has hands moving on it for showing hours and minutes?',
		options: [
			{ title: 'Sundial.', result: false },
			{ title: 'Digital.', result: false },
			{ title: 'Analog.', result: true },
			{ title: 'Stopwatch.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0154'),
		title: 'What is 10 - 4 equal to?',
		options: [
			{ title: '10', result: false },
			{ title: '19', result: false },
			{ title: '6', result: true },
			{ title: '2', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0155'),
		title:
			'What is the line segment where two faces of a solid figure meet?',
		options: [
			{ title: 'Vertex.', result: false },
			{ title: 'Diameter.', result: false },
			{ title: 'Edge.', result: true },
			{ title: 'Surface.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0156'),
		title: 'What is a "point"?',
		options: [
			{ title: 'Another Word For Sum.', result: false },
			{ title: 'A Factor In A Sentence.', result: false },
			{ title: 'An Exact Location In Space.', result: true },
			{ title: 'An Estimation.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0157'),
		title: 'Which unit is used to measure angles or temperatures?',
		options: [
			{ title: 'Decimeter.', result: false },
			{ title: 'Degree.', result: true },
			{ title: 'Point.', result: false },
			{ title: 'Inch.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0158'),
		title:
			'If two objects have the same shape, but are different in size, then they are what?',
		options: [
			{ title: 'Prime.', result: false },
			{ title: 'Similar.', result: true },
			{ title: 'Odd.', result: false },
			{ title: 'Even.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0159'),
		title: 'How many right angles does a square have?',
		options: [
			{ title: '1', result: false },
			{ title: '24', result: false },
			{ title: '26', result: false },
			{ title: '4', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0160'),
		title: 'In an expression, what is missing?',
		options: [
			{ title: 'An Equal Sign.', result: false },
			{ title: 'Addends.', result: false },
			{ title: 'The Number Three.', result: false },
			{ title: 'Minus Signs.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0161'),
		title:
			'If you drive 20 miles to work every day, each way, how many miles do you travel in a work week?',
		options: [
			{ title: '80', result: false },
			{ title: '100', result: false },
			{ title: '200', result: true },
			{ title: '400', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0162'),
		title:
			'If you spend fifteen minutes a day on a coffee break, how much time is this per work week?',
		options: [
			{ title: '1 Hour 15 Minutes', result: false },
			{ title: '1 Hour', result: false },
			{ title: '1 Hour 45 Minutes', result: false },
			{ title: '1 And A Half Hour', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0163'),
		title:
			'If you buy a TV that costs $300, and the tax is 4 percent, what is the total price?',
		options: [
			{ title: '312', result: false },
			{ title: '308', result: false },
			{ title: '310', result: false },
			{ title: '304', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0164'),
		title:
			'Assuming sales tax is 6%, how much sales tax would you pay on a $500 purchase?',
		options: [
			{ title: '10', result: false },
			{ title: '65', result: false },
			{ title: '30', result: true },
			{ title: '45', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0165'),
		title:
			'If one person eats $25 in food a week, how much money will you need to feed four people a week?',
		options: [
			{ title: '$50/week', result: false },
			{ title: '$100/week', result: true },
			{ title: '$200/week', result: false },
			{ title: '$75/week', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0166'),
		title:
			"If you've gone 360 miles on 12 gallons of gas, how many miles per gallon do you get?",
		options: [
			{ title: '300 MPG', result: false },
			{ title: '12 MPG', result: false },
			{ title: '30 MPG', result: true },
			{ title: '10 MPG', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0167'),
		title:
			"If you've been paid $360 for completing 3,600 tasks, how much have you made per task?",
		options: [
			{ title: '30 Cents', result: false },
			{ title: '100 Cents', result: false },
			{ title: '10 Cents', result: true },
			{ title: '36 Cents', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0168'),
		title:
			'If a dog eats 2 cups of food a day, how much food will he eat in March?',
		options: [
			{ title: '56 Cups', result: false },
			{ title: '62 Cups', result: true },
			{ title: '60 Cups', result: false },
			{ title: 'No Way To Tell', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0169'),
		title:
			'If a five day vacations costs 2500 dollars, how much does each day cost?',
		options: [
			{ title: '250 Dollars', result: false },
			{ title: '500 Dollars', result: true },
			{ title: '1000 Dollars', result: false },
			{ title: '750 Dollars', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0170'),
		title:
			'If college costs $25,000/year, how much should you save for 4 years of college?',
		options: [
			{ title: '100000', result: false },
			{ title: '50000', result: false },
			{ title: '250000', result: false },
			{ title: '150000', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0171'),
		title: 'How many $5.00 items one can buy with $40.00?',
		options: [
			{ title: '4', result: false },
			{ title: '8', result: true },
			{ title: '5', result: false },
			{ title: '10', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0172'),
		title:
			"If I pay you $10.00 to paint a 2' x 2' wall, how much should I pay you to paint a 4' x 4' wall?",
		options: [
			{ title: '80', result: false },
			{ title: '40', result: true },
			{ title: '15', result: false },
			{ title: '20', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0173'),
		title:
			'If you leave the house at 8:15 a.m. and your trip takes 3 hours ten minutes, when do you arrive?',
		options: [
			{ title: '11:00 A.M.', result: false },
			{ title: '11:25 A.M.', result: true },
			{ title: '10:30 A.M.', result: false },
			{ title: '12:00 Noon', result: false },
		],
	},
];
