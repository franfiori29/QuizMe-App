require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');

const typeDefs = require('./graphql/typeDefs/index.js');
const resolvers = require('./graphql/resolvers');
const passport = require('./passport');
const routes = require('./routes');

/* --- Models --- */
const User = require('./models/User');
const Category = require('./models/Category');
const Question = require('./models/Question');
const Quiz = require('./models/Quiz');
const Validation = require('./models/Validation');

/* --- Utils --- */
const utilsUsers = require('./utils/bulkCreate/Users');
const utilsCategories = require('./utils/bulkCreate/Categories');
const utilsQuizzes = require('./utils/bulkCreate/Quizzes');
const utilsQuestions = require('./utils/bulkCreate/Questions');
const utilsQuestionsEN = require('./utils/bulkCreate/EnglishQuestions/index');
const utilsValidations = require('./utils/bulkCreate/Validations');

const { MONGO_DATABASE, PORT } = process.env;

const app = express();

app.use((_, res, next) => {
	res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS'
	);
	next();
});

app.options('*', cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '50mb' }));

app.use(passport.initialize());

app.all('*', function (req, res, next) {
	passport.authenticate('bearer', function (err, user) {
		if (err) return res.status(400).json({ message: 'malformed JSON' });
		if (user) {
			req.user = user;
		}
		return next();
	})(req, res, next);
});

app.use('/', routes);

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req }) => ({ user: req.user }),
	playground: {
		endpoint: 'playground',
	},
});

server.applyMiddleware({ app });

mongoose
	.connect(MONGO_DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		autoCreate: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(async () => {
		await mongoose.connection.db.dropDatabase();
		console.info('MONGODB CONNECTED');
		try {
			await Category.create(utilsCategories);
			await Question.create(utilsQuestions.concat(utilsQuestionsEN));
			await Quiz.create(utilsQuizzes);
			await User.create(utilsUsers);
			await Validation.create(utilsValidations);
			console.log('BulkCreate Succesful');
		} catch (err) {
			console.log('BulkCreate Error', err);
		}
		return app.listen({ port: PORT });
	})
	.then(() => console.log('Express running'))
	.catch(console.log);
