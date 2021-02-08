const mongoose = require('mongoose');

module.exports = [
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0174'),
		title: 'Which Album Was NOT Released In 1997?',
		options: [
			{
				title: 'Matchbox Twenty "Yourself or Someone Like You"',
				result: false,
			},
			{ title: 'Semisonic "Feeling Strangely Fine"', result: true },
			{ title: 'Blink 182 "Dude Ranch"', result: false },
			{ title: 'Hanson "Middle of Nowhere"', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0175'),
		title: "Lollapalooza first began in Chicago's Grant Park In What Year?",
		options: [
			{ title: '1990', result: false },
			{ title: '1991', result: true },
			{ title: '1992', result: false },
			{ title: '1993', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0176'),
		title:
			'What one-hit-wonder made #38 on the charts in 1998 with the song "Flagpole Sitta"?',
		options: [
			{ title: 'Jimmy Ray', result: false },
			{ title: 'Semisonic', result: false },
			{ title: 'New Radicals', result: false },
			{ title: 'Harvey Danger', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0177'),
		title:
			'What rapper\'s violent death was foreshadowed by his final video, "I Ain\'t Mad At Cha"?',
		options: [
			{ title: 'Eazy-E', result: false },
			{ title: 'Tupac Shakur', result: true },
			{ title: 'Notorious B.I.G.', result: false },
			{ title: 'Fat Pat', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0178'),
		title: 'Which band released the song "How Bizarre" in 1997?',
		options: [
			{ title: 'INOJ', result: false },
			{ title: 'Us3', result: false },
			{ title: 'KLF', result: false },
			{ title: 'OMC', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0179'),
		title:
			'In what year was MC Hammer\'s Hit "You Can\'t Touch This" released?',
		options: [
			{ title: '1990', result: false },
			{ title: '1991', result: false },
			{ title: '1992', result: false },
			{ title: '1993', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0180'),
		title:
			'This artist was named artist of the decade by Rolling Stones Magazine.',
		options: [
			{ title: 'Eddie Vedder (Pearl Jam)', result: false },
			{ title: 'Bradley Nowell (Sublime)', result: false },
			{ title: 'Liam Gallagher (Oasis)', result: false },
			{ title: 'Kurt Cobain (Nirvana)', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0181'),
		title:
			"What song received the honor of being Rock Radio's most played song in 1997?",
		options: [
			{ title: 'Sister Hazel- "All For You"', result: false },
			{ title: 'Tonic- "If you Could Only See"', result: true },
			{ title: 'The Wallflowers- "One Headlight"', result: false },
			{ title: 'Matchbox 20- "Push"', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0182'),
		title:
			'What artist was NOT featured on Puff Daddy and the Family\'s album "No Way Out"?',
		options: [
			{ title: 'Mace', result: false },
			{ title: 'The Notoriour B.I.G.', result: false },
			{ title: 'Jay Z', result: false },
			{ title: 'Nas', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0183'),
		title: 'Who was NOT a member of The Spice Girls?',
		options: [
			{ title: 'Ginger', result: false },
			{ title: 'Cinnamon', result: true },
			{ title: 'Posh', result: false },
			{ title: 'Sporty', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0184'),
		title:
			'When this song came out feminist groups were outraged and claimed the song was about abusing women.',
		options: [
			{ title: 'Nirvana - "Rape Me"', result: false },
			{ title: 'Prodigy - "Smack My Bitch Up"', result: false },
			{ title: 'Matchbox 20 - "Push"', result: true },
			{ title: 'Sublime - "Wrong Way"', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0185'),
		title:
			'How many sixteenth notes equal the note duration of a quarter note?',
		options: [
			{ title: '1', result: false },
			{ title: '2', result: false },
			{ title: '3', result: false },
			{ title: '4', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0186'),
		title: 'How many flags does an eighth note have?',
		options: [
			{ title: '1', result: false },
			{ title: '2', result: false },
			{ title: '3', result: false },
			{ title: '4', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0187'),
		title: 'How many half notes equal the note duration of a whole note?',
		options: [
			{ title: '1', result: false },
			{ title: '2', result: true },
			{ title: '3', result: false },
			{ title: '4', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0188'),
		title: 'How many eighth notes equal the duration of a half note?',
		options: [
			{ title: '2', result: false },
			{ title: '3', result: false },
			{ title: '4', result: true },
			{ title: '5', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0189'),
		title: 'What is meant by "note duration?"',
		options: [
			{
				title: 'The length of time that a note is played.',
				result: false,
			},
			{ title: 'The volume that a note is played.', result: false },
			{
				title: 'What string on the guitar is used to play the note.',
				result: false,
			},
			{
				title: 'Whether a note is played alone or in a chord.',
				result: false,
			},
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0190'),
		title: 'Choose the correct one.',
		options: [
			{
				title:
					'Two-quarter notes equal the same duration as one whole note.',
				result: false,
			},
			{
				title:
					'Two-quarter notes equal the same duration as one half note.',
				result: true,
			},
			{
				title:
					'Four-quarter notes equal the same duration as one half note.',
				result: false,
			},
			{
				title:
					'Four-half notes equal the same duration as one whole note.',
				result: false,
			},
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0191'),
		title: 'The quarter note is...',
		options: [
			{ title: '1/2 of a whole note.', result: false },
			{ title: '1/3 of a whole note.', result: false },
			{ title: '1/4 of a whole note.', result: true },
			{ title: '1/6 of a whole note.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0192'),
		title: 'What note has the longest note duration?',
		options: [
			{ title: 'Whole note', result: false },
			{ title: 'Half note', result: false },
			{ title: 'Quarter note', result: false },
			{ title: 'Eighth note', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0193'),
		title: 'If you draw a flag on a note, what happens to the note?',
		options: [
			{ title: 'The note duration is multiplied by 2.', result: false },
			{ title: 'The note duration is multiplied by 4.', result: false },
			{ title: 'The note duration is divided by 2.', result: true },
			{ title: 'The note duration is divided by 4.', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0194'),
		title: 'How many flags does a sixteenth note have?',
		options: [
			{ title: '1', result: false },
			{ title: '2', result: true },
			{ title: '3', result: false },
			{ title: '4', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0195'),
		title: 'The unique sound of each voice or instrument is called:',
		options: [
			{ title: 'Melody', result: false },
			{ title: 'Difference', result: false },
			{ title: 'Tone Color', result: true },
			{ title: 'Pitch', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0196'),
		title:
			'What do we call the section of the song with the same lyrics and the same melody EVERY time?',
		options: [
			{ title: 'Chorus', result: false },
			{ title: 'Refrain', result: false },
			{ title: 'Verse', result: false },
			{ title: 'Chorus OR Refrain', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0197'),
		title:
			'What do we call the unchanging, repeated pulse that we can feel and count in music?',
		options: [
			{ title: 'Steady Beat', result: false },
			{ title: 'Melody', result: false },
			{ title: 'Harmony', result: false },
			{ title: 'Tune', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0198'),
		title:
			'What do we call the order in which same, similar, and different sections are organized to build one song or musical work?',
		options: [
			{ title: 'Form', result: false },
			{ title: 'Sectioning', result: false },
			{ title: 'Harmony', result: false },
			{ title: 'Tone Color', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0199'),
		title:
			'What is the name we give to the exact highness or lowness of a single tone?  Remember, tone means musical sound.',
		options: [
			{ title: 'Tune', result: false },
			{ title: 'Pitch', result: true },
			{ title: 'Melody', result: false },
			{ title: 'Song', result: false },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0200'),
		title:
			'What is the name for the way short and long sounds and silences are combined in time?  Remember that this combination of short and long sounds and silences is built on the steady beat.',
		options: [
			{ title: 'Melody', result: false },
			{ title: 'Harmony', result: false },
			{ title: 'Tune', result: false },
			{ title: 'Rhythm', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0201'),
		title:
			'What do we call a series of pitches which form a tune?  This is the part of the song we hum when we remember it.',
		options: [
			{ title: 'Harmony', result: false },
			{ title: 'Rhythm', result: false },
			{ title: 'Beat', result: false },
			{ title: 'Melody', result: true },
		],
	},
	{
		_id: mongoose.Types.ObjectId('5959e34adf833e1451af0202'),
		title:
			'What do we call two or more pitches or melodies sounding at the same time?',
		options: [
			{ title: 'Harmony', result: false },
			{ title: 'Orchestra', result: false },
			{ title: 'Rhythm', result: false },
			{ title: 'Singing', result: false },
		],
	},
];
