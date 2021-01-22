import 'dotenv/config';

export default {
	name: 'QuizMeApp',
	version: '1.0.0',
	extra: {
		REACT_APP_API: process.env.REACT_APP_API,
	},
};
