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
			{ title: 'Darth Maul', result: false },
			{ title: 'Darth Sidious', result: true },
			{ title: 'Darth Vader', result: false },
			{ title: 'Darth Tyranus', result: false },
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
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0025'),
		title: '¿Cuál de éstos es un indicador de PH?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Papel químico', result: false },
			{ title: 'Papel de potencial', result: false },
			{ title: 'Papel tornasol', result: true },
			{ title: 'Papel PH', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0026'),
		title: 'Una sustancia con PH 7, ¿qué tipo de sustancia es?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Positiva', result: false },
			{ title: 'Ácida', result: false },
			{ title: 'Neutra', result: true },
			{ title: 'Básica', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0027'),
		title: '¿Qué método permite separar un sólido de un líquido? ',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Decantación', result: false },
			{ title: 'Ebullición', result: false },
			{ title: 'Filtración', result: true },
			{ title: 'Vaporización', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0028'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	// EL MUNDO DE JS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0029'),
		title: '¿En que año nacio lo que hoy conocemos como Javascript?',
		options: [
			{ title: '1999', result: false },
			{ title: '2001', result: false },
			{ title: '1997', result: false },
			{ title: '1995', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0030'),
		title: "¿Que tipo de notacion estoy usando si escribo 'result.data'",
		options: [
			{ title: 'DOT', result: true },
			{ title: 'Bracket', result: false },
			{ title: 'ES6', result: false },
			{ title: 'ES5', result: false },
		],
		time: 15,
		score: 3,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0031'),
		title: '¿Un array que tipo de dato es?',
		options: [
			{ title: 'String', result: false },
			{ title: 'Number', result: false },
			{ title: 'Boolean', result: false },
			{ title: 'Object', result: true },
		],
		time: 10,
		score: 8,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0032'),
		title:
			'Si mostrara en consola la siguiente condicion ([] !== []) ¿Que devolveria?',
		options: [
			{ title: 'Error', result: false },
			{ title: 'Undefined', result: false },
			{ title: 'False', result: false },
			{ title: 'True', result: true },
		],
		time: 10,
		score: 7,
	}, // TERMINA EL MUNDO DEL JS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0033'),
		title: '¿Cómo se llama esta pintura del 1656? ',
		image: 'https://emtstatic.com/2017/12/meninas.jpg',
		options: [
			{ title: 'Las Meninas', result: true },
			{ title: 'El beso', result: false },
			{ title: 'Las señoras de Avignon', result: false },
			{ title: 'La dama del armiño', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0034'),
		title: '¿Cómo se llama esta obra del 1942? ',
		image: 'https://blog.artsper.com/wp-content/uploads/2019/06/600.jpeg',
		options: [
			{ title: 'La noche', result: false },
			{ title: 'Nightsky', result: false },
			{ title: 'Nighthawks', result: true },
			{ title: 'Ambiente nocturno', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0035'),
		title: '¿Cómo se llama esta pintura del 1872? ',
		image:
			'https://todoestaennuestracabeza.files.wordpress.com/2012/06/impresion_sol_naciente11.jpg',
		options: [
			{ title: 'Walter Lillies', result: false },
			{ title: 'Amanecer', result: false },
			{ title: 'Sol en alza', result: false },
			{ title: 'Impresión, sol naciente', result: true },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0036'),
		title: '¿Cómo se llama esta pintura del 1656? ',
		image:
			'https://images-na.ssl-images-amazon.com/images/I/51cS5kQWTrL._AC_SX450_.jpg',
		options: [
			{ title: 'Lirios', result: true },
			{ title: 'Lavandas', result: false },
			{ title: 'Amapolas', result: true },
			{ title: 'Campo de rosas', result: false },
		],
		time: 10,
		score: 7,
	}, //TERMINA COMO SE LLAMA LA OBRA
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0037'),
		title:
			'ifconfig has been deprecated, what command is now recommended for changing IP addresses in the live config?',
		image:
			'https://crock.com.ar/wp-content/uploads/2016/10/Patricio_Rey_Y_Sus_Redonditos_De_Ricota-Oktubre.jpg',
		options: [
			{ title: 'netconf', result: false },
			{ title: 'ipman', result: false },
			{ title: 'ip', result: true },
			{ title: 'ipconfig', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0038'),
		title:
			'What is the output of the following command?tail -n 20 test.txt',
		image:
			'https://static.posters.cz/image/750/marco-de-plastico-pink-floyd-dark-side-of-the-moon-i23364.jpg',
		options: [
			{ title: 'The first 20 lines of test.txt', result: false },
			{
				title:
					'The last 20 lines of test.text including the black lines',
				result: true,
			},
			{
				title: 'The last 20 lines of test.text with lines numbers',
				result: false,
			},
			{
				title:
					'The last 20 lines of test.text omitting the black lines',
				result: false,
			},
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0039'),
		title:
			'After installing a new package, in which directory are you most likely find its configuration file?',
		image:
			'https://www.latercera.com/resizer/C8sTiHepMe4vbe80EklUbolRcS4=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/WWOU6GDWVRELDPUN3L2NMKSSW4.jpg',
		options: [
			{ title: '/opt', result: false },
			{ title: '/conf', result: false },
			{ title: '/etc', result: true },
			{ title: '/lib', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0040'),
		title:
			'What is the first character for a file or directory names if they should not be displayed by commands such as ls unless specifically requested?',
		image:
			'https://townsquare.media/site/295/files/2013/11/Beatles-Rubber-Soul.jpg',
		options: [
			{ title: '- (minus)', result: false },
			{ title: '. (dot)', result: true },
			{ title: ' (backslash)', result: false },
			{ title: '_ (underscore)', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		//ACA EMPIEZO YO NACHOTIPS
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0041'),
		title: '¿Cuál de los siguientes sintaxis es correcta',
		options: [
			{ title: 'body {color: black};', result: false },
			{
				title: 'body {backgroundColor: blue, color: black}',
				result: false,
			},
			{ title: 'body {background-color: blue}', result: false },
			{ title: 'body {color: black;}', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0042'),
		title: '¿Para que sirve la propiedad background-color?',
		options: [
			{ title: 'Para establecer un color de fuente', result: false },
			{
				title: 'Para establecer un color de fondo al elemento',
				result: true,
			},
			{
				title: 'Para establecer un gradiente al elemento',
				result: false,
			},
			{
				title: 'Para establecer un color en el body del documento',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0043'),
		title: '¿Para que sirve la propiedad overflow?',
		options: [
			{
				title:
					'Para establecer  qué debe suceder si el contenido se desborda en el cuadro(caja) de un elemento.',
				result: true,
			},
			{
				title:
					'Para establecer  qué debe suceder si el contenido no tiene color de fondo.',
				result: false,
			},
			{
				title:
					'Para establecer  qué debe suceder si el contenido no se alinea en el centro.',
				result: false,
			},
			{
				title: 'Esta propiedad no existe en CSS2020',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0044'),
		title:
			'¿Que significa la siguiente sintaxis de la propiedad margin? "margin: 0px 20px"',
		options: [
			{
				title: 'Que va a tener 20px de margen en todos los ejes',
				result: false,
			},
			{
				title:
					'Que va a tener 20px de margen en el Vertical e 20px de margen en el eje Horizontal',
				result: false,
			},
			{
				title:
					'Que va a tener 0 de margen en el Vertical e 20px de margen en el eje Horizontal',
				result: true,
			},
			{
				title: 'Que va a tener 20px de margen en el eje Horizontal',
				result: false,
			},
		],
		time: 10,
		score: 5,
	}, //ACA TERMINO YO NACHOTIPS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0045'),
		title: 'How did the dinosaurs die out?',
		options: [
			{ title: 'Because of the Ice age', result: false },
			{ title: 'An asteroid impact', result: true },
			{
				title:
					"DANG IT! They didn't die. In fact they excreted on your car last Friday.",
				result: false,
			},
			{ title: 'A FLOOD 500 years ago', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0046'),
		title: 'What kind of small objects composes much of the universe?',
		options: [
			{ title: 'Anti-matter', result: false },
			{ title: 'Atoms', result: false },
			{ title: 'My dreams', result: false },
			{ title: 'Dark matter', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0047'),
		title: 'Give an example of a decapod: ',
		options: [
			{ title: 'Unicorns!', result: false },
			{ title: 'Crab', result: true },
			{ title: "They don't exist", result: false },
			{ title: 'Beetle', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0048'),
		title: 'Which is a hypothetical string theory weightless particle?',
		options: [
			{ title: 'Anti-matter', result: false },
			{ title: 'Baryonic Matter', result: false },
			{ title: 'EARTH WORM JIM', result: false },
			{ title: 'Dagobah', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0049'),
		title: '¿Cuántos mundiales tiene Michael Schumacher?',
		image:
			'https://www.infobae.com/new-resizer/iTlkaCMRtjPmgb0bj4DhZgZ_sH0=/420x315/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/4CSV7B36DFDDURKGSKD3INJ5GU.jpg',
		options: [
			{ title: '5', result: false },
			{ title: '8', result: false },
			{ title: '7', result: true },
			{ title: '6', result: false },
		],
		time: 5,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0050'),
		title: '¿Cuántas Copas Libertadores ganó Ricardo Bochini?',
		image:
			'https://www.elcomercio.com/files/article_main/uploads/2019/11/15/5dcf5b0d76c36.jpeg',
		options: [
			{ title: '4', result: false },
			{ title: '3', result: false },
			{ title: '5', result: true },
			{ title: '6', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0051'),
		title: '¿Cuántos jugadores tiene un equipo de Handball?',
		image:
			'https://losolimpicos.com.ar/blog/wp-content/uploads/2016/08/handball-Argentina.jpg',
		options: [
			{ title: '7', result: true },
			{ title: '6', result: false },
			{ title: '5', result: false },
			{ title: '4', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0052'),
		title: 'El partido más largo de tenis de la historia duró:',
		image:
			'https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2020/06/24083428/2.53539380-752x428.jpg',
		options: [
			{ title: '7 horas', result: false },
			{ title: '9 horas', result: false },
			{ title: '11 horas', result: true },
			{ title: '13 horas', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0053'),
		title: '¿Cuál es la mascota de Neville Longbottom?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Hedwig', result: false },
			{ title: 'Draco', result: false },
			{ title: 'Trevor', result: true },
			{ title: 'Sra. Norris', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0054'),
		title: '¿Cuantos jugadores estan permitidos en un equipo de Quidditch?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: '14', result: false },
			{ title: '11', result: false },
			{ title: '7', result: true },
			{ title: '15', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0055'),
		title: '¿En que se transforma el Boggart de Parvati Patil? ',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'En Snape vestido de vieja', result: false },
			{ title: 'En un Dementor', result: false },
			{ title: 'En una momia bañada en sangre', result: true },
			{ title: 'En Voldemort', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0056'),
		title:
			'¿Qué pagina de libro le dice Snape a Harry que ponga en la clase en la cual reemplaza a Lupin?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: '666', result: false },
			{
				title: '194',
				result: false,
			},
			{
				title: '394',
				result: true,
			},
			{
				title: '420',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		// ACA YO NACHOTIPS
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0057'),
		title:
			'¿Qué canción toca McFly en su prueba para el baile del instituto de 1985?',
		options: [
			{ title: "'Suspicius mind', de Elvis Presley", result: false },
			{
				title: "'California dreamin', de The Mamas & The Papas",
				result: false,
			},
			{
				title: "‘The power of love', de Huey Lewis and The News",
				result: true,
			},
			{ title: "'Twist and shout', de los Beatles", result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0058'),
		title:
			'¿Cuál es el resultado de la siguiente multiplicación: (3/4)x4? ',
		options: [
			{ title: 'Nike Air MAG', result: true },
			{ title: 'Nike Air FAST', result: false },
			{ title: 'Nike Air JUMP', result: false },
			{ title: 'Nike Air CRAFT', result: false },
		],
		time: 15,
		score: 3,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0059'),
		title: '¿Cómo se llama la novia de Marty McFly?',
		options: [
			{ title: 'Louise Harris', result: false },
			{ title: 'Claire Alison', result: false },
			{ title: 'Mary Jane', result: false },
			{ title: 'Jennifer Parker', result: true },
		],
		time: 10,
		score: 8,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0060'),
		title: "¿En qué localidad nació el doctor Emmett Lathrop Brown, 'Doc'?",
		options: [
			{ title: 'Reno (Nevada)', result: false },
			{ title: 'Yucca Valley (California)', result: false },
			{ title: 'Lubbok (Texas)', result: false },
			{ title: 'Hill Valley (California)', result: true },
		],
		time: 10,
		score: 7,
	}, // ACA TERMINO NACHOTIPS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0061'),
		title: 'Frase 1:',
		options: [
			{
				title: 'La verdad es el peor enemigo de un mentiroso',
				result: false,
			},
			{
				title:
					'Solo la verdad podría romperme. ¿Qué hay más duro que la verdad?',
				result: true,
			},
			{ title: '¿Que seria de mi sin mis mentiras?', result: false },
			{ title: 'Tu eres la unica dueña de mi verdad', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0062'),
		title: 'Frase 2:',
		options: [
			{ title: 'Me gustan las monjas de mas de 40 años', result: false },
			{
				title:
					'Sólo los sacerdotes y los locos no tienen miedo a nada, y yo nunca me he llevado muy bien con Dios:',
				result: true,
			},
			{
				title:
					'Nunca me lleve bien con los dioses, ¿Como podría ponerme al nivel de un ser inferior?',
				result: false,
			},
			{
				title:
					'La vida es una sola como para preocuparnos de la religión, o el amor...',
				result: false,
			},
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0063'),
		title: 'Frase 3: ',
		options: [
			{
				title:
					'Todos los hombres sabios temen tres cosas: la ira de una mujer, la noche interminable y la deuda heredada.',
				result: false,
			},
			{
				title:
					'Todos los hombres sabios temen tres cosas: la tormenta en el mar, la noche sin luna y la ira de un hombre apacible.',
				result: true,
			},
			{
				title:
					'Todos los hombres sabios temen tres cosas: a los monstruos, a la oscuridad y a las alturas.',
				result: false,
			},
			{
				title:
					'Todos los hombres sabios temen dos cosas: el día sin sol y la ira de una madre.',
				result: false,
			},
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0064'),
		title: 'Frase 4:',
		options: [
			{
				title:
					'Sí, soy un mito. No existo en realidad. Es todo una ilusión de sus mentes',
				result: false,
			},
			{
				title:
					'Sí, soy un mito. No existo en realidad. Es todo una ilusión de tu mente',
				result: false,
			},
			{
				title:
					'Sí, soy un mito. Un mito muy especial que se crea a sí mismo. No me gusta que los demás  cuenten mentiras sobre mí.',
				result: false,
			},
			{
				title:
					'Sí, soy un mito. Un mito muy especial que se crea a sí mismo. Las mejores mentiras sobre mí son las que yo mismo he contado.',
				result: true,
			},
		],
		time: 10,
		score: 7,
	}, //aca termina F
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0065'),
		title:
			'Adivina cuántos años tengo sabiendo que la tercera parte de ellos menos 1 es igual a la sexta parte',
		options: [
			{ title: '6', result: true },
			{ title: '7', result: false },
			{ title: '5', result: false },
			{ title: '8', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0066'),
		title:
			'Una rueda de un coche da 4590 vueltas en 9 minutos. ¿Cuántas vueltas dará en 24 horas y 24 minutos?',
		options: [
			{ title: '2868', result: false },
			{ title: '746640', result: true },
			{ title: '991440', result: false },
			{ title: '41310', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0067'),
		title:
			'Juan tiene 20 años menos que su padre y este tiene el triple de los años de su hijo. ¿Qué edad tienen cada uno?',
		options: [
			{ title: '11 Juan, 31 el padre', result: false },
			{ title: '10 Juan, 30 el padre', result: false },
			{ title: '12 Juan, 32 el padre', result: true },
			{ title: '13 Juan, 33 el padre', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0068'),
		title:
			'En una panadería con 80 kg son capaces de hacer 120 kg de pan. ¿Cuántos kg de harina serán necesarios para hacer 99 kg de pan?',
		options: [
			{
				title: 'Si quieres hacer 99 panes necesitas 79 kg de harina',
				result: false,
			},
			{
				title: 'Si quieres hacer 99 panes necesitas 58 kg de harina',
				result: false,
			},
			{
				title: 'Si quieres hacer 99 panes necesitas 68 kg de harina',
				result: false,
			},
			{
				title: 'Si quieres hacer 99 panes necesitas 66kg de harina',
				result: true,
			},
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0069'),
		title: '¿Qué esposas de Enrique VIII fueron decapitadas?',
		options: [
			{ title: 'Catalina Howard y Catalina Parr', result: false },
			{ title: 'Ana Bolena y Catalina de Aragón', result: false },
			{ title: 'Ana de Cléveris y Ana Bolena', result: false },
			{ title: 'Ana Bolena y Catherine Howard', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0070'),
		title:
			'¿Qué emperador romano legalizó el cristianismo y puso fin a la persecución de los cristianos?',
		options: [
			{ title: 'Nerón', result: false },
			{ title: 'Adriano', result: false },
			{ title: 'Constantino', result: true },
			{ title: 'Trajano', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0071'),
		title: '¿Quién fue el primer Presidente de Estados Unidos?',
		options: [
			{ title: 'George Washington', result: true },
			{ title: 'Andrew Jackson', result: false },
			{ title: 'Thomas Jefferson', result: false },
			{ title: 'Abraham Lincoln', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0072'),
		title: '¿Qué facción dirigió MaoZedong durante la guerra civil China?',
		options: [
			{ title: 'Confederados', result: false },
			{ title: 'Comunistas', result: true },
			{ title: 'Protestantes', result: false },
			{ title: 'Nacionalistas', result: false },
		],
		time: 10,
		score: 5,
	}, //hasta acá ocupado
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0073'),
		title: 'Frase 1:',
		options: [
			{ title: 'Estambul', result: false },
			{ title: 'Ankara', result: true },
			{ title: 'Bursa', result: false },
			{ title: 'Antalya', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0074'),
		title: 'La capital de Canadá es: ',
		options: [
			{ title: 'Ontario', result: false },
			{ title: 'Ottawa', result: true },
			{ title: 'Montreal', result: false },
			{ title: 'Vancouver', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0075'),
		title: 'La capital de Australia es: ',
		options: [
			{ title: 'Sidney', result: false },
			{ title: 'Canberra', result: true },
			{ title: 'Melbourne', result: false },
			{ title: 'Darwin', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0076'),
		title: 'La capital de Malasia es: ',
		options: [
			{ title: 'Malaca', result: false },
			{ title: 'Kota Kinabalu', result: false },
			{ title: 'Ipoh', result: false },
			{ title: 'Kuala Lumpur', result: true },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0077'),
		title: '¿A cuánto equivale π?',
		options: [
			{ title: '3,141592', result: true },
			{ title: '3,149215', result: false },
			{ title: '3,144423', result: false },
			{ title: '3,144123', result: false },
		],
		time: 5,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0078'),
		title: '¿Qué formula es esta? S = π x R²',
		options: [
			{ title: 'Diametro de un circulo', result: false },
			{ title: 'Superficie de un circulo', result: true },
			{ title: 'Volumen de un cilindro', result: false },
			{ title: 'Superficie de paralelogramos', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0079'),
		title: '¿Qué expresa esta formula? e = mc²',
		options: [
			{ title: 'La teoria de la probabilidad', result: false },
			{ title: 'Equivalencia entre masa y volumen', result: true },
			{ title: 'Circunferencia de un circuito', result: false },
			{ title: 'Volumen de un cubo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0080'),
		title: '¿Como se le conoce a esta constante e?',
		options: [
			{ title: 'Infinito', result: false },
			{ title: 'Pi', result: false },
			{ title: 'Número de Euler', result: true },
			{ title: 'Número áureo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0081'),
		title:
			'¿Quién de los siguientes no fue parte de "Los Magníficos Siete"?',
		options: [
			{ title: 'Steve McQueen', result: false },
			{ title: 'Robert Vaughn', result: false },
			{ title: 'Clint Eastwood', result: true },
			{ title: 'Charles Bronson', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0082'),
		title: '¿Qué estado de EEUU no tiene una bandera cuadrada?',
		options: [
			{ title: 'Florida', result: false },
			{ title: 'Nuevo México', result: false },
			{ title: 'Ohio', result: true },
			{ title: 'Idaho', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0083'),
		title: '¿En qué año se considera el fin del imperio británico?',
		options: [
			{ title: '1929', result: false },
			{ title: '1986', result: false },
			{ title: '1997', result: true },
			{ title: '1945', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0084'),
		title: '¿En qué año se fundó Roma?',
		options: [
			{ title: '902 AC', result: false },
			{ title: '524 AC', result: false },
			{ title: '753 AC', result: true },
			{ title: '697 AC', result: false },
		],
		time: 10,
		score: 5,
	}, // ACA SE TERMINO DE OCUPAR F
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0085'),
		title: 'Capital de Santa Cruz: ',
		options: [
			{ title: 'Paraná', result: false },
			{
				title: 'Usuhaia',
				result: false,
			},
			{
				title: 'Río Gallegos',
				result: true,
			},
			{
				title: 'La Plata',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0086'),
		title: 'Capital de Chaco: ',
		options: [
			{ title: 'Posadas', result: false },
			{
				title: 'Paraná',
				result: false,
			},
			{
				title: 'Resistencia',
				result: true,
			},
			{
				title: 'Rawson',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0087'),
		title: 'Capital de Chubut: ',
		options: [
			{ title: 'San Luis', result: false },
			{
				title: 'Río Gallegos',
				result: false,
			},
			{
				title: 'Rawson',
				result: true,
			},
			{
				title: 'Santa Fe',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0088'),
		title: 'Capital de Santa Fe',
		options: [
			{ title: 'Rosario', result: false },
			{
				title: 'La Pampa',
				result: false,
			},
			{
				title: 'Santa Fe',
				result: true,
			},
			{
				title: 'Pinamar',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	//2
	// ACA EMPIEZO YOOO
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0089'),
		title: '¿Qué es este símbolo?',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/v1554721423/hxycp39uazfxhiwj3w2m.jpg',
		options: [
			{ title: 'Una nota', result: false },
			{ title: 'La nota DO', result: false },
			{ title: 'La clave de sol', result: true },
			{ title: 'La clave de do', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0090'),
		title: "¿Quién compuso 'Las cuatro estaciones'?",
		options: [
			{ title: 'Bach', result: false },
			{ title: 'Mozart', result: false },
			{ title: 'Beethoven', result: false },
			{ title: 'Vivaldi', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0091'),
		title: 'Una de estas obras no es de Mozart. ¿Cuál de ellas?',
		options: [
			{ title: 'Madama Butterfly', result: true },
			{ title: 'La Flauta mágica', result: false },
			{ title: 'Las bodas de fígaro', result: false },
			{ title: 'La falsa jardinera', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0092'),
		title: '¿Qué es un aria dentro de una ópera?',
		options: [
			{ title: 'El primer acto de una opera', result: false },
			{ title: 'La pieza compuesta para coro', result: false },
			{ title: 'El primer acto de una opera', result: false },
			{ title: 'La pieza compuesta para vos solista', result: true },
		],
		time: 10,
		score: 5,
	},
	// ACA TERMINO YOOO
	//3
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0093'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0094'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0095'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0096'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	//4
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0097'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0098'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0099'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0100'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0101'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0102'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0103'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0104'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0105'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0106'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0107'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0108'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0109'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0110'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0111'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0112'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0113'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0114'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0115'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0116'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0117'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0118'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0119'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0120'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0121'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0122'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0123'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0124'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0125'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0126'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0127'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0128'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0129'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0130'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0131'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0132'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0133'),
		title: '¿Qué instrumento usamos para conocer la masa de un objeto?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'El kilo gramo', result: false },
			{
				title: 'La cinta metrica',
				result: false,
			},
			{
				title: 'La balanza',
				result: true,
			},
			{
				title: 'El termometro',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0134'),
		title: '¿Cómo percibimos las características de los objetos?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Por nuestro carácter', result: false },
			{
				title: 'A través de guantes especiales',
				result: false,
			},
			{
				title: 'A través de los órganos de los sentidos',
				result: true,
			},
			{
				title: 'Por medio de la televisión',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0135'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0136'),
		title: '¿Qué es una mezcla?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Dos líquidos juntos', result: false },
			{
				title: 'La unión de dos o más átomos en un núcleo',
				result: false,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'Unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0137'),
		title: "Who is Magnus' Dad?",
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Thor', result: false },
			{
				title: 'Natalie',
				result: false,
			},
			{
				title: 'Frey',
				result: true,
			},
			{
				title: 'Odin',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0138'),
		title: 'What is Jack?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: "Fred's Staff", result: false },
			{
				title: 'Boom Daddy',
				result: false,
			},
			{
				title: 'Summarbrander',
				result: true,
			},
			{
				title: 'A Card',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0139'),
		title: 'What does Jack think is a Hot Lady Sword?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Summarbrander Sword', result: false },
			{
				title: 'Freya Sword',
				result: false,
			},
			{
				title: 'Skofnung Sword',
				result: true,
			},
			{
				title: 'Loki Sword',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0140'),
		title: 'What is Ratatoskr?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'A giant rat', result: false },
			{
				title: 'A giant cat',
				result: false,
			},
			{
				title: 'A giant squirrel',
				result: true,
			},
			{
				title: 'A Giant Dragon',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0141'),
		title:
			'Name of the riders sword that Eragon rejects in Ellesmera before crafting his own',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Brisingr', result: false },
			{
				title: 'Aya',
				result: false,
			},
			{
				title: 'Támerlein ',
				result: true,
			},
			{
				title: 'Tinkledeath',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0142'),
		title: 'What members of the Foresworn nearly captured Oromis?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Kialandí/Morzan', result: false },
			{
				title: 'Morzan/Unknown',
				result: false,
			},
			{
				title: 'Formora/Kialandí',
				result: true,
			},
			{
				title: 'Formora/Morzan',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0143'),
		title: 'How many dwarf clans are there?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: '9', result: false },
			{
				title: '11',
				result: false,
			},
			{
				title: '13',
				result: true,
			},
			{
				title: '15',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0144'),
		title:
			'What is the name of the whirlpool of the southwest coast of Alagaësia?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'The Inescapable', result: false },
			{
				title: 'The Terror',
				result: false,
			},
			{
				title: "The Boar's Eye",
				result: true,
			},
			{
				title: 'The Behemoth',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},

	//ACA TERMINA LINUX
];
module.exports = questions;
