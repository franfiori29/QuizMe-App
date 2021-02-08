const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0203'),
		title: 'What is a magic lantern?',
		options: [
			{ title: 'A collapsible paper lantern.', result: false },
			{
				title: 'A lantern that makes people invisible at night..',
				result: false,
			},
			{
				title:
					'A simple form of image projector used for showing photographic slides.',
				result: true,
			},
			{
				title:
					'A lantern made from a hollowed-out pumpkin with facial features.',
				result: false,
			},
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0204'),
		title:
			'When did the Lumiere Brothers screen their first films in Paris, France?',
		options: [
			{ title: 'July 4, 1776', result: false },
			{ title: 'September 1, 1879', result: false },
			{ title: 'December 28, 1895', result: true },
			{ title: 'April 1, 1900', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0205'),
		title: 'What were actualities in the 1890s based on?',
		options: [
			{ title: 'Everyday life', result: false },
			{ title: 'Actual news events', result: false },
			{ title: 'Fictional events', result: false },
			{ title: 'Holidays', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0206'),
		title: 'What were synopses of early silent films called?',
		options: [
			{ title: 'Sides', result: false },
			{ title: 'Outlines', result: false },
			{ title: 'Treatments', result: false },
			{ title: 'Scenarios', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0207'),
		title:
			'What type of script did Thomas Ince introduce that lead to the mass production of films under the Central Office Studio System?',
		options: [
			{ title: 'Continuity Script', result: false },
			{ title: 'Java Script', result: false },
			{ title: 'Master Scene Script', result: false },
			{ title: 'Shooting Script', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0208'),
		title:
			'What system of production replaced the Central Office Studio System?',
		options: [
			{ title: 'Master Scene System', result: false },
			{ title: 'Package Unit System', result: true },
			{ title: 'Singe Producer System', result: false },
			{ title: 'Director Unit System', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0209'),
		title: 'Which is NOT an Element of the Master Scene Script?',
		options: [
			{ title: 'Scene Headings', result: false },
			{ title: 'Dialogue', result: false },
			{ title: 'Stage Direction', result: true },
			{ title: 'Action', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0210'),
		title:
			'If a character is speaking from another room out of sight, what modifier do you add to the character name?',
		options: [
			{ title: '(V.O.)', result: false },
			{ title: '(O.S.)', result: true },
			{ title: '(O.O.S.)', result: false },
			{ title: '(M.O.S.)', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0211'),
		title:
			'Which of the following is NOT a difference between a Master Scene Script and a Continuity Script?',
		options: [
			{
				title:
					'Master Scene Scripts do not have scene headings with INT. or EXT.',
				result: false,
			},
			{
				title: 'Master Scene Scripts do not have scene numbers',
				result: false,
			},
			{
				title: 'Master Scene Scripts do not notate cuts.',
				result: false,
			},
			{
				title:
					'Master Scene Scripts avoid camera direction in the script',
				result: false,
			},
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0212'),
		title:
			'Which is the best estimate for the duration of a movie made from a properly formatted 112-page screenplay?',
		options: [
			{ title: '224 minutes', result: false },
			{ title: '150 minutes', result: false },
			{ title: '112 mintues', result: true },
			{ title: '60 minutes', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0213'),
		title:
			'The first day of whose trial sparked a courthouse riot in 1996\'s "A Time to Kill"?',
		options: [
			{ title: 'Ozzie Walls', result: false },
			{ title: 'Carl Lee Hailey', result: true },
			{ title: 'Pete Willard', result: false },
			{ title: 'Billy Ray Cobb', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0214'),
		title:
			'What song was sung during the closing musical number of 2005\'s "The 40-Year-Old Virgin"?',
		options: [
			{ title: 'Heat Of The Moment', result: false },
			{ title: 'Hello', result: false },
			{ title: 'Aquarius', result: true },
			{ title: "I'm Every Woman", result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0215'),
		title:
			'At the end of "Titanic", what did Rose do with the "Heart of the Ocean"?',
		options: [
			{ title: 'Put It In A Jewelry Box', result: false },
			{ title: 'Dropped It Into The Sea', result: true },
			{ title: 'Put It Around Her Neck', result: false },
			{ title: 'Hid It In Her Purse', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0216'),
		title:
			'In what U.S. city does the action take place in "The Departed"?',
		options: [
			{ title: 'Las Vegas', result: false },
			{ title: 'Boston', result: true },
			{ title: 'Miami', result: false },
			{ title: 'Beverly Hills', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0217'),
		title:
			'What kind of car was Jason Bourne in during the big car chase scene in "The Bourne Supremacy"?',
		options: [
			{ title: 'Mercedes Benz', result: false },
			{ title: 'Citroen', result: false },
			{ title: 'Jaguar', result: false },
			{ title: 'Mini-Cooper', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0218'),
		title:
			'In "Transformers" where is the U.S. Military base that the Decepticons first attack?',
		options: [
			{ title: 'Qatar', result: false },
			{ title: 'Iraq', result: false },
			{ title: 'Mexico', result: false },
			{ title: 'Germany', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0219'),
		title:
			'In "Toy Story", when Buzz finds out he is only a toy, he dons a hat and calls himself by what name?',
		options: [
			{ title: 'Princess Francine', result: false },
			{ title: 'Miss Lightyear', result: false },
			{ title: 'Mrs. Nesbit', result: true },
			{ title: 'Mrs. Macintosh', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0220'),
		title:
			'The ten-minute car chase in 1968\'s "Bullitt" took place on the streets of what American city?',
		options: [
			{ title: 'New York', result: false },
			{ title: 'Chicago', result: false },
			{ title: 'Los Angeles', result: false },
			{ title: 'San Francisco', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0221'),
		title:
			'In 1999\'s "Big Daddy", Sonny and Julian got into an argument over Julian\'s wanting to watch what?',
		options: [
			{ title: 'The Kangaroo Song', result: false },
			{ title: 'The Rabbit Song', result: false },
			{ title: 'The Anteater Song', result: false },
			{ title: 'The Wombat Song', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0222'),
		title:
			'The final game of the International Dodgeball Competition in "Dodgeball" was played between which teams?',
		options: [
			{ title: 'The Pirates And The Spiders', result: false },
			{ title: 'The Eights And The Jets', result: false },
			{ title: 'The Pros And The Cons', result: false },
			{ title: 'The Joes And The Cobras', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0223'),
		title:
			'In "Notting Hill", what did William Thacker do to Anna Scott to get her to come to his apartment?',
		options: [
			{ title: 'Told Her He Found Her Dog', result: false },
			{ title: 'Asked Her To Help Carry A Package', result: false },
			{ title: 'Asked Her On A Date', result: false },
			{ title: 'Spilled Orange Juice On Her', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0224'),
		title:
			'In "Lethal Weapon 4", what were Riggs and Murtaugh doing when they first met the Chinese immigrants?',
		options: [
			{ title: 'Hiking', result: false },
			{ title: 'Fishing', result: true },
			{ title: 'Camping', result: false },
			{ title: 'Surfing', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0225'),
		title:
			'In "American Gangster", what building was Frank Lucas in when he was arrested by Richie Roberts?',
		options: [
			{ title: 'A Church', result: false },
			{ title: 'A School', result: false },
			{ title: 'A Casino', result: false },
			{ title: 'A Nightclub', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0226'),
		title:
			'What pageant did Tracy Turnblad sneak into in 2007\'s "Hairspray"?',
		options: [
			{ title: 'Hairspray Queens', result: false },
			{ title: 'Miss Teenage Hairspray', result: true },
			{ title: 'Hairspray Ladies', result: false },
			{ title: 'Miss Baltimore Hairspray', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0227'),
		title:
			'In "Interview With the Vampire", what allowed Louis to finally see the blue sky once again?',
		options: [
			{ title: 'Photographs', result: false },
			{ title: 'The Movies', result: true },
			{ title: 'The Internet', result: false },
			{ title: 'Television', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0228'),
		title:
			'Which scene from "The 40-Year-Old Virgin" did Steve Carell insist on doing for real, in one take?',
		options: [
			{ title: "Andy's Bike Accident", result: false },
			{ title: 'The Closing Musical Number', result: false },
			{ title: 'The Speed Dating', result: false },
			{ title: "Andy's Chest Waxing", result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0229'),
		title:
			'In "Total Recall", Doug went to Rekall Inc. to retrieve memories of what experience?',
		options: [
			{ title: 'His Wedding', result: false },
			{ title: 'A Journey To The Moon', result: false },
			{ title: 'A Trip To Mars', result: true },
			{ title: 'A Childhood Vacation', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0230'),
		title:
			'The finale of 1999\'s "Godzilla" took place on which landmark bridge?',
		options: [
			{ title: 'Golden Gate Bridge', result: false },
			{ title: 'London Bridge', result: false },
			{ title: 'Fourth Rail Bridge', result: false },
			{ title: 'Brooklyn Bridge', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0231'),
		title:
			'How many Agent Smiths appeared in the famous fight scene from "The Matrix Reloaded"?',
		options: [
			{ title: '1000', result: false },
			{ title: '100', result: true },
			{ title: '500', result: false },
			{ title: '50', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0232'),
		title:
			"What did the Black Pearl's skeleton crew walk across to attack the ships of the British navy?",
		options: [
			{ title: 'The Hulls Of Docked Ships', result: false },
			{ title: 'London Bridge', result: false },
			{ title: 'The Boston Harbor', result: false },
			{ title: 'The Ocean Floor', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0233'),
		title:
			'A bullet crushed itself against what part of Superman\'s body in 2006\'s "Superman Returns"?',
		options: [
			{ title: 'His Knee', result: false },
			{ title: 'His Eye', result: true },
			{ title: 'His Back', result: false },
			{ title: 'His Ear', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0234'),
		title:
			'In 2003\'s "Hulk", what did Bruce Banner discover when the lab\'s janitor visited him in the hospital?',
		options: [
			{ title: 'The Man Was A Detective', result: false },
			{ title: 'The Man Was A Ghost', result: false },
			{ title: 'The Man Was The Hulk', result: false },
			{ title: 'The Man Was His Father', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0235'),
		title:
			'In "Honey, I Shrunk The Kids", where did Wayne Szalinsky accidentally place his shrunken children?',
		options: [
			{ title: 'On The Roof', result: false },
			{ title: 'In His Pocket', result: false },
			{ title: 'In The Basement', result: false },
			{ title: 'In The Trash Can', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0236'),
		title:
			'At what club did Vincent Vega and Mia Wallace dance to Chuck Berry in "Pulp Fiction"?',
		options: [
			{ title: "Jackrabbit Slim's", result: false },
			{ title: "Rowdy Ron's", result: false },
			{ title: "Buckshot Bill's", result: false },
			{ title: "Paulie Gee's", result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0237'),
		title:
			'In which part of "2001: A Space Odyssey" did the humming monolith first appear?',
		options: [
			{ title: 'The Lunar Journey In The Year 2000', result: false },
			{ title: 'The Dawn Of Man', result: true },
			{ title: 'Jupiter And Beyond The Infinite', result: false },
			{ title: 'Jupiter Mission', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0238'),
		title:
			'The movie "I Am Legend" opens up with Dr. Kripper speaking about what scientific breakthrough?',
		options: [
			{ title: 'Cancer Cure', result: false },
			{ title: 'Measles Cure', result: false },
			{ title: 'Eternal Life', result: false },
			{ title: 'New Power Source', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0239'),
		title:
			'In an opening scene of "City Of God" what are the young people chasing through the streets?',
		options: [
			{ title: 'Rats', result: false },
			{ title: 'Old People', result: false },
			{ title: 'Dogs', result: false },
			{ title: 'Chickens', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0240'),
		title:
			'Which Batman movie shows Bruce Wayne in a well being attacked by bats?',
		options: [
			{ title: 'Batman Forever', result: false },
			{ title: 'Batman Begins', result: true },
			{ title: 'Batman And Robin', result: false },
			{ title: 'Batman', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0241'),
		title:
			'Where is Lois Lane when she starts to interview Superman in person in the film "Superman Returns"?',
		options: [
			{ title: 'Office', result: false },
			{ title: 'Park', result: false },
			{ title: 'Bedroom', result: false },
			{ title: 'Rooftop', result: true },
		],
	},
];
