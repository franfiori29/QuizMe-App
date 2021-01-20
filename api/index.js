const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const User = require('./models/User');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const utilsUsers = require('./utils/bulkCreate/Users');

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
        mongoose.connection.db.dropDatabase();
        console.info('MONGODB CONNECTED');
        try {
            await User.collection.insertMany(utilsUsers);
            console.log('BulkCreate Succesful');
        } catch (err) {
            console.log('BulkCreate Error', err);
        }
        return server.listen({ port: 4000 });
    })
    .then((res) => console.log(res.url))
    .catch(console.log);