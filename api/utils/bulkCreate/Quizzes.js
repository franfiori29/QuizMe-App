const mongoose = require('mongoose');

const quizzes = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0000'),
		title: 'Fórmulas matemáticas',
		description:
			'Resuelve las más difíciles fórmulas matemáticas conocidas por el hombre!',
		image:
			'https://i.pinimg.com/736x/c8/e5/75/c8e5753370bad54c7977d485e0a0e29d.jpg',
		likes: 8,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00001'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0001'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0002'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0003'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0004'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0001'),
		title: 'Fisica: Fuerza',
		description:
			'Adentrate en el maravilloso mundo de la fisica. Solo tu puedes hacerlo',
		image:
			'https://thefactfactor.com/wp-content/uploads/2019/10/Force-01.png',
		likes: 2,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00002'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0005'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0006'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0007'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0008'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0002'),
		title: 'Adivina la banda',
		description: 'Adivina la banda a partir de la tapa del disco',
		image:
			'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music.jpg',
		likes: 8,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00003'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0009'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0010'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0011'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0012'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0003'),
		title: 'Soccer Trivia!',
		description:
			'Are you the best soccer fan? Then this trivia is for you!',
		image: 'https://i.ytimg.com/vi/RSiua8GslHA/maxresdefault.jpg',
		likes: 1,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00004'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0013'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0014'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0015'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0016'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0004'),
		title: 'Star Wars Trivia',
		description:
			'Demostrale a tus amigos que eres el más fanático de Star Wars!',
		image:
			'https://www.3dnatives.com/es/wp-content/uploads/sites/4/article_starwars.jpg',
		likes: 52,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00005'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0017'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0018'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0019'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0020'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0005'),
		title: '¿Quién es el actor?',
		description: '¿Eres un cinéfilo? Demuéstralo!',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/3/37/A_Traditional_Wooden_Slate_Clapperboard.jpg',
		likes: 25,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00006'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0021'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0022'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0023'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0024'),
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0006'),
		title: 'Desafío químico',
		description: '¿Eres un experto en química?',
		image:
			'https://lh3.googleusercontent.com/proxy/8-dvP3B0-5aI3ilLWJSbs6TVfRizwRPW1krnctvmojg4xbfeaiVClAJQMnWV8bv8ga36TZD1O78qiW8aApv_1Oh-jMOCnpBSLbF7knYOKk-5tzvU',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451a00002'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0025'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0026'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0027'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0028'),
		],
	},
];

module.exports = quizzes;
