const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0316'),
		title: 'How is carbon dioxide transported in the blood?',
		options: [
			{
				title:
					'By combing with water in the plasma to produce bicarbonate',
				result: false,
			},
			{ title: 'Binding to white blood cells', result: false },
			{ title: 'Binding to plasma', result: false },
			{ title: 'Binding with haemoglobin', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0317'),
		title:
			'The diffusion of O2 and CO2 at a cellular level is described as?',
		options: [
			{ title: 'Internal respiration', result: false },
			{ title: 'External respiration', result: false },
			{ title: 'Gas transfer', result: false },
			{ title: 'Gas transport', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0318'),
		title: 'What percentage of Oxygen makes up air?',
		options: [
			{ title: '31%', result: false },
			{ title: '40%', result: false },
			{ title: '21%', result: true },
			{ title: '50%', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0319'),
		title:
			'Gaseous exchange occurs at alveoli and cellular level using what principle?',
		options: [
			{ title: 'Diffusion', result: false },
			{ title: 'Osmosis', result: false },
			{ title: 'Transport', result: false },
			{ title: 'Convection', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0320'),
		title: 'The Hubble Space Telescope is named after',
		options: [
			{ title: 'An astronaut', result: false },
			{ title: 'Daphne Hubble', result: false },
			{ title: 'A rocket scientist', result: false },
			{ title: 'An astronomer', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0321'),
		title: 'What was the first GM food approved for human consumption?',
		options: [
			{ title: 'Wheat', result: false },
			{ title: 'Soy beans', result: false },
			{ title: 'Bubblegum', result: false },
			{ title: 'Tomatoes', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0322'),
		title: 'Human cells have how many chromosome pairs?',
		options: [
			{ title: '2', result: false },
			{ title: '23', result: true },
			{ title: '46', result: false },
			{ title: '247', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0323'),
		title: 'How long is one nanometre?',
		options: [
			{ title: 'One thousandth of a metre', result: false },
			{ title: 'As long as a piece of string', result: false },
			{ title: 'One millionth of a metre', result: false },
			{ title: 'One billionth of a metre', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0324'),
		title:
			'Moore’s Law states that the number of transistors that can be placed on an integrated circuit doubles every',
		options: [
			{ title: 'One year', result: false },
			{ title: 'Four days', result: false },
			{ title: 'Two years', result: true },
			{ title: 'Five years', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0325'),
		title:
			'Which planet in our solar system rotates on its side, an east-west axis, rather than north-south?',
		options: [
			{ title: 'Jupiter', result: false },
			{ title: 'Mars', result: false },
			{ title: 'Uranus', result: true },
			{ title: 'Saturn', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0326'),
		title:
			'How long does it take an individual blood cell to make a complete circuit of the body?',
		options: [
			{ title: 'About 20 seconds', result: false },
			{ title: 'About one minute', result: true },
			{ title: 'About ten minutes', result: false },
			{ title: 'About half an hour', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0327'),
		title: "How can scientists identify a star's elements?",
		options: [
			{ title: 'By its color', result: false },
			{ title: 'By its light', result: true },
			{ title: 'By its shape', result: false },
			{ title: 'By its age', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0328'),
		title: 'Gravitational force is a____force.',
		options: [
			{ title: 'Non contact', result: false },
			{ title: 'Contact', result: false },
			{ title: 'Uniform', result: false },
			{ title: 'Periodic', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0329'),
		title: 'The motion of a wheel in a car.',
		options: [
			{ title: 'Linear', result: false },
			{ title: 'Rotatory', result: true },
			{ title: 'Circular', result: false },
			{ title: 'Zigzag', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0330'),
		title: 'A bike moving on a straight road is an example of____motion.',
		options: [
			{ title: 'Linear', result: false },
			{ title: 'Oscillatory', result: false },
			{ title: 'Circular', result: false },
			{ title: 'Curvilinear', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0331'),
		title:
			'What non-renewable source damages the water supply, harms wildlife, and humans?',
		options: [
			{ title: 'Petroleum', result: false },
			{ title: 'Natural gas', result: false },
			{ title: 'Coal burning', result: true },
			{ title: 'Nuclear power', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0332'),
		title: 'The earth is the____ planet from the sun.',
		options: [
			{ title: 'Second', result: false },
			{ title: 'Third', result: true },
			{ title: 'Sixth', result: false },
			{ title: 'Fifth', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0333'),
		title:
			'The process  by which green plants use light energy to make food is called____',
		options: [
			{ title: 'Photosynthesis', result: false },
			{ title: 'Shinning', result: false },
			{ title: 'Rays', result: false },
			{ title: 'Electronic', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0334'),
		title: 'Solar energy is derived from _____',
		options: [
			{ title: 'Moon', result: false },
			{ title: 'Sky', result: false },
			{ title: 'Sun', result: true },
			{ title: 'Star', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0335'),
		title: 'All these insects undergo complete metamorphosis except_____',
		options: [
			{ title: 'Butterfly', result: false },
			{ title: 'Cockroach', result: false },
			{ title: 'Housefly', result: false },
			{ title: 'Bee', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0336'),
		title: 'What is the most common cause of the common cold?',
		options: [
			{ title: 'Rhinovirus', result: false },
			{ title: 'Coronovirus', result: false },
			{ title: 'Influenza', result: false },
			{ title: 'Staph Aureus', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0337'),
		title:
			'A 60-year-old male patient appears in acute respiratory distress and you suspect pneumonia. A fastidious gram-negative rod, which grows only on chocolate agar, is cultured from his sputum. Which of the following is the most likely cause of his problem?',
		options: [
			{ title: 'A. Klebsiella pneumoniae', result: false },
			{ title: 'B. M. tuberculosis', result: false },
			{ title: 'C. Haemophilus influenzae', result: true },
			{ title: 'D. Neisseria gonorrhoeae', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0338'),
		title:
			'A patient is a 68-year-old woman who presents with a fever, cough and chest pain. A sputum sample  reveals numerous neutrophils and gram-positive diplococci. The likely etiologic agent is:',
		options: [
			{ title: 'Chlamydophila pneumoniae', result: false },
			{ title: 'Haemophilus influenza', result: false },
			{ title: 'Mycoplasma pneumoniae', result: false },
			{ title: 'Strept. pneumoniae', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0339'),
		title: 'The capsule of Strept. Pneumoniae:',
		options: [
			{ title: 'Is a complex polysaccharide', result: false },
			{ title: 'Is not a virulence factor', result: false },
			{ title: 'Contains endotoxin', result: false },
			{ title: 'Forms the basis for alpha-hemolysis', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0340'),
		title: 'Which color absorbs more heat?',
		options: [
			{ title: 'Red', result: false },
			{ title: 'Black', result: true },
			{ title: 'Purple', result: false },
			{ title: 'White', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0341'),
		title: 'What is the fastest aquatic animal?',
		options: [
			{ title: 'Tuna', result: false },
			{ title: 'Flying fish', result: false },
			{ title: 'Shark', result: false },
			{ title: 'Dolphin', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0342'),
		title: 'What alien-like creature is a mystery?',
		options: [
			{ title: 'Bear Demon', result: false },
			{ title: 'Loveland Frog', result: false },
			{ title: 'Dover Demon', result: true },
			{ title: 'Nessie', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0343'),
		title: 'What is the fastest land animal?',
		options: [
			{ title: 'Cheetah', result: false },
			{ title: 'Jaguar', result: false },
			{ title: 'Leopard', result: false },
			{ title: 'Lion', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0344'),
		title: 'How do we get energy?',
		options: [
			{ title: 'Photosynthesis-ing', result: false },
			{ title: 'Sleeping,eating..etc.', result: true },
			{ title: 'Sleeping', result: false },
			{ title: 'Eating', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0345'),
		title: 'Which is a hypothetical string theory weightless particle?',
		options: [
			{ title: 'Graviton', result: false },
			{ title: 'EARTH WORM JIM', result: false },
			{ title: 'Anti-matter', result: false },
			{ title: 'Baryonic Matter', result: false },
		],
	},
];
