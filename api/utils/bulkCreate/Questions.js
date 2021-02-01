const mongoose = require('mongoose');

const questions = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0001'),
		title: '¿Qué fórmula es usada para encontrar el área de un triángulo?',
		options: [
			{ title: 'A = π * r^2', result: false },
			{ title: 'A = b * h', result: false },
			{ title: 'A = l * b * h', result: false },
			{ title: 'A = (b * h) / 2', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0002'),
		title:
			'¿Cuál es el resultado de la siguiente multiplicación: (3/4) x 4? ',
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
		title: 'La expresión 2 + 4 x 4 - 1 da: ',
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
		title: '5 x 5 + (5 x 0) + 1 + 2 x 0 es:',
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
		title: '¿Qué banda sacó este disco en 1973?',
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
		title: 'Este álbum del 2010 es de la banda:',
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
			{ title: 'Rolling Stones', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0013'),
		title:
			'¿Cuál es el record de tarjetas rojas sacadas durante un único partido?',
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
			'¿Qué dos países participaron en el primer partido internacional de fútbol?',
		options: [
			{ title: 'Alemania y Francia', result: false },
			{ title: 'Escocia e Inglaterra', result: true },
			{ title: 'Alemania y Escocia', result: false },
			{ title: 'Francia e Inglaterra', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0015'),
		title:
			'¿Quién fue el primer jugador que anotó goles durante cinco Copas Mundiales?',
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
		title:
			'¿Qué edad tenía el jugador profesional de fútbol más joven del mundo?',
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
		title: '¿Quién fue el maestro Sith del conde Dooku?',
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
			'¿Cómo se llama el planeta al que se retira Yoda tras la masacre de "La venganza de los Sith"?',
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
		title: '¿Quién es este comandante?',
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
		title: '¿Cuál de éstos es un indicador de pH?',
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
		title: 'Una sustancia con pH 7, ¿qué tipo de sustancia es?',
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
		title: '¿Qué método permite separar un sólido de un líquido?',
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
					'La unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'La unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	// EL MUNDO DE JS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0029'),
		title: '¿En qué año nació lo que hoy conocemos como Javascript?',
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
		title: "¿Qué tipo de notacion estoy usando si escribo 'result.data'",
		options: [
			{ title: 'Dot notation', result: true },
			{ title: 'Bracket notation', result: false },
			{ title: 'ES6 notation', result: false },
			{ title: 'ES5 notation', result: false },
		],
		time: 15,
		score: 3,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0031'),
		title: '¿Qué tipo de dato es un array?',
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
			'Si mostrara en consola la siguiente condicion: ([] !== []) ¿Qué devolveria?',
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
		title: '¿Cómo se llama esta pintura de 1656?',
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
		title: '¿Cómo se llama esta obra de 1942?',
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
		title: '¿Cómo se llama esta pintura del 1872?',
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
		title: '¿Cómo se llama esta pintura de 1656?',
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
			'ifconfig está en desuso. ¿Qué comando se recomienza usar para cambiar una dirección IP en live-config?',
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
		title: '¿Qué devuelve el siguiente comando? tail -n 20 test.txt',
		image:
			'https://static.posters.cz/image/750/marco-de-plastico-pink-floyd-dark-side-of-the-moon-i23364.jpg',
		options: [
			{ title: 'Las primeras veinte líneas de test.txt', result: false },
			{
				title:
					'Las últimas 20 líneas de test.text, incluyendo las líneas en blanco',
				result: true,
			},
			{
				title:
					'Las últimas veinte líneas de test.text, con líneas numeradas',
				result: false,
			},
			{
				title:
					'Las últimas veinte líneas de test.text, excluyendo las líneas en blanco',
				result: false,
			},
		],
		time: 8,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0039'),
		title:
			'Después de instalar un nuevo paquete, ¿en qué directorio es más probable que se halle su archivo de configuración?',
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
			'¿Cuál es el primer caracter en el nombre de un archivo o directorio si no queremos que se muestren usando comandos como ls a no ser que lo especifiquemos?',
		image:
			'https://townsquare.media/site/295/files/2013/11/Beatles-Rubber-Soul.jpg',
		options: [
			{ title: '- (guion)', result: false },
			{ title: '. (punto)', result: true },
			{ title: '\\ (barra invertida)', result: false },
			{ title: '_ (guion bajo)', result: false },
		],
		time: 8,
		score: 2,
	},
	{
		//ACA EMPIEZO YO NACHOTIPS
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0041'),
		title: '¿Cuál de las siguientes declaraciones es la correcta?',
		options: [
			{ title: 'body {color: black};', result: false },
			{
				title: 'body {backgroundColor: blue; color: black}',
				result: false,
			},
			{ title: 'body: {background-color: blue}', result: false },
			{ title: 'body {color: black}', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0042'),
		title: '¿Para qué sirve la propiedad background-color?',
		options: [
			{ title: 'Para establecer un color de texto', result: false },
			{
				title: 'Para definirle un color de fondo al elemento',
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
		title: '¿Para qué sirve la propiedad overflow?',
		options: [
			{
				title:
					'Para establecer qué debe suceder si el contenido se desborda de su contenedor.',
				result: true,
			},
			{
				title:
					'Para establecer qué debe suceder si el contenido no tiene color de fondo y resulta ilegible.',
				result: false,
			},
			{
				title:
					'Para establecer qué debe suceder si el contenido no se alinea verticalmente.',
				result: false,
			},
			{
				title: 'Esta propiedad no existe en CSS3',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0044'),
		title:
			'¿Qué significa la siguiente sintaxis de la propiedad margin? "margin: 0px 20px"',
		options: [
			{
				title: 'Que va a tener 20px de margen en todos los ejes',
				result: false,
			},
			{
				title:
					'Que va a tener 20px de margen vertical y 20px de margen horizontal',
				result: false,
			},
			{
				title:
					'Que va a tener 0px de margen vertical y 20px de margen horizontal',
				result: true,
			},
			{
				title:
					'Que va a tener 0px de margen arriba y 20px de margen debajo',
				result: false,
			},
		],
		time: 10,
		score: 5,
	}, //ACA TERMINO YO NACHOTIPS
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0045'),
		title: '¿Cómo se extinguieron los dinosaurios?',
		options: [
			{ title: 'Por la Era Glacial', result: false },
			{ title: 'Por el impacto de un asteroide', result: true },
			{
				title:
					'¡No murieron! De hecho este viernes vieron tu auto y lo rayaron todo',
				result: false,
			},
			{ title: 'Por una inundación hace 500 años', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0046'),
		title:
			'¿Cómo se llaman los objetos pequeños que componen todo en el Universo?',
		options: [
			{ title: 'Antimateria', result: false },
			{ title: 'Átomos', result: true },
			{ title: 'Mis sueños', result: false },
			{ title: 'Materia oscura', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0047'),
		title: 'Indica un ejemplo de un decápodo.',
		options: [
			{ title: 'Unicornios', result: false },
			{ title: 'Cangrejos', result: true },
			{ title: 'No existen', result: false },
			{ title: 'Escarabajos', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0048'),
		title:
			'¿Cómo se llama la partícula sin masa hipotética que surgió en la teoría de cuerdas?',
		options: [
			{ title: 'Antimateria', result: false },
			{ title: 'Materia oscura bariónica', result: true },
			{ title: 'Earthworm Jim', result: false },
			{ title: 'Dagobah', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0049'),
		title: '¿Cuántos mundiales ganó Michael Schumacher?',
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
		title: '¿Cuántos jugadores tiene un equipo de handball?',
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
		title: 'El partido de tenis más largo de la historia duró:',
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
		title: '¿Cuántos jugadores se permiten en un equipo de Quidditch?',
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
		title: '¿En qué se transforma el Boggart de Parvati Patil? ',
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
			'Cuando Snape reemplaza a Lupin en su clase, ¿en qué página les dice que abran su libro?',
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
	// <Volver al futuro>
	{
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
				title: "'The power of love', de Huey Lewis and The News",
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
			'¿Cuál es el modelo de zapatillas Nike popularizado en esta película? ',
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
		title:
			"¿En qué localidad nació el doctor Emmett Lathrop Brown, alias 'Doc'?",
		options: [
			{ title: 'Reno (Nevada)', result: false },
			{ title: 'Yucca Valley (California)', result: false },
			{ title: 'Lubbok (Texas)', result: false },
			{ title: 'Hill Valley (California)', result: true },
		],
		time: 10,
		score: 7,
	},
	// </Volver al futuro>
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
			{ title: '¿Qué sería de mí sin mis mentiras?', result: false },
			{ title: 'Tú eres la única dueña de mi verdad', result: false },
		],
		time: 10,
		score: 7,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0062'),
		title: 'Frase 2:',
		options: [
			{ title: 'Me gustan las monjas de más de 40 años', result: false },
			{
				title:
					'Sólo los sacerdotes y los locos no tienen miedo a nada, y yo nunca me he llevado muy bien con Dios',
				result: true,
			},
			{
				title:
					'Nunca me lleve bien con los dioses, ¿cómo podría ponerme al nivel de un ser inferior?',
				result: false,
			},
			{
				title:
					'La vida es una sola como para preocuparnos por la religión, o el amor...',
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
					'Sí, soy un mito. Un mito muy especial que se crea a sí mismo. No me gusta que los demás cuenten mentiras sobre mí.',
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
		time: 30,
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
		time: 30,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0067'),
		title:
			'Juan tiene 20 años menos que su padre y este tiene el triple de los años de su hijo. ¿Qué edad tiene cada uno?',
		options: [
			{ title: '11 Juan, 31 el padre', result: false },
			{ title: '10 Juan, 30 el padre', result: false },
			{ title: '12 Juan, 32 el padre', result: true },
			{ title: '13 Juan, 33 el padre', result: false },
		],
		time: 30,
		score: 2,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0068'),
		title:
			'En una panadería, con 80 kg de harina son capaces de hacer 120 kg de pan. ¿Cuántos kg de harina serán necesarios para hacer 99 kg de pan?',
		options: [
			{
				title: 'Para 99 panes necesitas 79 kg de harina',
				result: false,
			},
			{
				title: 'Para 99 panes necesitas 58 kg de harina',
				result: false,
			},
			{
				title: 'Para 99 panes necesitas 68 kg de harina',
				result: false,
			},
			{
				title: 'Para 99 panes necesitas 66kg de harina',
				result: true,
			},
		],
		time: 30,
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
		title: '¿Quién fue el primer presidente de Estados Unidos?',
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
		title: '¿Qué facción dirigió Mao Zedong durante la guerra civil China?',
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
		title: '¿Cuál es la capital de Turquía?',
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
		title: 'La capital de Canadá es:',
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
		title: 'La capital de Australia es:',
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
		title: 'Selecciona la capital de Malasia',
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
		title: '¿Qué se calcula con la siguiente fórmula? S = π x r²',
		options: [
			{ title: 'El diámetro de un círculo', result: false },
			{ title: 'La superficie de un círculo', result: true },
			{ title: 'El volumen de un cilindro', result: false },
			{ title: 'La superficie de los paralelogramos', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0079'),
		title: '¿Qué expresa esta formula? e = mc²',
		options: [
			{ title: 'La teoría de la probabilidad', result: false },
			{ title: 'La equivalencia entre masa y volumen', result: true },
			{ title: 'La circunferencia de un circuito', result: false },
			{ title: 'El volumen de un cubo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0080'),
		title: '¿Con qué nombre se conoce a la constante e?',
		options: [
			{ title: 'Número áurico', result: false },
			{ title: 'Número de Fidias', result: false },
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
		title: '¿Qué estado de EE.UU. no tiene una bandera cuadrada?',
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
		title: '¿Cuál es la capital de Santa Cruz?',
		options: [
			{ title: 'Paraná', result: false },
			{
				title: 'Ushuaia',
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
		title: 'Indica la capital de Chaco',
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
		title: 'La capital de Chubut es:',
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
		title: '¿Cuál es la capital de Santa Fe?',
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
			{ title: 'Una nota del pentagrama', result: false },
			{ title: 'La clave de do', result: false },
			{ title: 'La clave de sol', result: true },
			{ title: 'La clave de fa', result: false },
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
			{ title: 'El primer acto de la ópera', result: false },
			{ title: 'Una pieza compuesta para coro', result: false },
			{ title: 'Una obra recitada, ubicada entre actos', result: false },
			{ title: 'Una pieza compuesta para voz solista', result: true },
		],
		time: 10,
		score: 5,
	},
	//NUEVA
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0093'),
		title:
			'¿Cómo se llama el vocalista principal de la banda Guns And Roses?',
		options: [
			{ title: 'Axel Rose', result: true },
			{ title: 'William Bruce Bailey', result: false },
			{ title: 'Saul Hudson', result: false },
			{ title: 'Duff Mackaggan', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0094'),
		title: '¿A qué banda pertenece el tema Patience?',
		options: [
			{ title: 'Europe', result: false },
			{ title: 'Guns And Roses', result: true },
			{ title: 'Roxxete', result: false },
			{ title: 'Metallica', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0095'),
		title: '¿De qué género musical es la banda Rata Blanca?',
		options: [
			{ title: 'Rock', result: true },
			{ title: 'Heavy metal', result: false },
			{ title: 'Pop', result: false },
			{ title: 'Hard Rock', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0096'),
		title: '¿A qué banda pertenece la cancion It Must have been love?',
		options: [
			{ title: 'Guns and Roses', result: false },
			{ title: 'Roxxete', result: true },
			{ title: 'Scorpions', result: false },
			{ title: 'Rata Blanca', result: false },
		],
		time: 10,
		score: 5,
	},
	//4
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0097'),
		title:
			'Las dimensiones de una cancha de baloncesto son: X metros de largo por Y metros de ancho',
		options: [
			{ title: '28 x 15', result: true },
			{ title: '25 x 12,5', result: false },
			{ title: '15 x 28', result: false },
			{ title: '22 x 16', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0098'),
		title:
			'El terreno de juego deberá distar al menos X metros de cualquier obstáculo',
		options: [
			{ title: '2', result: true },
			{ title: '3', result: false },
			{ title: '1,5', result: false },
			{ title: '5', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0099'),
		title:
			'La línea de tiros libres estará trazada paralela a cada línea de fondo. El borde exterior de esta línea estará situado a...',
		options: [
			{ title: '4 metros', result: false },
			{ title: '6 metros', result: false },
			{ title: '5,8 metros', result: true },
			{ title: '3 metros', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0100'),
		title:
			'Deberán existir al menos X señales acústicas diferentes con sonidos claramente distintos y muy potentes, para indicar final del tiempo, etc.',
		options: [
			{ title: '4', result: false },
			{ title: '1', result: false },
			{ title: '2', result: true },
			{ title: '3', result: false },
		],
		time: 10,
		score: 5,
	},
	///sdadsad
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0101'),
		title: '¿Quién pintó este cuadro?',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/6ae32e8a-8f4b-42ea-acdb-cc289c30e77b/27356fc0-5c66-426a-ae93-5a8eb91e146f.jpg',
		options: [
			{ title: 'Botticelli', result: true },
			{ title: 'Miguel Ángel', result: false },
			{ title: 'Rafael', result: false },
			{ title: 'Tiziano', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0102'),
		title: '¿En qué siglo nació Velázquez?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Siglo XVII', result: true },
			{ title: 'Siglo XVIII', result: false },
			{ title: 'Siglo XV', result: false },
			{ title: 'Siglo XVI', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0103'),
		title: '¿En que museo está la Mona Lisa?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Museo del prado', result: false },
			{ title: 'British Museum', result: false },
			{ title: 'Louvre', result: true },
			{ title: 'Galeria Uffizi', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0104'),
		title: '¿Quién pintó este cuadro?',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/6ae32e8a-8f4b-42ea-acdb-cc289c30e77b/c721b679-ae20-40ea-877f-31e0f87ff3c0.jpg',
		options: [
			{ title: 'Vermeer', result: false },
			{ title: 'Rubens', result: false },
			{ title: 'Brueghet', result: false },
			{ title: 'Rembrandt', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0105'),
		title: '¿En qué siglo nació Van Gogh?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Siglo XIX', result: true },
			{ title: 'Siglo XX', result: false },
			{ title: 'Siglo XVII', result: false },
			{ title: 'Siglo XVI', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0106'),
		title: '¿Quién pintó este cuadro?',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/6ae32e8a-8f4b-42ea-acdb-cc289c30e77b/88fb50f4-1758-4ed0-85e9-f6e8279136e8.jpg',
		options: [
			{ title: 'Dalí', result: true },
			{ title: 'Magritte', result: false },
			{ title: 'Picasso', result: false },
			{ title: 'Miró', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0107'),
		title: '¿De qué estilo es este cuadro?',
		image:
			'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/6ae32e8a-8f4b-42ea-acdb-cc289c30e77b/dca95151-aaf9-4c9c-ab88-9aaf5a196609.jpg',
		options: [
			{ title: 'Surrealismo', result: false },
			{ title: 'Modernismo', result: false },
			{ title: 'Impresionismo', result: true },
			{ title: 'Expresionismo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0108'),
		title: '"La piedad" es una escultura de',
		options: [
			{ title: 'Miguel Ángel', result: true },
			{ title: 'Bernini', result: false },
			{ title: 'Donatello', result: false },
			{ title: 'Van Gogh', result: false },
		],
		time: 10,
		score: 5,
	},
	//historia
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0109'),
		title: '¿En qué año Colón descubrió América?',
		options: [
			{ title: '1492', result: true },
			{ title: '1502', result: false },
			{ title: '1496', result: false },
			{ title: '1488', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0110'),
		title: '¿En qué guerra participó Juana de Arco?',
		options: [
			{ title: 'Primera Cruzada', result: false },
			{ title: 'Guerras Napoleonicas', result: false },
			{ title: 'La guerra de los 100 años', result: true },
			{ title: 'La guerra de los 30 años', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0111'),
		title: '¿Cuál era la capital del Imperio Inca?',
		options: [
			{ title: 'Cusco', result: true },
			{ title: 'Quito', result: false },
			{ title: 'Machu Picchu', result: false },
			{ title: 'Lima', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0112'),
		title: '¿Cuándo se produjo principalmente el Siglo de Oro?',
		options: [
			{ title: 'Siglo XVI', result: true },
			{ title: 'Siglo XVII', result: false },
			{ title: 'Siglo XV', result: false },
			{ title: 'Siglo XIV', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0113'),
		title: '¿Cómo se llamaba el padre de Alejandro Magno?',
		options: [
			{ title: 'Ptolomeo I', result: false },
			{ title: 'Filipo II de Macedonia', result: true },
			{ title: 'Leonidas', result: false },
			{ title: 'Filipo I de Grecia', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0114'),
		title: '¿De qué año es "la Pepa", la primera Constitución española?',
		options: [
			{ title: '1812', result: true },
			{ title: '1806', result: false },
			{ title: '1822', result: false },
			{ title: '1792', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0115'),
		title: '¿Quién fue el primer emperador romano?',
		options: [
			{ title: 'Julio César', result: false },
			{ title: 'César Augusto', result: true },
			{ title: 'Nerón', result: false },
			{ title: 'Calígula', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0116'),
		title: '¿Qué rey encargó "Las Meninas"?',
		options: [
			{ title: 'Felipe IV', result: true },
			{ title: 'Felipe III', result: false },
			{ title: 'Carlos III', result: false },
			{ title: 'Felipe II', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0117'),
		title: '¿Qué es Zelandia?',
		options: [
			{ title: 'Una ciudad islandesa', result: false },
			{ title: 'Un parque temático', result: false },
			{ title: 'Un país del hemisferio norte', result: false },
			{ title: 'Un continente', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0118'),
		title:
			'El punto más profundo de la fosa de las Marianas está exactamente a...',
		options: [
			{ title: '11.144 metros de profundidad', result: false },
			{ title: '11.054 metros de profundidad', result: false },
			{ title: '11.044 metros de profundidad', result: false },
			{ title: '11.034 metros de profundidad', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0119'),
		title: '¿Cuál es el país de los mil lagos?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Finlandia', result: true },
			{ title: 'Estados Unidos', result: false },
			{ title: 'Canadá', result: false },
			{ title: 'Brasil', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0120'),
		title: 'El río más largo de Europa es...',
		options: [
			{ title: 'El Tajo', result: false },
			{ title: 'El Volga', result: true },
			{ title: 'El Támesis', result: false },
			{ title: 'El Ebro', result: false },
		],
		time: 10,
		score: 5,
	},
	//termina geografia
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0121'),
		title: '¿Con qué respira una ballena?',
		options: [
			{ title: 'Con la nariz', result: false },
			{ title: 'Con la piel', result: false },
			{ title: 'Con los pulmones', result: true },
			{ title: 'Con las branquias', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0122'),
		title: 'Al cruce entre un asno y una yegua se lo conoce como:',
		options: [
			{ title: 'Caballo', result: false },
			{ title: 'Burro', result: false },
			{ title: 'Asno', result: false },
			{ title: 'Mulo', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0123'),
		title: 'Para los botánicos, el tomate es una:',
		options: [
			{ title: 'Carne', result: false },
			{ title: 'Verdura', result: false },
			{ title: 'Hortaliza', result: false },
			{ title: 'Fruta', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0124'),
		title:
			'La fuerza física que la tierra ejerce sobre los cuerpos hacia su centro es la:',
		options: [
			{ title: 'Fuerza de gravedad', result: true },
			{ title: 'Fuerza normal', result: false },
			{ title: 'Fuerza de rozamiento', result: false },
			{ title: 'Fuerza cinética', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0125'),
		title:
			'¿Cómo se llama la teoría que considera que todos los organismos descendemos del mismo ancestro?',
		options: [
			{ title: 'Ateísmo', result: false },
			{ title: 'Darwinismo', result: true },
			{ title: 'Gradualismo', result: false },
			{ title: 'Creacionismo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0126'),
		title:
			'El proceso mediante el cual se generan moléculas orgánicas a partir de sustancias inorgánicas usando como fuente de energía el sol es:',
		options: [
			{ title: 'La fotosíntesis', result: true },
			{ title: 'La polinización', result: false },
			{ title: 'El catabolismo', result: false },
			{ title: 'El anabolismo', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0127'),
		title: 'Un miligramo son:',
		options: [
			{ title: '0,001 gramos', result: false },
			{ title: '1000 microgramos', result: false },
			{ title: '0,000001 kilogramos', result: false },
			{ title: 'Todas son correctas', result: true },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0128'),
		title: 'La velocidad a la que viaja la luz es de:',
		options: [
			{ title: '300.000 m/s', result: false },
			{ title: '300.000 km/s', result: true },
			{ title: '300.000 km/h', result: false },
			{ title: '300.000 cm/s', result: false },
		],
		time: 10,
		score: 5,
	},
	//aqui termina ciencias naturales
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0129'),
		title:
			'En 1990, este arcade con muñecos de nieve habitó las tascas y salas recreativas más selectas. ¿Cómo se llamaba?',
		image: 'https://i.blogs.es/783e97/snowbros/1366_2000.jpg',
		options: [
			{ title: 'Tumblepop', result: false },
			{ title: 'Snow Bros', result: true },
			{ title: 'Super Buster Bros', result: false },
			{ title: 'Rainbow Islands', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0130'),
		title:
			'¿Qué western pixelado protagonizaron estos caballeros en el año 1991?',
		image:
			'https://2.bp.blogspot.com/-msBQLHA_CZY/UbG-2QWEXlI/AAAAAAAALKc/Q9Ym0e3uGro/s1600/sunset-riders-personajes-Frikarte.jpg',
		options: [
			{ title: 'Wild west C.O.W.boys of moo mesa', result: false },
			{ title: 'Gun Smoke', result: false },
			{ title: 'Sunset Riders', result: true },
			{ title: 'Blood Bros', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0131'),
		title:
			'En 1992 se estrenó la versión Champion Edition de Street fighter II. ¿Qué ocurría cuando Zangief se alzaba con la victoria en el torneo?',
		options: [
			{
				title:
					'La madre de Zangief se reencontraba con su hijo tras años siguiéndole la pista por el globo.',
				result: false,
			},
			{
				title:
					'Mijaíl Gorbachov aparecía en un helicóptero para felicitar a Zangief y marcarse junto a él un baile cosaco.',
				result: false,
			},
			{
				title: 'El luchador se convertía en un héroe para la U.R.S.S.',
				result: false,
			},
			{
				title:
					'Zangief volvía a casa junto a su esposa e hija tras perdonarle la vida a Bison.',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0132'),
		title:
			'¿En el aeropuerto de qué ciudad transcurría el primer nivel de Spinmaster (1993)?',
		image:
			'https://bonusstagemagazine.files.wordpress.com/2019/05/spinmaster-2.jpg',
		options: [
			{ title: 'Nueva York', result: false },
			{ title: 'Berlin', result: false },
			{ title: 'Madrid', result: true },
			{ title: 'Tokio', result: false },
		],
		time: 10,
		score: 5,
	},
	// </ Videojuegos>
	// <Preguntas Aleatorias de CS Naturales>
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0133'),
		title: '¿Qué instrumento usamos para conocer la masa de un objeto?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'El kilogramo', result: false },
			{
				title: 'La cinta métrica',
				result: false,
			},
			{
				title: 'La balanza',
				result: true,
			},
			{
				title: 'El termómetro',
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
					'La unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'La unión de dos o más sustancias que mantienen sus propiedades alteradas',
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
					'La unión de dos o más sustancias que mantienen sus propiedades',
				result: true,
			},
			{
				title:
					'La unión de dos o más sustancias que mantienen sus propiedades alteradas',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	// </Preguntas aleatorias de cs naturales >
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0137'),
		title: '¿Quién es el padre de Magnus?',
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
		title: '¿Qué es Jack?',
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
		title: '¿Quién piensa Jack que es una "Hot Lady Sword"?',
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
		title: '¿Qué es Ratatoskr?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Una rata gigante', result: false },
			{
				title: 'Un gato gigante',
				result: false,
			},
			{
				title: 'Una ardilla gigante',
				result: true,
			},
			{
				title: 'Un dragón gigante',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0141'),
		title:
			'¿Cómo se llama la espada que Eragon rechaza en Ellesmera antes de crear la suya propia?',
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
		title: '¿Qué miembros de Los Apóstatas casi capturan a Oromis?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'Kialandí y Morzan', result: false },
			{
				title: 'Morzan y alguien desconocido',
				result: false,
			},
			{
				title: 'Formora y Kialandí',
				result: true,
			},
			{
				title: 'Formora y Morzan',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0143'),
		title: '¿Cuántos clanes de enanos existen?',
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
		title: '¿Cómo se llama en remolino de la costa sudeste de Alagaësia?',
		image:
			'https://cdn.mos.cms.futurecdn.net/Pt5VdLCdzSc35GTt75C4Cf-1200-80.jpg',
		options: [
			{ title: 'El inescapable', result: false },
			{
				title: 'El terror',
				result: false,
			},
			{
				title: 'El ojo del jabalí',
				result: true,
			},
			{
				title: 'El coloso',
				result: false,
			},
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0145'),
		title: '¿Quién es el hombre que aparece en esta imagen?',
		image:
			'https://static4.abc.es/media/play/2018/08/20/matt-groening-kgHG--1248x698@abc.jpg',
		options: [
			{ title: 'Sam Simon, productor ejecutivo', result: false },
			{ title: 'El creador de la serie, Matt Groening', result: true },
			{ title: 'Homero Simpson', result: false },
			{ title: 'Montgomery Burns', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0146'),
		title:
			'Los únicos personajes que han sido dibujados con cinco dedos en la serie son…',
		options: [
			{ title: 'Dios y Jesucristo', result: true },
			{ title: 'Paul McCartney y Yoko Ono', result: false },
			{ title: 'Bruce Springsteen y Lady Gaga', result: false },
			{ title: 'Apu y Bart', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0147'),
		title: '¿Cuál es el verdadero nombre del director Skinner?',
		options: [
			{ title: 'Armando Barrera', result: true },
			{ title: 'Carlos Latagris', result: false },
			{ title: 'Eduardo Panteras', result: false },
			{ title: 'Seymour Jay', result: false },
		],
		time: 10,
		score: 5,
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0148'),
		title: 'Homero tiene tres hijos?',
		options: [
			{ title: 'Verdadero', result: true },
			{ title: 'Falso', result: false },
		],
		time: 10,
		score: 5,
	},
];
module.exports = questions;
