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
	// {
	// 	category: 'Entertainment: Film',
	// 	title: 'What was the last Marx Brothers film to feature Zeppo?',
	// 	options: [
	// 		{ title: 'A Night at the Opera', result: false },
	// 		{ title: 'A Day at the Races', result: false },
	// 		{ title: 'Monkey Business', result: false },
	// 		{ title: 'Duck Soup', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title:
	// 		'In a standard set of playing cards, which is the only king without a moustache?',
	// 	options: [
	// 		{ title: 'Spades', result: false },
	// 		{ title: 'Diamonds', result: false },
	// 		{ title: 'Clubs', result: false },
	// 		{ title: 'Hearts', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'What is the main character of Metal Gear Solid 2?',
	// 	options: [
	// 		{ title: 'Solidus Snake', result: false },
	// 		{ title: 'Big Boss', result: false },
	// 		{ title: 'Venom Snake', result: false },
	// 		{ title: 'Raiden', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title:
	// 		'What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?',
	// 	options: [
	// 		{ title: 'Matthew', result: false },
	// 		{ title: 'Mark', result: false },
	// 		{ title: 'Max', result: false },
	// 		{ title: 'Mike', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title:
	// 		'Which one of these tanks was designed and operated by the United Kingdom?',
	// 	options: [
	// 		{ title: 'M4 Sherman', result: false },
	// 		{ title: 'Tiger H1', result: false },
	// 		{ title: 'T-34', result: false },
	// 		{ title: 'Tog II', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'What was the first living creature in space?',
	// 	options: [
	// 		{ title: 'Monkey', result: false },
	// 		{ title: 'Dog', result: false },
	// 		{ title: 'Mouse', result: false },
	// 		{ title: 'Fruit Flies ', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'What is the main ship used by Commander Shepard in the Mass Effect Franchise called?',
	// 	options: [
	// 		{ title: 'Osiris', result: false },
	// 		{ title: 'Infinity', result: false },
	// 		{ title: 'Endeavour', result: false },
	// 		{ title: 'Normandy', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title:
	// 		'The Battle of the Somme in World War I took place in which country?',
	// 	options: [
	// 		{ title: 'Germany', result: false },
	// 		{ title: 'Italy', result: false },
	// 		{ title: 'Austria', result: false },
	// 		{ title: 'France', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In &quot;Sonic the Hedgehog 2&quot; for the Sega Genesis, what do you input in the sound test screen to access the secret level select?',
	// 	options: [
	// 		{
	// 			title:
	// 				'The first release date of &quot;Sonic the Hedgehog&quot;',
	// 			result: false,
	// 		},
	// 		{ title: 'The date Sonic Team was founded', result: false },
	// 		{
	// 			title:
	// 				'The first release date of &quot;Sonic the Hedgehog 2&quot;',
	// 			result: false,
	// 		},
	// 		{ title: 'The Lead Programmer&#039;s birthday', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Which of the following chemicals are found in eggplant seeds?',
	// 	options: [
	// 		{ title: 'Mescaline', result: false },
	// 		{ title: 'Cyanide', result: false },
	// 		{ title: 'Psilocybin', result: false },
	// 		{ title: 'Nicotine', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Animals',
	// 	title: 'What is the scientific name for the &quot;Polar Bear&quot;?',
	// 	options: [
	// 		{ title: 'Polar Bear', result: false },
	// 		{ title: 'Ursus Spelaeus', result: false },
	// 		{ title: 'Ursus Arctos', result: false },
	// 		{ title: 'Ursus Maritimus', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?',
	// 	options: [
	// 		{ title: 'Gradius', result: false },
	// 		{ title: 'Contra', result: false },
	// 		{ title: 'Castlevania: Symphony of the Night', result: false },
	// 		{ title: 'Policenauts', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In the beta version of the 1986 game &quot;The Legend of Zelda&quot;, players have the choice between a sword and what other item?',
	// 	options: [
	// 		{ title: 'Spear', result: false },
	// 		{ title: 'Slingshot', result: false },
	// 		{ title: 'Crossbow', result: false },
	// 		{ title: 'Boomerang ', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Vehicles',
	// 	title: 'Which one of these chassis codes are used by BMW 3-series?',
	// 	options: [
	// 		{ title: 'E39', result: false },
	// 		{ title: 'E85', result: false },
	// 		{ title: 'F10', result: false },
	// 		{ title: 'E46', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Television',
	// 	title: 'Who is the main character in the show &quot;Burn Notice&quot;?',
	// 	options: [
	// 		{ title: 'Sam Axe', result: false },
	// 		{ title: 'Fiona Glenanne', result: false },
	// 		{ title: 'Madeline Westen', result: false },
	// 		{ title: 'Michael Westen', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'Which of these is a type of stretch/deep tendon reflex?',
	// 	options: [
	// 		{ title: 'Gag reflex', result: false },
	// 		{ title: 'Pupillary light reflex', result: false },
	// 		{ title: 'Scratch reflex', result: false },
	// 		{ title: 'Ankle jerk reflex', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'The asteroid belt is located between which two planets?',
	// 	options: [
	// 		{ title: 'Jupiter and Saturn', result: false },
	// 		{ title: 'Mercury and Venus', result: false },
	// 		{ title: 'Earth and Mars', result: false },
	// 		{ title: 'Mars and Jupiter', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'The Hunua Ranges is located in...',
	// 	options: [
	// 		{ title: 'Nepal', result: false },
	// 		{ title: 'China', result: false },
	// 		{ title: 'Mexico', result: false },
	// 		{ title: 'New Zealand', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Books',
	// 	title:
	// 		'Which American author was also a budding travel writer and wrote of his adventures with his dog Charley?',
	// 	options: [
	// 		{ title: 'F. Scott Fitzgerald', result: false },
	// 		{ title: 'Ernest Hemingway', result: false },
	// 		{ title: 'William Faulkner', result: false },
	// 		{ title: 'John Steinbeck', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Mythology',
	// 	title: 'Which of the following is NOT a god in Norse Mythology.',
	// 	options: [
	// 		{ title: 'Loki', result: false },
	// 		{ title: 'Tyr', result: false },
	// 		{ title: 'Snotra', result: false },
	// 		{ title: 'Jens', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In the first Left 4 Dead, you can play as either of these four characters.',
	// 	options: [
	// 		{ title: 'Bender, Andrew, Allison, and Brian', result: false },
	// 		{ title: 'Coach, Ellis, Nick, and Rochelle', result: false },
	// 		{ title: 'Harry, Ron, Hermione and Dumbledore', result: false },
	// 		{ title: 'Francis, Bill, Zoey, and Louis', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Celebrities',
	// 	title: 'Aubrey Graham is better known as',
	// 	options: [
	// 		{ title: 'Travis Scott', result: false },
	// 		{ title: 'Lil Wayne', result: false },
	// 		{ title: '2 Chainz', result: false },
	// 		{ title: 'Drake', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'According to Overwatch&#039;s lore, who was once a member of the Deadlock Gang?',
	// 	options: [
	// 		{ title: 'Roadhog', result: false },
	// 		{ title: 'Soldier 76', result: false },
	// 		{ title: 'Junkrat', result: false },
	// 		{ title: 'McCree', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In Terraria, which of these items is NOT crafted at a Mythril Anvil?',
	// 	options: [
	// 		{ title: 'Venom Staff', result: false },
	// 		{ title: 'Sky Fracture', result: false },
	// 		{ title: 'Orichalcum Tools', result: false },
	// 		{ title: 'Ankh Charm', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science: Gadgets',
	// 	title: 'When was the DVD invented?',
	// 	options: [
	// 		{ title: '2000', result: false },
	// 		{ title: '1990', result: false },
	// 		{ title: '1980', result: false },
	// 		{ title: '1995', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'Which game in the &quot;Monster Hunter&quot; series introduced the &quot;Insect Glaive&quot; weapon?',
	// 	options: [
	// 		{ title: 'Monster Hunter Freedom', result: false },
	// 		{ title: 'Monster Hunter Stories', result: false },
	// 		{ title: 'Monster Hunter 2', result: false },
	// 		{ title: 'Monster Hunter 4', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Japanese Anime & Manga',
	// 	title: 'In &quot;To Love-Ru&quot;, Ren and Run are from what planet?',
	// 	options: [
	// 		{ title: 'Deviluke', result: false },
	// 		{ title: 'Mistletoe', result: false },
	// 		{ title: 'Okiwana', result: false },
	// 		{ title: 'Memorze', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Music',
	// 	title:
	// 		'&quot;Make You Feel My Love&quot; was originally written and performed by which singer-songwriter?',
	// 	options: [
	// 		{ title: 'Elvis', result: false },
	// 		{ title: 'Adele', result: false },
	// 		{ title: 'Billy Joel', result: false },
	// 		{ title: 'Bob Dylan', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Who founded the Khan Academy?',
	// 	options: [
	// 		{ title: 'Ben Khan', result: false },
	// 		{ title: 'Kitt Khan', result: false },
	// 		{ title: 'Adel Khan', result: false },
	// 		{ title: 'Sal Khan', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Japanese Anime & Manga',
	// 	title: 'In Haikyuu!!, who is not a member of Karasuno VBC?',
	// 	options: [
	// 		{ title: 'Tadashi Yamaguchi', result: false },
	// 		{ title: 'Hisashi Kinoshita', result: false },
	// 		{ title: 'Kazuhito Narita', result: false },
	// 		{ title: 'Shigeru Yahaba', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title: 'How old was Adolf Hitler when he died?',
	// 	options: [
	// 		{ title: '43', result: false },
	// 		{ title: '65', result: false },
	// 		{ title: '47', result: false },
	// 		{ title: '56', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Books',
	// 	title:
	// 		'In the Magic: The Gathering universe,  the Antiquities, Ice Age, and Alliances expansions take place on which continent?',
	// 	options: [
	// 		{ title: 'Aerona', result: false },
	// 		{ title: 'Shiv', result: false },
	// 		{ title: 'Jamuraa', result: false },
	// 		{ title: 'Terisiare', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Which country drives on the left side of the road?',
	// 	options: [
	// 		{ title: 'Germany', result: false },
	// 		{ title: 'Russia', result: false },
	// 		{ title: 'China', result: false },
	// 		{ title: 'Japan', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'Which car is NOT featured in &quot;Need for Speed: Hot Pursuit 2&quot;?',
	// 	options: [
	// 		{ title: 'Ford Crown Victoria', result: false },
	// 		{ title: 'BMW Z8', result: false },
	// 		{ title: 'McLaren F1', result: false },
	// 		{ title: 'Toyota MR2', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Animals',
	// 	title: 'Which of these is a colony of polyps and not a jellyfish?',
	// 	options: [
	// 		{ title: 'Sea Wasp', result: false },
	// 		{ title: 'Irukandji', result: false },
	// 		{ title: 'Sea Nettle', result: false },
	// 		{ title: 'Portuguese Man-of-War', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Mythology',
	// 	title:
	// 		'According to Japanese folklore, what is the favorite food of the Kappa.',
	// 	options: [
	// 		{ title: 'Kabocha', result: false },
	// 		{ title: 'Nasu', result: false },
	// 		{ title: 'Soba', result: false },
	// 		{ title: 'Cucumbers', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Music',
	// 	title: 'Who was &quot;Kung Fu Fighting&quot; in 1974?',
	// 	options: [
	// 		{ title: 'The Bee Gees', result: false },
	// 		{ title: 'Heatwave', result: false },
	// 		{ title: 'Kool &amp; the Gang', result: false },
	// 		{ title: 'Carl Douglas', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Art',
	// 	title: 'Which painting was not made by Vincent Van Gogh?',
	// 	options: [
	// 		{ title: 'Caf&eacute; Terrace at Night', result: false },
	// 		{ title: 'Bedroom In Arles', result: false },
	// 		{ title: 'Starry Night', result: false },
	// 		{ title: 'The Ninth Wave', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In Counter-Strike: Global Offensive, what&#039;s the rarity of discontinued skins called?',
	// 	options: [
	// 		{ title: 'Discontinued', result: false },
	// 		{ title: 'Diminshed', result: false },
	// 		{ title: 'Limited', result: false },
	// 		{ title: 'Contraband', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Books',
	// 	title:
	// 		'In Terry Pratchett&#039;s Discworld novel &#039;Wyrd Sisters&#039;, which of these are not one of the three main witches?',
	// 	options: [
	// 		{ title: 'Granny Weatherwax', result: false },
	// 		{ title: 'Nanny Ogg', result: false },
	// 		{ title: 'Magrat Garlick', result: false },
	// 		{ title: 'Winny Hathersham', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'In 2004, which person(s) created &quot;Roblox&quot;?',
	// 	options: [
	// 		{ title: 'Erik Cassel', result: false },
	// 		{ title: 'Jonas Alto and Sarah Smith', result: false },
	// 		{ title: 'James Kolein', result: false },
	// 		{ title: 'David Baszucki and Erik Cassel', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science: Computers',
	// 	title: 'The acronym &quot;RIP&quot; stands for which of these?',
	// 	options: [
	// 		{ title: 'Runtime Instance Processes', result: false },
	// 		{ title: 'Regular Interval Processes', result: false },
	// 		{ title: 'Routine Inspection Protocol', result: false },
	// 		{ title: 'Routing Information Protocol', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Politics',
	// 	title:
	// 		'What year did the effort to deploy the Common Core State Standards (CCSS) in the US begin?',
	// 	options: [
	// 		{ title: '2012', result: false },
	// 		{ title: '2006', result: false },
	// 		{ title: '1997', result: false },
	// 		{ title: '2009', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'In the 2014 film &quot;Birdman&quot;, what is the primary instrument in the score?',
	// 	options: [
	// 		{ title: 'Saxophone', result: false },
	// 		{ title: 'Violin', result: false },
	// 		{ title: 'Actual Live Birds Singing', result: false },
	// 		{ title: 'Drums', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Celebrities',
	// 	title:
	// 		'In 2014, this new top 100 rapper who featured in &quot;Computers&quot; and &quot;Body Dance&quot; was arrested in a NYPD sting for murder.',
	// 	options: [
	// 		{ title: 'DJ Snake', result: false },
	// 		{ title: 'Swae Lee', result: false },
	// 		{ title: 'Young Thug', result: false },
	// 		{ title: 'Bobby Shmurda', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'Which of these choices is not one of the phases of mitosis?',
	// 	options: [
	// 		{ title: 'Metaphase', result: false },
	// 		{ title: 'Anaphase', result: false },
	// 		{ title: 'Telophase', result: false },
	// 		{ title: 'Diplophase', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'Which of these Japanese islands is the largest by area?',
	// 	options: [
	// 		{ title: 'Iki', result: false },
	// 		{ title: 'Odaiba', result: false },
	// 		{ title: 'Okinawa', result: false },
	// 		{ title: 'Shikoku', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In Night In The Woods, what is Mae Borowski mother&#039;s name?',
	// 	options: [
	// 		{ title: 'Jenny', result: false },
	// 		{ title: 'Margaret', result: false },
	// 		{ title: 'Kate', result: false },
	// 		{ title: 'Candy', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Which country has the union jack in its flag?',
	// 	options: [
	// 		{ title: 'South Africa', result: false },
	// 		{ title: 'Canada', result: false },
	// 		{ title: 'Hong Kong', result: false },
	// 		{ title: 'New Zealand', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'How many obsidian blocks are required to build a nether portal in Minecraft?',
	// 	options: [
	// 		{ title: '14', result: false },
	// 		{ title: '13', result: false },
	// 		{ title: '16', result: false },
	// 		{ title: '10', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Television',
	// 	title:
	// 		'In the TV show &#039;M*A*S*H&#039;, what was the nickname of Corporal Walter O&#039;Reilly?',
	// 	options: [
	// 		{ title: 'Hawkeye', result: false },
	// 		{ title: 'Hot Lips', result: false },
	// 		{ title: 'Trapper', result: false },
	// 		{ title: 'Radar', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Sports',
	// 	title:
	// 		'Which English football club has the nickname &#039;The Foxes&#039;?',
	// 	options: [
	// 		{ title: 'Northampton Town', result: false },
	// 		{ title: 'Bradford City', result: false },
	// 		{ title: 'West Bromwich Albion', result: false },
	// 		{ title: 'Leicester City', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'In the 1984 movie &quot;The Terminator&quot;, what model number is the Terminator portrayed by Arnold Schwarzenegger?',
	// 	options: [
	// 		{ title: 'I-950', result: false },
	// 		{ title: 'T-888', result: false },
	// 		{ title: 'T-1000', result: false },
	// 		{ title: 'T-800', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title:
	// 		'On the Beaufort Scale of wind force, what wind name is given to number 8?',
	// 	options: [
	// 		{ title: 'Storm', result: false },
	// 		{ title: 'Hurricane', result: false },
	// 		{ title: 'Breeze', result: false },
	// 		{ title: 'Gale', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Books',
	// 	title: 'What is the fourth book of the Old Testament?',
	// 	options: [
	// 		{ title: 'Genesis', result: false },
	// 		{ title: 'Exodus', result: false },
	// 		{ title: 'Leviticus', result: false },
	// 		{ title: 'Numbers', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'Who made Garry&#039;s Mod?',
	// 	options: [
	// 		{ title: 'Randy Newman', result: false },
	// 		{ title: 'Facepunch Studios', result: false },
	// 		{ title: 'Gabe Newell', result: false },
	// 		{ title: 'Garry Newman', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'What is the molecular formula of Glucose?',
	// 	options: [
	// 		{ title: 'C2H4O2', result: false },
	// 		{ title: 'K+', result: false },
	// 		{ title: 'CH4', result: false },
	// 		{ title: 'C6H12O6', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title:
	// 		'Which of the following ancient peoples was NOT classified as Hellenic (Greek)?',
	// 	options: [
	// 		{ title: 'Dorians', result: false },
	// 		{ title: 'Achaeans', result: false },
	// 		{ title: 'Ionians', result: false },
	// 		{ title: 'Illyrians', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Japanese Anime & Manga',
	// 	title:
	// 		'In the anime Initial D, how does Takumi Fujiwara describe a drift?',
	// 	options: [
	// 		{
	// 			title:
	// 				'&#039;. . . the wheels lose traction, making the car slide sideways&#039;',
	// 			result: false,
	// 		},
	// 		{
	// 			title:
	// 				'&#039;. . . the car oversteers through a curve, causing it to turn faster&#039;',
	// 			result: false,
	// 		},
	// 		{ title: '&#039;. . . you turn a lot&#039;', result: false },
	// 		{
	// 			title:
	// 				'&#039;. . . the front tires slide so the car won&#039;t face the inside&#039;',
	// 			result: true,
	// 		},
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Which one of the following rhythm games was made by Harmonix?',
	// 	options: [
	// 		{ title: 'Meat Beat Mania', result: false },
	// 		{ title: 'Guitar Hero Live', result: false },
	// 		{ title: 'Dance Dance Revolution', result: false },
	// 		{ title: 'Rock Band', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'Why was the character Trevor Philips discharged from the Air Force?',
	// 	options: [
	// 		{ title: 'Injuries', result: false },
	// 		{ title: 'Disease', result: false },
	// 		{ title: 'Danger to Others', result: false },
	// 		{ title: 'Mental Health Issues', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Music',
	// 	title:
	// 		'Madonna&#039;s song &quot;Hung Up&quot; includes a piece from which popular 70s song?',
	// 	options: [
	// 		{ title: 'Staying Alive', result: false },
	// 		{ title: 'Night Fever', result: false },
	// 		{ title: 'The Chain', result: false },
	// 		{
	// 			title: 'Gimmie! Gimmie! Gimme! (A Man After Midnight)',
	// 			result: true,
	// 		},
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science & Nature',
	// 	title: 'If you planted the seeds of Quercus robur what would grow?',
	// 	options: [
	// 		{ title: 'Flowers', result: false },
	// 		{ title: 'Vegtables', result: false },
	// 		{ title: 'Grains', result: false },
	// 		{ title: 'Trees', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'Who is the main character of &quot;Metal Gear Solid 3&quot;?',
	// 	options: [
	// 		{ title: 'Solid Snake', result: false },
	// 		{ title: 'Liquid Snake', result: false },
	// 		{ title: 'Venom Snake', result: false },
	// 		{ title: 'Naked Snake', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Animals',
	// 	title: 'What are rhino&#039;s horn made of?',
	// 	options: [
	// 		{ title: 'Bone', result: false },
	// 		{ title: 'Ivory', result: false },
	// 		{ title: 'Skin', result: false },
	// 		{ title: 'Keratin', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Art',
	// 	title: 'What year was the Mona Lisa finished?',
	// 	options: [
	// 		{ title: '1487', result: false },
	// 		{ title: '1523', result: false },
	// 		{ title: '1511', result: false },
	// 		{ title: '1504', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Cartoon & Animations',
	// 	title:
	// 		'Which of the following films was Don Bluth both the writer, director, and producer for?',
	// 	options: [
	// 		{ title: 'Titan A.E.', result: false },
	// 		{ title: 'Anastasia', result: false },
	// 		{ title: 'The Land Before Time', result: false },
	// 		{ title: 'All Dogs Go To Heaven', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Music',
	// 	title: 'Which brass instrument has the lowest pitch in an orchestra?',
	// 	options: [
	// 		{ title: 'Trumpet', result: false },
	// 		{ title: 'Saxophone', result: false },
	// 		{ title: 'Trombone', result: false },
	// 		{ title: 'Tuba', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'How many countries does Spain have a land border with?',
	// 	options: [
	// 		{ title: '2', result: false },
	// 		{ title: '3', result: false },
	// 		{ title: '4', result: false },
	// 		{ title: '5', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'Who is the creator of the Super Smash Bros. Series?',
	// 	options: [
	// 		{ title: 'Reggie Fils-Aim&eacute;', result: false },
	// 		{ title: 'Bill Trinen', result: false },
	// 		{ title: 'Hideo Kojima', result: false },
	// 		{ title: 'Masahiro Sakurai', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Music',
	// 	title:
	// 		'What is the English title of the vaporwave track &quot;リサフランク420 / 現代のコンピュー&quot; by Macintosh Plus (Vektroid)?',
	// 	options: [
	// 		{ title: 'Smoke Weed 420 / Everyday', result: false },
	// 		{ title: 'Make Your Move 420 / My Mind', result: false },
	// 		{
	// 			title: 'It&#039;s All In Your Head 420 / Understand',
	// 			result: false,
	// 		},
	// 		{ title: 'Lisa Frank 420 / Modern Computing', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'Which company did Bethesda purchase the Fallout Series from?',
	// 	options: [
	// 		{ title: 'Capcom', result: false },
	// 		{ title: 'Blizzard Entertainment', result: false },
	// 		{ title: 'Nintendo', result: false },
	// 		{ title: 'Interplay Entertainment ', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Japanese Anime & Manga',
	// 	title:
	// 		'In the anime Assassination Classroom what is the class that Korosensei teaches?',
	// 	options: [
	// 		{ title: 'Class 3-A', result: false },
	// 		{ title: 'Class 3-B', result: false },
	// 		{ title: 'Class 3-D', result: false },
	// 		{ title: 'Class 3-E', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'What animal is on Link&#039;s pajamas in The Legend of Zelda: The Wind Waker?',
	// 	options: [
	// 		{ title: 'Lobster', result: false },
	// 		{ title: 'Salmon', result: false },
	// 		{ title: 'Swordfish', result: false },
	// 		{ title: 'Crawfish', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'In WarioWare: Smooth Moves, which one of these is NOT a Form?',
	// 	options: [
	// 		{ title: 'The Discard', result: false },
	// 		{ title: 'The Elephant', result: false },
	// 		{ title: 'The Mohawk', result: false },
	// 		{ title: 'The Hotshot', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Vehicles',
	// 	title: 'What engine is in the Lexus SC400?',
	// 	options: [
	// 		{ title: '2JZ-GTE', result: false },
	// 		{ title: '7M-GTE', result: false },
	// 		{ title: '5M-GE', result: false },
	// 		{ title: '1UZ-FE', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Japanese Anime & Manga',
	// 	title:
	// 		'In the &quot;Toaru Majutsu no Index&quot; anime, Touma Kamijou is a level 0 esper that has the ability to do what?',
	// 	options: [
	// 		{ title: 'Teleport', result: false },
	// 		{ title: 'Make telepathic communications', result: false },
	// 		{ title: 'Create electricity from his own body', result: false },
	// 		{ title: 'Dispell any esper or magical powers', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title:
	// 		'According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;',
	// 	options: [
	// 		{ title: 'Answer', result: false },
	// 		{ title: 'Cause', result: false },
	// 		{ title: 'Source', result: false },
	// 		{ title: 'Truth', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'Darth Vader&#039;s famous reveal to Luke is iconic. But which of these is the right one?',
	// 	options: [
	// 		{ title: '&quot;Luke, I am your father.&quot;', result: false },
	// 		{
	// 			title: '&quot;You&#039;re wrong. I am your father.&quot;',
	// 			result: false,
	// 		},
	// 		{
	// 			title: '&quot;The truth is that I am your father.&quot;',
	// 			result: false,
	// 		},
	// 		{ title: '&quot;No. I am your father.&quot;', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'What was the name of the actor who played Leatherface in the 1974 horror film, The Texas Chainsaw Massacre?',
	// 	options: [
	// 		{ title: 'Edwin Neal', result: false },
	// 		{ title: 'John Dugan', result: false },
	// 		{ title: 'Joe Bill Hogan', result: false },
	// 		{ title: 'Gunnar Hansen', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'What type of cheese, loved by Wallace and Gromit, had it&#039;s sale prices rise after their successful short films?',
	// 	options: [
	// 		{ title: 'Cheddar', result: false },
	// 		{ title: 'Moon Cheese', result: false },
	// 		{ title: 'Edam', result: false },
	// 		{ title: 'Wensleydale', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In the game &quot;Hearthstone&quot;, what is the best rank possible?',
	// 	options: [
	// 		{ title: 'Rank 1 Elite', result: false },
	// 		{ title: 'Rank 1 Master', result: false },
	// 		{ title: 'Rank 1 Supreme', result: false },
	// 		{ title: 'Rank 1 Legend', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title:
	// 		'In what year did Kentucky become the 15th state to join the union?',
	// 	options: [
	// 		{ title: '1782', result: false },
	// 		{ title: '1798', result: false },
	// 		{ title: '1788', result: false },
	// 		{ title: '1792', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Board Games',
	// 	title: 'Which of the following tabletop games is the oldest?',
	// 	options: [
	// 		{ title: 'Chess', result: false },
	// 		{ title: 'Mahjong', result: false },
	// 		{ title: 'Shogi', result: false },
	// 		{ title: 'Go', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'Toby Fox&#039;s &quot;Megalovania&quot; was first used where?',
	// 	options: [
	// 		{ title: 'Homestuck: [S] Wake', result: false },
	// 		{ title: 'Undertale', result: false },
	// 		{ title: 'Mother: Cognitive Dissonance', result: false },
	// 		{
	// 			title: 'Radiation&#039;s Earthbound Halloween Hack',
	// 			result: true,
	// 		},
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'What was the first &quot;Call Of Duty: Zombies&quot; map to be directed by Jason Blundell?',
	// 	options: [
	// 		{ title: 'Buried', result: false },
	// 		{ title: 'Origins', result: false },
	// 		{ title: 'Moon', result: false },
	// 		{ title: 'Mob Of The Dead', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In the &quot;Call Of Duty: Zombies&quot; map &quot;Origins&quot;, how many numbered power generators are there?',
	// 	options: [
	// 		{ title: '8', result: false },
	// 		{ title: '5', result: false },
	// 		{ title: '3', result: false },
	// 		{ title: '6', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title: 'What was the original release date of Grand Theft Auto V?',
	// 	options: [
	// 		{ title: 'August 17, 2013', result: false },
	// 		{ title: 'April 14, 2015', result: false },
	// 		{ title: 'November 18, 2014', result: false },
	// 		{ title: 'September 17, 2013', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'General Knowledge',
	// 	title: 'Chartreuse is a color between yellow and what?',
	// 	options: [
	// 		{ title: 'Red', result: false },
	// 		{ title: 'Black', result: false },
	// 		{ title: 'Purple', result: false },
	// 		{ title: 'Green', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'History',
	// 	title: 'When did construction of the Suez Canal finish?',
	// 	options: [
	// 		{ title: '1859', result: false },
	// 		{ title: '1860', result: false },
	// 		{ title: '1850', result: false },
	// 		{ title: '1869', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'What is the official national language of Pakistan?',
	// 	options: [
	// 		{ title: 'Indian', result: false },
	// 		{ title: 'Punjabi', result: false },
	// 		{ title: 'Pashto', result: false },
	// 		{ title: 'Urdu', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In the Half-Life universe, the Black Mesa Research Facility is located in which US state?',
	// 	options: [
	// 		{ title: 'Nevada', result: false },
	// 		{ title: 'Arizona', result: false },
	// 		{ title: 'Wyoming', result: false },
	// 		{ title: 'New Mexico', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'What national museum will you find in Cooperstown, New York?',
	// 	options: [
	// 		{ title: 'Metropolitan Museum of Art', result: false },
	// 		{ title: 'National Toy Hall of Fame', result: false },
	// 		{ title: 'Museum of Modern Art', result: false },
	// 		{ title: 'National Baseball Hall of Fame', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In Disney&#039;s &quot;Toontown Online&quot;, which of these species wasn&#039;t available as a Toon?',
	// 	options: [
	// 		{ title: 'Monkey', result: false },
	// 		{ title: 'Bear', result: false },
	// 		{ title: 'Pig', result: false },
	// 		{ title: 'Cow', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'Which of these Japanese islands is the largest by area?',
	// 	options: [
	// 		{ title: 'Iki', result: false },
	// 		{ title: 'Odaiba', result: false },
	// 		{ title: 'Okinawa', result: false },
	// 		{ title: 'Shikoku', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'In Night In The Woods, what is Mae Borowski mother&#039;s name?',
	// 	options: [
	// 		{ title: 'Jenny', result: false },
	// 		{ title: 'Margaret', result: false },
	// 		{ title: 'Kate', result: false },
	// 		{ title: 'Candy', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Science: Mathematics',
	// 	title:
	// 		'Which of the following mathematicians made major contributions to game theory?',
	// 	options: [
	// 		{ title: 'Carl Friedrich Gauss', result: false },
	// 		{ title: 'Leonhard Euler', result: false },
	// 		{ title: 'Stefan Banach', result: false },
	// 		{ title: 'John Von Neumann', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Geography',
	// 	title: 'What city is the Terracotta Army located in?',
	// 	options: [
	// 		{ title: 'Beijing', result: false },
	// 		{ title: 'Shanghai', result: false },
	// 		{ title: 'Hong Kong', result: false },
	// 		{ title: 'Xi&#039;an', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Video Games',
	// 	title:
	// 		'What Ultimate does Makoto Naegi, protagonist of Danganronpa: Trigger Happy Havoc, have? ',
	// 	options: [
	// 		{ title: 'Ultimate Unlucky Student', result: false },
	// 		{ title: 'Ultimate Detective', result: false },
	// 		{ title: 'Ultimate Runner', result: false },
	// 		{ title: 'Ultimate Lucky Student', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
	// {
	// 	category: 'Entertainment: Film',
	// 	title:
	// 		'Who plays Jack Burton in the movie &quot;Big Trouble in Little China?&quot;',
	// 	options: [
	// 		{ title: 'Patrick Swayze', result: false },
	// 		{ title: 'John Cusack', result: false },
	// 		{ title: 'Harrison Ford', result: false },
	// 		{ title: 'Kurt Russell', result: true },
	// 	],
	// 	time: 10,
	// 	score: 5,
	// },
];

module.exports = questions;
