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
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0001'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0001'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0002'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0003'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0004'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0001'),
		title: 'Fisica: Fuerza',
		description:
			'Adentrate en el maravilloso mundo de la fisica. Solo tu puedes hacerlo',
		image:
			'https://thefactfactor.com/wp-content/uploads/2019/10/Force-01.png',
		likes: 2,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0002'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0005'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0006'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0007'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0008'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0002'),
		title: 'Adivina la banda',
		description: 'Adivina la banda a partir de la tapa del disco',
		image:
			'https://www.educaciontrespuntocero.com/wp-content/uploads/2019/10/music.jpg',
		likes: 8,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0003'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0009'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0010'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0011'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0012'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0000'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0003'),
		title: 'Soccer Trivia!',
		description:
			'Are you the best soccer fan? Then this trivia is for you!',
		image: 'https://i.ytimg.com/vi/RSiua8GslHA/maxresdefault.jpg',
		likes: 1,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0004'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0013'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0014'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0015'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0016'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0004'),
		title: 'Star Wars Trivia',
		description:
			'Demostrale a tus amigos que eres el más fanático de Star Wars!',
		image:
			'https://www.3dnatives.com/es/wp-content/uploads/sites/4/article_starwars.jpg',
		likes: 52,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0005'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0017'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0018'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0019'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0020'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0001'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0005'),
		title: '¿Quién es el actor?',
		description: '¿Eres un cinéfilo? Demuéstralo!',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/3/37/A_Traditional_Wooden_Slate_Clapperboard.jpg',
		likes: 25,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0005'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0021'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0022'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0023'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0024'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0006'),
		title: 'Desafío químico',
		description: '¿Eres un experto en química?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0002'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0025'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0026'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0027'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0028'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0007'),
		title: 'El mundo de segun Javascript',
		description: '¿Que tanto conoces de JS?',
		image:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0007'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0029'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0030'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0031'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0032'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0008'),
		title: '¿Cómo se llama la obra?',
		description:
			'Acierta el nombre de la pintura y consigue el máximo puntaje!',
		image: 'https://obxartstudio.com/wp-content/uploads/2016/10/Art.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0008'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0033'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0034'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0035'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0036'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0009'),
		title: 'Linux Evaluation',
		description: '¿How much do you know about Linux?',
		image:
			'https://i.pinimg.com/originals/95/e8/b6/95e8b6ece922616207a98d213c4ebfad.jpg',
		likes: 420,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0007'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0037'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0038'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0039'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0040'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
		time: 90,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0010'),
		title: 'El maravilloso mundo del CSS',
		description: '¿Eres un valiente guerrero del css? Demuestralo',
		image: 'https://programacion.net/files/article/20160902010934_CSS3.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0007'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0041'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0042'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0043'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0044'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0011'),
		title: "World's Hardest Science Quiz You'll Ever Take!",
		description: 'Can you overcome this challenge?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0002'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0045'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0046'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0047'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0048'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	}, //abajo yo franf
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0012'),
		title: 'Deportes varios',
		description:
			'¿Sos un experto en deportes? Si tu respuesta es sí, demostralo!',
		image:
			'https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc=',
		likes: 86,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0004'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0049'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0050'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0051'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0052'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0004'),
	},

	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0013'),
		title: 'Demuestra tus conocimientos sobre Harry Potter',
		description: '¿Eres un verdadero Potterhead?',
		image: 'https://i.ytimg.com/vi/oZxjKRmONEA/maxresdefault.jpg',
		likes: 77,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0005'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0053'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0054'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0055'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0056'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0014'),
		title: 'Volver al futuro',
		description: '¿Cuanto sabes sobre volver al futuro?',
		image:
			'https://updatemexico.com/wp-content/uploads/2020/05/back-to-the-future-iii-header.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0005'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0057'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0058'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0059'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0060'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0015'),
		title: 'Frases de Kvothe',
		description: '¿Puedes decir cual es la frase correcta?',
		image: 'https://pbs.twimg.com/media/CiGXjHFUgAAdFA4.jpg',
		likes: 97,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0006'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0061'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0062'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0063'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0064'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0016'),
		title: 'Algoritmos',
		description: 'Desafios matematicos',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0001'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0065'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0066'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0067'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0068'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		//OCUPADO
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0017'),
		title: 'Historia general',
		description: 'Preguntas random sobre historia general. Desafiate!',
		image:
			'https://newmedia.ufm.edu/wp-content/uploads/2018/07/%C2%BFCo%CC%81mo-hacemos-Historia.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0009'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0069'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0070'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0071'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0072'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		// mío :D
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0018'),
		title: 'Adivina la capital',
		description:
			'¿Eres un experto en capital del mundo? Este quiz es para ti',
		image:
			'https://www.caracteristicas.co/wp-content/uploads/2017/07/geografia-1-e1571191548230.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0010'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0073'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0074'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0075'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0076'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0019'),
		title: 'La matematica y sus variables',
		description: '¿Que tanto conoces de matematica? 🤯',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0001'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0077'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0078'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0079'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0080'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		// mío xD
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0020'),
		title: 'Mix de preguntas!',
		description:
			'Este quiz es una recolección de las preguntas más insólitas jamás escritas, ¿estás dispuesto a completarlo?',
		image:
			'https://justfreewpthemes.com/wp-content/uploads/2019/06/WordPress-Quiz-plugin.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0012'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0081'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0082'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0083'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0084'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0006'),
	},
	{
		// mine
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0021'),
		title: 'Provincias argentinas',
		description:
			'¿Sabés las capitales de las provincias de Argentina? Esta es tu oportunidad',
		image:
			'https://ichef.bbci.co.uk/news/640/cpsprodpb/A1F2/production/_115185414_1-1.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0010'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0085'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0086'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0087'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0088'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0022'),
		title: '¿Cuanto sabes de musica?',
		description:
			'Atrevete a responder preguntas que deberias saber si realmente sabes de musica',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.8867924528301887,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1554721326/bdvpqbs1mdg4zo1368sp.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0003'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0089'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0090'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0091'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0092'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0023'),
		title: 'La mejor epoca de la musca',
		description: "¿Que tanto sabes de los 80' y 90'?",
		image:
			'https://images-na.ssl-images-amazon.com/images/I/91IHBdxcdnL.png',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0003'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0093'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0094'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0095'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0096'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0024'),
		title: 'Basquet',
		description: '¿Que tanto amas este deporte?',
		image: 'https://static3.a24.com/images/2019/8/20/rypjJy9EB.jpeg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0004'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0097'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0098'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0099'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0100'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0025'),
		title: 'El mundo del arte',
		description: '¿Que tanto sabes de arte?',
		image:
			'https://aws.admagazine.com/prod/designs/v1/assets/1200x628/69052.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0008'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0101'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0102'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0103'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0104'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0026'),
		title: 'Me gusta el arte...',
		description: 'Demuestranos lo que sabes',
		image: 'https://media.metrolatam.com/2018/01/24/elgrito-600x400.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0008'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0105'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0106'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0107'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0108'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0027'),
		title: 'El mundo segun quizmeApp',
		description: 'Si sabes de historia demuestralo!',
		image:
			'https://www.ui1.es/sites/default/files/blog/images/estudiar-historia-geografia_1.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0009'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0109'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0110'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0111'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0112'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0028'),
		title: 'El mundo en una historia',
		description: 'Demuestralo',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/a2bbd257-386f-4d52-8766-be89fe8be46a/c4710221-53da-4be5-be2f-5f22e66db7ed.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0009'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0113'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0114'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0115'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0116'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0029'),
		title: '¿Que tanto sabes del mundo?',
		description: 'Demuestranos en este quiz de geografia',
		image:
			'https://www.caracteristicas.co/wp-content/uploads/2017/05/historia-e1568077367159.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0010'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0117'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0118'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0119'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0120'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0030'),
		title: 'Las ciencias de la naturaleza',
		description: 'Demuestra lo que sabes en esta ciencia',
		image:
			'https://sites.google.com/site/institucionciudadibague/_/rsrc/1529547093500/contenidos-de-aprendizaje/ciencias-naturales/Naturales.png',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0011'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0121'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0122'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0123'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0124'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0031'),
		title: 'El mundo de las ciencias naturales',
		description: 'Solo para los aficionados a las ciencias naturales',
		image:
			'https://conceptodefinicion.de/wp-content/uploads/2011/08/Ciencias_Naturales-2.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0011'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0125'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0126'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0127'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0128'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0032'),
		title: '¿Cuanto sabes del arcade de los 90?',
		description: 'Demuestranos que tanto sabes de los viejos fichines',
		image:
			'https://larepublica.pe/resizer/zyNRfxmqAyRP-5rZWyj3JXvMH4A=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/PGRPRUGRNNEXZB345OEXC6LXHA.png',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0012'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0129'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0130'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0131'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0132'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
	{
		//aca yo paqin
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0033'),
		title: 'Preguntas aleatorias de Cs. Naturales',
		description:
			'Demuestra tus conocimentos sobre esta ciencia en este quiz!',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		likes: 21,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0011'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0133'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0134'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0135'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0136'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0034'),
		title: 'Magnus Chase Quiz',
		description: '¿Just a Quiz for Magnus Chase Fans?',
		image:
			'https://images-na.ssl-images-amazon.com/images/I/51XraG33L2L._AC_UL600_SR396,600_.jpg',
		likes: 21,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0006'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0137'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0138'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0139'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0140'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0035'),
		title: 'Eragon Inheritance Cycle ULTIMATE Knowledge Quiz',
		description:
			"This is a very tough and obscure Eragon quiz! Certainly some questions are harder than others, but I hope that you find this is a challenge. The questions are in no particular order, and do not follow the chronology of the books. There are definitely SPOILERS in the quiz so watch out!!! The one thing that I couldn't do was properly replicate the dwarves accent marks, so I used normal accents instead. Let me know if you find any inconsistencies with the books, although I'm fairly sure all of the quiz is accurate. Thanks for doing the quiz!",
		image:
			'https://i0.wp.com/thegameofnerds.com/wp-content/uploads/2018/09/Eragon-Banner-INterview-GEEK-GIRL.jpg',
		likes: 74,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0006'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0141'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0142'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0143'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0144'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0003'),
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451ac0036'),
		title: 'El fabuloso mundo de la familia simpson',
		description: '¿Que tanto sabes sobre esta familia?',
		image:
			'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/los-simpson-1564565325.jpg',
		likes: 10,
		categoryId: mongoose.Types.ObjectId('5959e34adf833e1451ab0012'),
		questions: [
			mongoose.Types.ObjectId('5959e34adf833e1451af0145'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0146'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0147'),
			mongoose.Types.ObjectId('5959e34adf833e1451af0148'),
		],
		creatorId: mongoose.Types.ObjectId('5959e34adf833e1451aa0002'),
	},
];

module.exports = quizzes;
