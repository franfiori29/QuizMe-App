const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

/* --- Models --- */
const User = require('./models/User');
const Category = require('./models/Category');
const Question = require('./models/Question');
const Quiz = require('./models/Quiz');

/* --- Utils --- */
const utilsUsers = require('./utils/bulkCreate/Users');
const utilsCategories = require('./utils/bulkCreate/Categories');
const utilsQuizzes = require('./utils/bulkCreate/Quizzes');
const utilsQuestions = require('./utils/bulkCreate/Questions');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

mongoose
    .connect('mongodb://localhost:27017/quiz', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true,
        useCreateIndex: true,
    })
    .then(async() => {
        await mongoose.connection.db.dropDatabase();
        console.info('MONGODB CONNECTED');
        try {
            await User.collection.insertMany(utilsUsers);
            await Category.collection.insertMany(utilsCategories);
            await Quiz.collection.insertMany(utilsQuizzes);
            await Question.collection.insertMany(utilsQuestions);
            console.log('BulkCreate Succesful');
        } catch (err) {
            console.log('BulkCreate Error', err);
        }
        return server.listen({ port: 4000 });
    })
    .then((res) => console.log(res.url))
    .catch(console.log);