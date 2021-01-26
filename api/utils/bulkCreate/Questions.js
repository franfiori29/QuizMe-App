const mongoose = require('mongoose');

const questions = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0001'),
		title: '¿Qué fórmula es usada para encontrar el area de un triángulo?',
		options: [
			{ title: 'A = π*r^2', result: false },
			{ title: 'A = b*(h)', result: false },
			{ title: 'A = l*(w)*(h)', result: false },
			{ title: 'A = (1/2)*b*(h)V', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0002'),
		title:
			'¿Cuál es el resultado de la siguiente multiplicación: (3/4)x4? ',
		options: [
			{ title: '3', result: true },
			{ title: '2', result: false },
			{ title: '2/4', result: false },
			{ title: '12/4', result: false },
		],
		time: 15,
		score: 3,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0003'),
		title: 'La expresión 2+4x4-1 da: ',
		options: [
			{ title: '24', result: false },
			{ title: '15', result: false },
			{ title: '18', result: false },
			{ title: '17', result: true },
		],
		time: 10,
		score: 8,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0004'),
		title: '5x5+(5x0)+1+2x0 es:',
		options: [
			{ title: '0', result: false },
			{ title: '1', result: false },
			{ title: '28', result: false },
			{ title: '26', result: true },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0005'),
		title:
			'¿Cómo se llama el componente mínimo que forma a los seres vivos? ',
		options: [
			{ title: 'Tejido', result: false },
			{ title: 'Partícula', result: false },
			{ title: 'Núcleo', result: false },
			{ title: 'Célula', result: true },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0006'),
		title:
			'El proceso por el que una célula se divide para formar dos células hijas se llama:',
		options: [
			{ title: 'Segregación', result: false },
			{ title: 'Mitosis', result: true },
			{ title: 'Meiosis', result: false },
			{ title: 'Acalosis', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0007'),
		title: 'La información genética en las células se localiza en:',
		options: [
			{ title: 'La membrana', result: false },
			{ title: 'El citoplasma', result: false },
			{ title: 'El núcleo', result: true },
			{ title: 'Las células', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0008'),
		title: 'Los cromosomas están formados por:',
		options: [
			{ title: 'ARN', result: false },
			{ title: 'Proteínas', result: false },
			{ title: 'AFA', result: false },
			{ title: 'ADN', result: true },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0009'),
		title: '¿Qué banda sacó este disco en 1986?',
		image:
			'https://crock.com.ar/wp-content/uploads/2016/10/Patricio_Rey_Y_Sus_Redonditos_De_Ricota-Oktubre.jpg',
		options: [
			{ title: 'Los Redonditos de Ricota', result: true },
			{ title: 'Soda Stereo', result: false },
			{ title: 'Charly García', result: false },
			{ title: 'Sumo', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0010'),
		title: 'Qué banda sacó este disco en 1973 ',
		image:
			'https://static.posters.cz/image/750/marco-de-plastico-pink-floyd-dark-side-of-the-moon-i23364.jpg',
		options: [
			{ title: 'Queen', result: false },
			{ title: 'Pink Floyd ', result: true },
			{ title: 'The Beatles', result: false },
			{ title: 'The Rolling Stones', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0011'),
		title: 'Este álbum del 2010 es de la banda: ',
		image:
			'https://www.latercera.com/resizer/C8sTiHepMe4vbe80EklUbolRcS4=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/WWOU6GDWVRELDPUN3L2NMKSSW4.jpg',
		options: [
			{ title: 'Phoenix', result: false },
			{ title: 'U2', result: false },
			{ title: 'Tame Impala', result: true },
			{ title: 'Coldplay', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0012'),
		title: '¿Qué banda sacó este disco en 1965?',
		image:
			'https://townsquare.media/site/295/files/2013/11/Beatles-Rubber-Soul.jpg',
		options: [
			{ title: 'Pink Floyd', result: false },
			{ title: 'The beatles', result: true },
			{ title: 'Queen', result: false },
			{ title: 'Rolling stones', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0013'),
		title:
			'What is the record for red cards given in a single soccer game?',
		options: [
			{ title: '24', result: false },
			{ title: '12', result: false },
			{ title: '6', result: false },
			{ title: '36', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0014'),
		title:
			'Which two countries participated in the first international soccer match?',
		options: [
			{ title: 'Germany and France', result: false },
			{ title: 'Scotland and England', result: true },
			{ title: 'Germany and Scotland', result: false },
			{ title: 'France and England', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0015'),
		title: 'Who was the first player to score at five World Cup editions?',
		options: [
			{ title: 'Marta', result: true },
			{ title: 'Pelé', result: false },
			{ title: 'Ronaldo', result: false },
			{ title: 'Lothar Matthäus', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0016'),
		title: 'How old was the youngest professional soccer player?',
		options: [
			{ title: '12', result: false },
			{ title: '14', result: true },
			{ title: '18', result: false },
			{ title: '16', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0017'),
		title: '¿Quién fue el maestro sith del conde Dooku?',
		options: [
			{ title: 'darth maul', result: false },
			{ title: 'darth sidious', result: true },
			{ title: 'darth vader', result: false },
			{ title: 'darth tyranus', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0018'),
		title:
			'¿Qué personaje principal era escéptico respecto al poder de la Fuerza?',
		options: [
			{ title: 'Luke', result: false },
			{ title: 'C-3PO', result: false },
			{ title: 'R2-D2', result: false },
			{ title: 'Han Solo', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0019'),
		title: '¿Quién construyó a C-3PO?',
		options: [
			{ title: 'Los jawas', result: false },
			{ title: 'Anakin', result: true },
			{ title: 'Un ingeniero de la princesa Amidala', result: false },
			{ title: 'Chewbacca', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0020'),
		title:
			'¿Cómo se llama el planeta en que se retira Yoda tras la masacre de ‘La venganza de los Sith’?',
		options: [
			{ title: 'Bespin', result: false },
			{ title: 'Naboo', result: false },
			{ title: 'Dantooine', result: false },
			{ title: 'Dagobah', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0021'),
		title: '¿Quién es este actor?',
		image:
			'https://fundaciongabo.org/sites/default/files/imagenportada/2018-07/morgan-freeman-acoso-sexual-fraude.jpg',
		options: [
			{ title: 'Gerard Butler', result: false },
			{ title: 'Nick Nolte', result: false },
			{ title: 'Jesse Eisenberg', result: false },
			{ title: 'Morgan Freeman', result: true },
		],
		time: 5,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0022'),
		title: '¿Quién es este actor?',
		image:
			'https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/137826.jpg',
		options: [
			{ title: 'Paul Bettany', result: false },
			{ title: 'Cillian Murphy', result: false },
			{ title: 'Johnny Deep', result: true },
			{ title: 'Matt Damon', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0023'),
		title: '¿Quién es esta actriz?',
		image:
			'https://www.cinemascomics.com/wp-content/uploads/2019/12/viuda-negra-scarlett-johansson.jpg',
		options: [
			{ title: 'Scarlett Johansson', result: true },
			{ title: 'Florence Pugh', result: false },
			{ title: 'Rachel Weisz', result: false },
			{ title: 'Mackenzie Foy', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0024'),
		title: '¿Quién es este actor?',
		image: 'https://www.ellitoral.com/um/fotos/228579_fort.jpg',
		options: [
			{ title: 'Ricardo Darin', result: false },
			{ title: 'Peto Menahem', result: false },
			{ title: 'Ricardo Fort', result: true },
			{ title: 'Ramiro Blas', result: false },
		],
		time: 10,
		score: 5,
	},
];

module.exports = questions;
